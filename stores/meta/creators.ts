import {ActionTypes} from './actions';
import {ScreenStand} from './types';
import {GAction} from '../types';

export function setTabStandAction(tabStand: ScreenStand): GAction<ScreenStand> {
  return {
    type: ActionTypes.setTabStand,
    payload: tabStand,
  };
}