import AuthReducer, {initialState} from "./reducer";
import {restoreIdentity, signIn, signOut} from "./creators";

describe('auth reducer', () => {
  test('restores identity', () => {
    const identity = 'mocked-identity';
    expect(AuthReducer(initialState, restoreIdentity(identity))).toStrictEqual({
      ...initialState,
      userIdentity: identity,
      isLoading: false,
    });
  });

  test('signs in for the first time', () => {
    const identity = 'mocked-identity';
    expect(AuthReducer(initialState, signIn(identity))).toStrictEqual({
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