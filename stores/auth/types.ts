export interface RootState {
    auth: AuthState;
}

export interface AuthState {
    isLoading: boolean;
    userIdentity: string | null;
}