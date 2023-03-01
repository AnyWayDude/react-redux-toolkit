import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import { createBooking, deleteBooking, loadBooking } from "./bookActions";


const initialState = {
    collection: [],
};

const bookingReducer = createReducer(initialState, (builder) => {
    builder
        .addMatcher(isAnyOf(
            loadBooking.fulfilled,
            createBooking.fulfilled,
            deleteBooking.fulfilled
        ), (state, action) => {
            console.log(action.payload)
            state.collection = action.payload;
        })
        .addMatcher(isAnyOf(
            loadBooking.rejected,
            createBooking.rejected,
            deleteBooking.rejected
        ), (state) => {
            state.collection = [];
        });
});

export { bookingReducer };