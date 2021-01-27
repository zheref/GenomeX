import {didFetchJobsAction, jobsLoadingChangeAction} from './creators';
import {StateDepependentThunk} from '../types';
import {Opportunity} from './types';
import {fetchBestChances} from '../../repositories/jobs';

export const fetchJobsThunk = (): StateDepependentThunk => async (dispatch, getState) => {
  const handle = getState().auth.userIdentity;

  if (!handle) {
    return;
  }

  dispatch(jobsLoadingChangeAction(true));
  try {
    const jobs: Opportunity[] | null = await fetchBestChances(handle);
    if (jobs) {
      dispatch(didFetchJobsAction(jobs));
    }
  } catch (e) {
    // TODO: Display user friendly error
    dispatch(jobsLoadingChangeAction(false));
    console.error(e);
  }
};