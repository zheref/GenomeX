import {didFetchBioAction, bioLoadingChangeAction} from './creators';
import {fetchBio} from '../../repositories/bio';
import {StateDepependentThunk} from '../types';
import {Genome} from './types';
import {signOutAction} from '../auth/creators';
import {setTabStandAction} from '../meta/creators';

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
    } else {
      dispatch(setTabStandAction('auth'));
      dispatch(signOutAction());
      // TODO: Show to the user genome does not exist for that identity
    }
  } catch (e) {
    // TODO: Display user friendly error
    dispatch(bioLoadingChangeAction(false));
    console.error(e);
  }
};