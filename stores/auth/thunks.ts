import {StateIndependentThunk} from './types';
import {fetchIdentityString, persistIdentityString} from '../../repositories/auth';
import {restoreIdentityAction, signInAction} from './creators';

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