import {ActionTypes} from './actions';

export const restoreIdentityAction = (identity: string) => ({
  type: ActionTypes.restoreIdentity,
  payload: identity,
});

export const signInAction = (identity: string) => ({
  type: ActionTypes.signIn,
  payload: identity,
});

export const signOutAction = () => ({
  type: ActionTypes.signOut,
});

export const loadingChangeAction = (newVal: boolean) => ({
  type: ActionTypes.loadingChangeAction,
  payload: newVal,
});