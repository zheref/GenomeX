import AuthReducer, {initialState} from "./reducer";
import {restoreIdentityAction, signInAction, signOut} from "./creators";

describe('auth reducer', () => {
  test('restores identity', () => {
    const identity = 'mocked-identity';
    expect(AuthReducer(initialState, restoreIdentityAction(identity))).toStrictEqual({
      ...initialState,
      userIdentity: identity,
      isLoading: false,
    });
  });

  test('signs in for the first time', () => {
    const identity = 'mocked-identity';
    expect(AuthReducer(initialState, signInAction(identity))).toStrictEqual({
      ...initialState,
      userIdentity: identity,
      isLoading: false,
    });
  });

  test('signs out forgetting set identity', () => {
    expect(AuthReducer(initialState, signOut())).toStrictEqual({
      ...initialState,
      userIdentity: null,
    });
  });
})