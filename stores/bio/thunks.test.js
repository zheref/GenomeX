import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {initialState} from "./reducer";
import {fetchBioThunk} from './thunks';
import {didFetchBioAction, bioLoadingChangeAction} from './creators';
import {mockedMe} from "../../repositories/bio.mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.useFakeTimers();

const setupState = () => ({
  auth: {
    isLoading: false,
    userIdentity: 'mocked-handle',
  },
  bio: initialState,
});

jest.mock('../../repositories/bio', () => ({
  __esModule: true,
  ...jest.requireActual('../../repositories/bio.mock'),
}));

describe('bio side effects', () => {
  it('dispatches action to set retrieved bio onto global state', async () => {
    const store = mockStore(setupState());
    await store.dispatch(fetchBioThunk());
    expect(store.getActions()).toStrictEqual([
        bioLoadingChangeAction(true),
        didFetchBioAction(mockedMe),
    ]);
  });
});