import {loadingChangeAction, restoreIdentityAction, signInAction, signOutAction} from "./creators";
import {ActionTypes} from "./actions";

describe('auth creators', () => {
  test('restore identity creator builds valid action with corresponding payload', () => {
    const identity = 'mocked-identity';
    expect(restoreIdentityAction(identity)).toStrictEqual({
      type: ActionTypes.restoreIdentity,
      payload: identity,
    });
  });

  test('sign in creator builds valid action with corresponding payload', () => {
    const identity = 'mocked-identity';
    expect(signInAction(identity)).toStrictEqual({
      type: ActionTypes.signIn,
      payload: identity,
    });
  });

  test('sign out creator builds valid action with corresponding payload', () => {
    expect(signOutAction()).toStrictEqual({
      type: ActionTypes.signOut,
    });
  });

  test('creates valid action that changes loading value', () => {
    const loading = false;
    expect(loadingChangeAction(loading)).toStrictEqual({
      type: ActionTypes.loadingChange,
      payload: loading,
    });
  });
})