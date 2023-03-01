import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api";
import { actionsType } from "./types";


const login = createAsyncThunk(
    actionsType.LOG_IN,
    async (request, { rejectWithValue }) => {
        const response = await fetch(
            BASE_URL + 'auth/sign-in',
            {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(request)
            },
        ).then((response) => response.json());
        if (response.error) {
            if (response.statusCode === 401) {
                alert('Wrong password or email')
            }
            return rejectWithValue(response);
        }
        localStorage.setItem("token", response.token);
        return response.user;
    });

const registry = createAsyncThunk(
    actionsType.REGISTRY,
    async (request, { rejectWithValue }) => {
        try {
            const response = await fetch(
                BASE_URL + 'auth/sign-up',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=utf-8",
                    },
                    body: JSON.stringify(request),
                },
            ).then((response) => response.json());
            if (response.statusCode === 400) {
                alert('Fill in the fields correctly')
            }


            localStorage.setItem("token", response.token);
            return response.user;

        } catch (error) {
            return rejectWithValue(error);
        }
    },
);

const logout = createAsyncThunk(actionsType.LOG_OUT, (_request) => {
    localStorage.removeItem("token");
    return null;
});

const loadCurrentUser = createAsyncThunk(
    actionsType.LOG_IN,
    async (_request, { dispatch, rejectWithValue }) => {
        const token = localStorage.getItem("token");
        const response = await fetch(
            BASE_URL + 'auth/authenticated-user',
            {
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    Authorization: `Bearer ${token}`,
                },
            },
        ).then((response) => response.json());

        if (response.error && response.statusCode === 401) {
            dispatch(logout());
        }

        if (response.error) {
            return rejectWithValue(response);
        }

        return response;
    },
);

export { login, registry, logout, loadCurrentUser }