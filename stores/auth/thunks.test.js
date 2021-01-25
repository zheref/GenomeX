import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {initialState} from "./reducer";
import {bootstrapThunk, forgetIdentityThunk, identifyThunk} from './thunks';
import {restoreIdentityAction, signInAction, signOutAction} from './creators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.useFakeTimers();

const setupState = () => ({
  auth: initialState,
});

jest.mock('../../repositories/auth', () => ({
  __esModule: true,
  ...jest.requireActual('../../repositories/auth.mock'),
}));

describe('auth side effects', () => {
  it('restores identity after being retrieved from key-value storage from platform', async () => {
    const store = mockStore(setupState());
    await store.dispatch(bootstrapThunk());
    expect(store.getActions()).toStrictEqual([
        restoreIdentityAction('persisted-mocked-identity'),
    ]);
  });

  it('persists identity onto key-value storage from platform and set identity onto state', async () => {
    const identity = 'mocked-identity';
    const store = mockStore(setupState());
    await store.dispatch(identifyThunk(identity));
    expect(store.getActions()).toStrictEqual([
        signInAction(identity),
    ]);
  });

  it('forgets identity from key-value storage and clear value from state', async () => {
    const store = mockStore(setupState());
    await store.dispatch(forgetIdentityThunk());
    expect(store.getActions()).toStrictEqual([
        signOutAction(),
    ]);
  })
});