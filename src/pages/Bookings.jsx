import React, { useState } from 'react';
import bookings from '../data/bookings.json'
import BookItem from '../components/BookItem';

export default function Bookings() {
    const [booked, setbooked] = useState(bookings);
    return (
        <main class="bookings-page">
            <h1 class="visually-hidden">Travel App</h1>
            <ul class="bookings__list">
                {booked.map(book =>
                    <BookItem key={book.id} book={book} />
                )}
            </ul>
        </main>
    );
}
