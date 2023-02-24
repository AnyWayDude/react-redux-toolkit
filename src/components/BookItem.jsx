import React from 'react';

export default function BookItem({ book }) {
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
            >
                <span class="visually-hidden">Cancel booking</span>
                ×
            </button>
        </li>
    );
}
