import {ActionTypes} from './actions';
import {GAction} from '../types';
import {Genome} from './types';
import {AnyAction} from 'redux';

export function didFetchBioAction(genome: Genome): GAction<Genome> {
  return {
    type: ActionTypes.didFetchBioAction,
    payload: genome,
  };
}

export function bioLoadingChangeAction(newVal: boolean): GAction<boolean> {
  return {
    type: ActionTypes.bioLoadingChangeAction,
    payload: newVal,
  };
}

export const forgetBioAction = () => ({
  type: ActionTypes.forgetBioAction,
});