import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import tripsData from '../../data/trips.json'


export default function Modal({ active, setActive, createPost }) {
    const { id } = useParams();
    const selectedTrip = tripsData.find((trip) => trip.id === id);
    const [date, setdate] = useState('');
    const [count, setCount] = useState(1);
    const total = useMemo(() => selectedTrip.price * count, [selectedTrip, count]);
    const minDate = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split("T")[0];

    return (
        <div
            className={active ? 'modal active' : 'modal'}
        >
            <div
                data-test-id="book-trip-popup"
                className="book-trip-popup"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    data-test-id="book-trip-popup-close"
                    className="book-trip-popup__close"
                    onClick={() => setActive(false)}
                >
                    ×
                </button>
                <form className="book-trip-popup__form" autocomplete="off">
                    <div className="trip-info">
                        <h3 data-test-id="book-trip-popup-title" className="trip-info__title">
                            {selectedTrip.title}
                        </h3>
                        <div className="trip-info__content">
                            <span
                                data-test-id="book-trip-popup-duration"
                                className="trip-info__duration"
                            >
                                <strong>{selectedTrip.duration}</strong> days
                            </span>
                            <span
                                data-test-id="book-trip-popup-level"
                                className="trip-info__level"
                            >
                                {selectedTrip.level}
                            </span>
                        </div>
                    </div>
                    <label className="input">
                        <span className="input__heading">Date</span>
                        <input
                            data-test-id="book-trip-popup-date"
                            value={date}
                            onChange={(e) => setdate(e.target.value)}
                            name="date"
                            type="date"
                            min={minDate}
                            required
                        />
                    </label>
                    <label className="input">
                        <span className="input__heading">Number of guests</span>
                        <input
                            data-test-id="book-trip-popup-guests"
                            name="guests"
                            type="number"
                            min="1"
                            max="10"
                            value={count}
                            required
                            onChange={(e) => setCount(e.target.value)}
                        />
                    </label>
                    <span className="book-trip-popup__total">
                        Total:{''}
                        <output
                            data-test-id="book-trip-popup-total-value"
                            className="book-trip-popup__total-value"
                        >
                            {total}$
                        </output>
                    </span>
                    <button
                        onClick={(e) => {
                            e.preventDefault()
                            setActive(false)
                            createPost({
                                "id": "73b7df68-62f6-4a5f-9c87-f971637ac7a0",
                                "userId": "1dd97a12-848f-4a1d-8a7d-34a2132fca94",
                                "tripId": selectedTrip,
                                "guests": count,
                                "date": date,
                                "trip": {
                                    "title": selectedTrip.title,
                                    "duration": 19,
                                    "price": 5395
                                },
                                "totalPrice": total,
                                "createdAt": "2022-05-22T17:42:49.537Z"
                            })
                        }}
                        data-test-id="book-trip-popup-submit"
                        className="button"
                        type="submit"
                    >
                        Book a trip
                    </button>
                </form>
            </div>
        </div>
    );
}
