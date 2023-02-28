import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import { login, registry } from "./actions";


const initState = {
    user: null,
};

const authReducer = createReducer(initState, (builder) => {
    builder
        .addMatcher(isAnyOf(
            login.fulfilled,
            registry.fulfilled

        ), (state, action) => {
            state.user = action.payload;
        })
        .addMatcher(isAnyOf(
            login.rejected,
            registry.rejected
        ), (state) => {
            state.user = null;
        });
});

export { authReducer }