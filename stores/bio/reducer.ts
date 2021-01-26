import {AnyAction} from 'redux';
import {BioState, Genome} from './types';
import {ActionTypes} from './actions';

export const initialState: BioState = {
  lastFetched: null,
  genome: null,
  isLoading: false,
};

function setBio(prevState: BioState, payload: Genome): BioState {
  return {
    ...prevState,
    genome: payload,
    isLoading: false,
  };
}

function setLoading(prevState: BioState, payload: boolean): BioState {
  return {
    ...prevState,
    isLoading: payload,
  };
}

function forgetBio(prevState: BioState): BioState {
  return {
    ...prevState,
    genome: null,
  };
}

export default function BioReducer(prevState: BioState = initialState, action: AnyAction): BioState {
  const {type, payload} = action;
  const {didFetchBioAction, bioLoadingChangeAction, forgetBioAction} = ActionTypes;

  switch (type) {
    case didFetchBioAction:
      return setBio(prevState, payload as Genome);
    case bioLoadingChangeAction:
      return setLoading(prevState, payload as boolean);
    case forgetBioAction:
      return forgetBio(prevState);
    default:
      return prevState;
  }
};