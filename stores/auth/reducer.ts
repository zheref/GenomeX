import {Action} from '../types';
import {ActionTypes} from './actions';
import {AuthState} from './types';

export const initialState: AuthState = {
    isLoading: true,
    userIdentity: null,
};

export default function AuthReducer(prevState: AuthState, action: Action): AuthState {
    const {type, payload} = action;
    const {restoreIdentity, signIn, signOut} = ActionTypes;

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
        default:
            return prevState;
    }
};