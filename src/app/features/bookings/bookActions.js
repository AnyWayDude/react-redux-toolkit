import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api";

const loadBooking = createAsyncThunk(
    "booking",
    async (_request, { rejectWithValue }) => {
        const token = localStorage.getItem("token");

        const response = await fetch(
            BASE_URL + 'bookings',
            {
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    Authorization: `Bearer ${token}`,
                },
            },
        ).then((response) => response.json());

        if (response.error) {
            return rejectWithValue(response);
        }
        console.log(response)
        return response;
    },
);

const createBooking = createAsyncThunk(
    "booking/create",
    async (request, { rejectWithValue }) => {
        const token = localStorage.getItem("token");

        const response = await fetch(
            BASE_URL + 'bookings',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(request),
            },
        ).then((response) => response.json());

        if (response.error) {
            return rejectWithValue(response);
        }

        return response;
    },
);

const deleteBooking = createAsyncThunk(
    "booking/delete",
    async (id, { getState, rejectWithValue }) => {
        const token = localStorage.getItem("token");

        const response = await fetch(
            BASE_URL + `bookings/${id}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        ).catch(e => {
            return e
        })

        if (response.error) {
            return rejectWithValue(response);
        }

        const {
            bookings: { collection }
        } = getState();

        return collection.filter(item => item.id !== id)
    },
);





export { loadBooking, createBooking, deleteBooking };