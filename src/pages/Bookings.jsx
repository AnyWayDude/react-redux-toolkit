import React from 'react';
import BookItem from '../components/BookItem';
import { BookingContext } from '../context/booking-context'

export default function Bookings() {
    const { bookings, setBookings } = React.useContext(BookingContext);

    const removeBook = (book) => {
        setBookings(bookings.filter(b => b.id !== book.id))
    }



    return (
        <main class="bookings-page">
            <h1 class="visually-hidden">Travel App</h1>
            <ul class="bookings__list">
                {bookings.map(booking =>
                    <BookItem remove={removeBook} key={booking.id} book={booking} />
                )}
            </ul>
        </main>
    );
}
