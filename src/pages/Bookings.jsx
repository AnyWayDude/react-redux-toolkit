import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBooking } from '../app/features/bookings/bookActions';
import BookItem from '../components/BookItem';
import Loader from '../components/UI/Loader';

export default function Bookings() {
    const dispatch = useDispatch();

    const { bookings } = useSelector((state) => ({
        bookings: state.bookings.collection
    }));
    const hasBookings = Boolean(bookings.length);


    useEffect(() => {
        dispatch(loadBooking());
    }, [dispatch]);

    if (!hasBookings) {
        return (
            <Loader />
        );
    }

    return (
        <main class="bookings-page">
            <h1 class="visually-hidden">Travel App</h1>
            <ul class="bookings__list">
                {bookings.map(booking =>
                    <BookItem key={booking.id} book={booking} />
                )}
            </ul>
        </main>
    );
}
