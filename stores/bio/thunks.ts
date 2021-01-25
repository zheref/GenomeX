import {didFetchBioAction, bioLoadingChangeAction} from './creators';
import {fetchBio} from '../../repositories/bio';
import {StateDepependentThunk} from '../types';
import {Genome} from './types';

export const fetchBioThunk = (): StateDepependentThunk => async (dispatch, getState) => {
  const handle = getState().auth.userIdentity;

  if (!handle) {
    return;
  }

  dispatch(bioLoadingChangeAction(true));
  try {
    const genome: Genome | null = await fetchBio(handle);
    if (genome) {
      dispatch(didFetchBioAction(genome));
    }
  } catch (e) {
    // TODO: Display user friendly error
    dispatch(bioLoadingChangeAction(false));
    console.error(e);
  }
};