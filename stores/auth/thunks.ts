import {StateIndependentThunk} from './types';
import {fetchIdentityString, forgetIdentityString, persistIdentityString} from '../../repositories/auth';
import {restoreIdentityAction, signInAction, signOut} from './creators';

export const bootstrapThunk = (): StateIndependentThunk => async (dispatch) => {
  try {
    const identity: string | null = await fetchIdentityString();

    if (identity) {
      dispatch(restoreIdentityAction(identity));
    }
  } catch (e) {
    // TODO: Display user friendly error
    console.error(e);
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
    dispatch(signOut());
  } catch (e) {
    // TODO: Display user friendly error
    console.error(e);
  }
}