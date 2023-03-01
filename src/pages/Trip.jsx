import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../components/UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { loadTrips } from '../app/features/trips/tripsAction';
import Loader from '../components/UI/Loader';


export default function Trip() {
    const { id } = useParams()
    const [modalActive, setModalActive] = useState(false)
    const dispatch = useDispatch();
    const { trips } = useSelector((state) => ({
        trips: state.trips.collection,
    }));
    const { user } = useSelector((state) => ({
        user: state.auth.user,
    }));
    const hasTrips = Boolean(trips.length);

    useEffect(() => {
        if (!hasTrips) {
            dispatch(loadTrips());
        }
    }, [dispatch, hasTrips]);

    const currentTrip = trips.find((trip) => trip.id === id);
    const hasTrip = Boolean(currentTrip);

    if (!hasTrip || !hasTrips) {
        return <Loader />;
    }


    return (
        <main class="trip-page">
            <h1 class="visually-hidden">Travel App</h1>
            <div class="trip">
                <img
                    data-test-id="trip-details-image"
                    src={currentTrip.image}
                    class="trip__img"
                    alt="trip image"
                />
                <div class="trip__content">
                    <div class="trip-info">
                        <h3 data-test-id="trip-details-title" class="trip-info__title">
                            {currentTrip.title}
                        </h3>
                        <div class="trip-info__content">
                            <span
                                data-test-id="trip-details-duration"
                                class="trip-info__duration"
                            >
                                <strong>{currentTrip.duration}</strong> days
                            </span>
                            <span data-test-id="trip-details-level" class="trip-info__level">
                                {currentTrip.level}
                            </span>
                        </div>
                    </div>
                    <div
                        data-test-id="trip-details-description"
                        class="trip__description"
                    >
                        {currentTrip.description}
                    </div>
                    <div class="trip-price">
                        <span>Price</span>
                        <strong
                            data-test-id="trip-details-price-value"
                            class="trip-price__value"
                        >
                            {currentTrip.price} $
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
            <Modal userId={user.id} trip={currentTrip} active={modalActive} setActive={setModalActive} />
        </main>

    );
}
