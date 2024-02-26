import {JwtToken} from "@/shared/api/interfaces.ts";

export interface AuthState {
    token: JwtToken | null;
    isAuthenticated: boolean;
    username: string | null;
    privileges: string[];
    loading: boolean;
    error: string | null;
}

export const initialAuthState: AuthState = {
    token: null,
    isAuthenticated: false,
    username: null,
    privileges: [],
    loading: false,
    error: null,
};