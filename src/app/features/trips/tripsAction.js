import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../api";

const loadTrips = createAsyncThunk(
    'trips',
    async (_request, { rejectWithValue }) => {
        const token = localStorage.getItem("token");
        const response = await fetch(
            BASE_URL + 'trips',
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

        return response;
    },
);

export { loadTrips }
