import React from 'react'
import jsonbBookings from '../data/bookings.json'

export const BookingContext = React.createContext()

export const BookingContextProvider = ({ children }) => {
    const [bookings, setBookings] = React.useState([]);



    React.useEffect(() => {
        setBookings(jsonbBookings)
    }, [jsonbBookings]);


    const value = { bookings, setBookings };
    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    );
}