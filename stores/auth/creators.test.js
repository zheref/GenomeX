import {restoreIdentity, signIn, signOut} from "./creators";
import {ActionTypes} from "./actions";

describe('auth creators', () => {
  test('restore identity creator builds valid action with corresponding payload', () => {
    const identity = 'mocked-identity';
    expect(restoreIdentity(identity)).toStrictEqual({
      type: ActionTypes.restoreIdentity,
      payload: identity,
    });
  });

  test('sign in creator builds valid action with corresponding payload', () => {
    const identity = 'mocked-identity';
    expect(signIn(identity)).toStrictEqual({
      type: ActionTypes.signIn,
      payload: identity,
    });
  });

  test('sign out creator builds valid action with corresponding payload', () => {
    expect(signOut()).toStrictEqual({
      type: ActionTypes.signOut,
    });
  });
})