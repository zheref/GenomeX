import {ActionTypes} from './actions';
import {GAction} from '../types';
import {Genome} from './types';

export function didFetchBioAction(genome: Genome): GAction<Genome> {
  return {
    type: ActionTypes.didFetchBio,
    payload: genome,
  };
}

export function bioLoadingChangeAction(newVal: boolean): GAction<boolean> {
  return {
    type: ActionTypes.bioLoadingChange,
    payload: newVal,
  }
}