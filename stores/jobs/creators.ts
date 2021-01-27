import {ActionTypes} from './actions';
import {Opportunity} from './types';

export const didFetchJobsAction = (opps: Opportunity[]) => {
  return {
    type: ActionTypes.didFetchJobsAction,
    payload: opps,
  };
}

export const jobsLoadingChangeAction = (newVal: boolean) => ({
  type: ActionTypes.jobsLoadingChangeAction,
  payload: newVal,
});

export const forgetJobsAction = () => ({
  type: ActionTypes.forgetJobsAction,
});