import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { deleteBooking } from '../app/features/bookings/bookActions';

export default function BookItem({ book, remove }) {

    const dispatch = useDispatch();

    const handleLogin = useCallback(
        () => dispatch(deleteBooking(
            book.id
        )),
        [dispatch, book.id]
    );
    return (
        <li data-test-id="booking" class="booking">
            <h3 data-test-id="booking-title" class="booking__title">{book.trip.title}</h3>
            <span data-test-id="booking-guests" class="booking__guests">
                {book.guests} guests
            </span>
            <span data-test-id="booking-date" class="booking__date">
                {book.date.substring(0, 10)}
            </span>
            <span data-test-id="booking-total" class="booking__total">
                {book.totalPrice} $
            </span>
            <button
                data-test-id="booking-cancel"
                class="booking__cancel"
                title="Cancel booking"
                onClick={handleLogin}

            >
                <span class="visually-hidden">Cancel booking</span>
                ×
            </button>
        </li>
    );
}
