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

export default function BioReducer(prevState: BioState = initialState, action: AnyAction): BioState {
  const {type, payload} = action;
  const {didFetchBio, bioLoadingChange} = ActionTypes;

  switch (type) {
    case didFetchBio:
      return setBio(prevState, payload as Genome);
    case bioLoadingChange:
      return setLoading(prevState, payload as boolean);
    default:
      return prevState;
  }
};