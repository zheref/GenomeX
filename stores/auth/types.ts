import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

export type AutoThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export type StateIndependentThunk = (dispatch: AutoThunkDispatch) => any;
export type StateDepependentThunk = (
    dispatch: AutoThunkDispatch,
    getState: () => RootState,
) => any;

export interface RootState {
    auth: AuthState;
}

export interface AuthState {
    isLoading: boolean;
    userIdentity: string | null;
}