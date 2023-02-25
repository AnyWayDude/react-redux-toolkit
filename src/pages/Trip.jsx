import React, { useState } from 'react';
import trips from '../data/trips.json';
import { useParams } from 'react-router-dom';
import Modal from '../components/UI/Modal';
import { BookingContext } from '../context/booking-context';


export default function Trip() {
    const { bookings, setBookings } = React.useContext(BookingContext);
    const { id } = useParams()
    const selectedTrip = trips.find(e => e.id === id)
    const [modalActive, setModalActive] = useState(false)
    const [booking, setBooking] = useState()



    const createPost = (newPost) => {
        setBookings([...bookings, newPost])
    }


    return (
        <main class="trip-page">
            <h1 class="visually-hidden">Travel App</h1>
            <div class="trip">
                <img
                    data-test-id="trip-details-image"
                    src={selectedTrip.image}
                    class="trip__img"
                    alt="trip image"
                />
                <div class="trip__content">
                    <div class="trip-info">
                        <h3 data-test-id="trip-details-title" class="trip-info__title">
                            {selectedTrip.title}
                        </h3>
                        <div class="trip-info__content">
                            <span
                                data-test-id="trip-details-duration"
                                class="trip-info__duration"
                            >
                                <strong>{selectedTrip.duration}</strong> days
                            </span>
                            <span data-test-id="trip-details-level" class="trip-info__level">
                                {selectedTrip.level}
                            </span>
                        </div>
                    </div>
                    <div
                        data-test-id="trip-details-description"
                        class="trip__description"
                    >
                        {selectedTrip.description}
                    </div>
                    <div class="trip-price">
                        <span>Price</span>
                        <strong
                            data-test-id="trip-details-price-value"
                            class="trip-price__value"
                        >
                            {selectedTrip.price} $
                        </strong>
                    </div>
                    <button
                        data-test-id="trip-details-button"
                        class="trip__button button"
                        onClick={() => setModalActive(true)}
                    >
                        Book a trip
                    </button>
                </div>
            </div>
            <Modal createPost={createPost} active={modalActive} setActive={setModalActive} />
        </main>

    );
}
