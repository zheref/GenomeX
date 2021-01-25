import {fetchIdentityString, forgetIdentityString, persistIdentityString} from '../../repositories/auth';
import {loadingChangeAction, restoreIdentityAction, signInAction, signOutAction} from './creators';
import {StateIndependentThunk} from '../types';

export const bootstrapThunk = (): StateIndependentThunk => async (dispatch) => {
  try {
    const identity: string | null = await fetchIdentityString();

    if (identity) {
      dispatch(restoreIdentityAction(identity));
    } else {
      dispatch(loadingChangeAction(false));
    }
  } catch (e) {
    // TODO: Display user friendly error
    console.error(e);
    dispatch(loadingChangeAction(false));
  }
}

export const identifyThunk = (identity: string): StateIndependentThunk => async dispatch => {
  try {
    await persistIdentityString(identity);
    dispatch(signInAction(identity));
  } catch (e) {
    // TODO: Display user friendly error
    console.error(e);
  }
};

export const forgetIdentityThunk = (): StateIndependentThunk => async dispatch => {
  try {
    await forgetIdentityString();
    dispatch(signOutAction());
  } catch (e) {
    // TODO: Display user friendly error
    console.error(e);
  }
}