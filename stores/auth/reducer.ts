import {ActionTypes} from './actions';
import {AuthState} from './types';
import {AnyAction} from 'redux';

export const initialState: AuthState = {
    isLoading: true,
    userIdentity: null,
};

export default function AuthReducer(prevState: AuthState = initialState, action: AnyAction): AuthState {
    const {type, payload} = action;
    const {restoreIdentity, signIn, signOut, loadingChange} = ActionTypes;

    switch (type) {
        case restoreIdentity:
            return {
                ...prevState,
                userIdentity: payload,
                isLoading: false,
            };
        case signIn:
            return {
                ...prevState,
                userIdentity: payload,
                isLoading: false,
            };
        case signOut:
            return {
                ...prevState,
                userIdentity: null,
            };
        case loadingChange:
            return {
                ...prevState,
                isLoading: payload as boolean,
            }
        default:
            return prevState;
    }
};