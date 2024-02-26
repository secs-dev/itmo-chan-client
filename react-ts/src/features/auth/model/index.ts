import {createEffect, createStore} from 'effector';
import { persist } from 'effector-storage/session'
import {AuthenticationResponseEntity, UserAuth, UserRegister} from "@/shared/api";
import axios from "axios";
import {AuthState, initialAuthState} from "../lib";

export const $authStore = createStore<AuthState>(initialAuthState);

persist({store: $authStore, key: "authStore"})

export const registerFx = createEffect<UserRegister, AuthState, Error>({
    handler: async (userRegister) => {
        try {
            const response =
                await axios.post<AuthenticationResponseEntity>('http://localhost:8080/api/auth/register',
                    JSON.stringify(userRegister),
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });
            return fillAuthState(response.data);
        } catch (error) {
            console.log(error)
            throw new Error('Registration failed');
        }
    },
});

export const loginFx = createEffect<UserAuth, AuthState, Error>({
    handler: async (userData) => {
        try {
            const response = await axios.post<AuthenticationResponseEntity>('http://localhost:8080/api/auth/login',
                JSON.stringify(userData),
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            return fillAuthState(response.data)

        } catch (error) {
            console.log("llooool")
            throw new Error('Authentication failed');
        }
    },
});

export const logoutFx = createEffect<void, AuthState, Error>({
    handler: async () => {
            console.log("deauth success")
            return initialAuthState
    },
});

const fillAuthState = (response: AuthenticationResponseEntity): AuthState => {
    const username: string = JSON.parse(atob(response.accessToken.split(".")[1])).sub;
    const privileges: string[] = JSON.parse(atob(response.accessToken.split(".")[1])).authorities
    return {
        token: response.accessToken,
        loading: false,
        username: username,
        isAuthenticated: true,
        privileges: privileges,
        error: null
    };
}

export const $isAuthenticated = $authStore.map(state => state.isAuthenticated)

$authStore.on(loginFx.doneData, (_, result) => result);
$authStore.on(loginFx.failData, (_, error) => ({ ...initialAuthState, loading: false, error: error.message }));
$authStore.on(registerFx.doneData, (_, result) => result);
$authStore.on(registerFx.failData, (_, error) => ({ ...initialAuthState, loading: false, error: error.message }));

$authStore.on(logoutFx.doneData, (_, result) => result);