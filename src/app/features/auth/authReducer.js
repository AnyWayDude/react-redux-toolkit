import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import { login, logout, registry } from "./actions";


const initState = {
    user: null,
};

const authReducer = createReducer(initState, (builder) => {
    builder
        .addMatcher(
            isAnyOf(
                login.fulfilled,
                registry.fulfilled,
                logout.fulfilled

            ),
            (state, action) => {
                state.user = action.payload;
            }
        )
        .addMatcher(
            isAnyOf(
                login.rejected,
                registry.rejected,
                logout.fulfilled
            ),
            (state) => {
                state.user = null;
            }
        );
});

export { authReducer }