import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createBooking } from '../../app/features/bookings/bookActions';
import tripsData from '../../data/trips.json'


export default function Modal({ active, setActive, trip, userId }) {
    const dispatch = useDispatch();
    const { id } = useParams();
    // const selectedTrip = tripsData.find((trip) => trip.id === id);
    const [date, setdate] = useState('');
    const [count, setCount] = useState(1);
    const total = useMemo(() => trip.price * count, [trip, count]);
    const minDate = new Date(new Date()
        .setDate(new Date()
            .getDate() + 1))
        .toISOString()
        .split("T")[0];

    const handleLogin = useCallback(
        () => {
            dispatch(createBooking({
                "tripId": trip.id,
                "userId": userId,
                "date": date,
                "guests": count
            }));
            setActive(false)
        },
        [dispatch, trip.id, userId, date, count, setActive]
    );

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
                <form className="book-trip-popup__form" autoComplete="off">
                    <div className="trip-info">
                        <h3 data-test-id="book-trip-popup-title" className="trip-info__title">
                            {trip.title}
                        </h3>
                        <div className="trip-info__content">
                            <span
                                data-test-id="book-trip-popup-duration"
                                className="trip-info__duration"
                            >
                                <strong>{trip.duration}</strong> days
                            </span>
                            <span
                                data-test-id="book-trip-popup-level"
                                className="trip-info__level"
                            >
                                {trip.level}
                            </span>
                        </div>
                    </div>
                    <label className="input">
                        <span className="input__heading">Date</span>
                        <input
                            required
                            data-test-id="book-trip-popup-date"
                            defaultValue={minDate}
                            value={date}
                            onChange={(e) => setdate(e.target.value)}
                            name="date"
                            type="date"
                            min={minDate}

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
                        onClick={handleLogin}
                        data-test-id="book-trip-popup-submit"
                        className="button"
                        type="button"

                    >
                        Book a trip
                    </button>
                </form>
            </div>
        </div>
    );
}
