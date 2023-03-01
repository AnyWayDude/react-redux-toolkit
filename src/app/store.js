import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './features/auth/authReducer'
import { tripsReducer } from './features/trips/tripsReducer'



export const store = configureStore({
    reducer: {
        auth: authReducer,
        trips: tripsReducer
    },
})

export default store