import {ThunkDispatch} from 'redux-thunk';
import {Action, AnyAction} from 'redux';
import {AuthState} from './auth/types';
import {BioState} from './bio/types';
import {MetaState} from './meta/types';
import {JobsState} from './jobs/types';

export interface RootState {
    auth: AuthState;
    bio: BioState;
    meta: MetaState;
    jobs: JobsState;
}

export type AutoThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export type StateIndependentThunk = (dispatch: AutoThunkDispatch) => any;
export type StateDepependentThunk = (
    dispatch: AutoThunkDispatch,
    getState: () => RootState,
) => any;

export interface GAction<T> extends Action {
    type: string;
    payload?: T;
}