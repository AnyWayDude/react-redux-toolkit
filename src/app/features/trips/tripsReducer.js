import { createReducer } from "@reduxjs/toolkit";
import { loadTrips } from "./tripsAction";

const initialState = {
    collection: [],
};

const tripsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(
            loadTrips.fulfilled,
            (state, action) => {
                state.collection = action.payload;
            }
        );
    builder
        .addCase(
            loadTrips.rejected,
            (state) => {
                state.collection = [];
            }
        );
})

export { tripsReducer }