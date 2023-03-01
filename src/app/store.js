import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './features/auth/authReducer'
import { bookingReducer } from './features/bookings/bookReducer'
import { tripsReducer } from './features/trips/tripsReducer'



export const store = configureStore({
    reducer: {
        auth: authReducer,
        trips: tripsReducer,
        bookings: bookingReducer,
        errors: []
    },
})

export default store