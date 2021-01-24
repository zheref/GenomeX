import {ActionTypes} from './actions';
import {Action} from '../types';

export function restoreIdentityAction(identity: string): Action {
  return {
    type: ActionTypes.restoreIdentity,
    payload: identity,
  };
}

export function signInAction(identity: string): Action {
  return {
    type: ActionTypes.signIn,
    payload: identity,
  };
}

export function signOut(): Action {
  return {
    type: ActionTypes.signOut,
  };
}