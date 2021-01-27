import {AnyAction} from 'redux';
import {JobsState, Opportunity} from './types';
import {ActionTypes} from './actions';

export const initialState: JobsState = {
  lastFetched: null,
  opportunities: [],
  isLoading: false,
};

function setOpportunities(prevState: JobsState, payload: Opportunity[]): JobsState {
  return {
    ...prevState,
    opportunities: payload,
    isLoading: false,
  };
}

function setLoading(prevState: JobsState, payload: boolean): JobsState {
  return {
    ...prevState,
    isLoading: payload,
  };
}

function forgetJobs(prevState: JobsState): JobsState {
  return {
    ...prevState,
    opportunities: [],
  };
}

export default function JobsReducer(prevState: JobsState = initialState, action: AnyAction): JobsState {
  const {type, payload} = action;
  const {didFetchJobsAction: didFetchOpportunitiesAction, jobsLoadingChangeAction, forgetJobsAction} = ActionTypes;

  switch (type) {
    case didFetchOpportunitiesAction:
      return setOpportunities(prevState, payload as Opportunity[]);
    case jobsLoadingChangeAction:
      return setLoading(prevState, payload as boolean);
    case forgetJobsAction:
      return forgetJobs(prevState);
    default:
      return prevState;
  }
};