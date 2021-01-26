import {AnyAction} from 'redux';
import {MetaState} from './types';
import {ActionTypes} from './actions';

export const initialState: MetaState = {
  screenStand: 'genome',
};

export default function MetaReducer(prevState: MetaState = initialState, action: AnyAction): MetaState {
  const {type, payload} = action;
  const {setTabStand} = ActionTypes;

  switch (type) {
    case setTabStand:
      return {
        ...prevState,
        screenStand: payload,
      };
    default:
      return prevState;
  }
};