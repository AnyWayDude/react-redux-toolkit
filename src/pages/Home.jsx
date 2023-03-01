import React, { useState, useMemo, useEffect } from 'react';
import TripItem from '../components/TripItem';
import SelectSort from '../components/UI/SelectSort';
import { useDispatch, useSelector } from 'react-redux';
import { loadTrips } from '../app/features/trips/tripsAction';
import Loader from '../components/UI/Loader';


export default function Home() {
    const dispatch = useDispatch();

    const { trips } = useSelector((state) => ({
        trips: state.trips.collection
    }));
    const hasTrips = Boolean(trips.length);

    useEffect(() => {
        dispatch(loadTrips());
    }, [dispatch]);

    const [sortLvl, setsortLvl] = useState();
    const [sortDuration, setsortDuration] = useState();
    const [search, setsearch] = useState('');

    const sortTrips = useMemo(() => {
        let sortedTrips = [...trips];

        if (sortLvl) {
            return sortedTrips.filter((trip) => trip.level === sortLvl)
        }

        if (sortDuration) {
            const [from, to] = sortDuration.split("_x_");
            if (!to) {
                return sortedTrips.filter((trip) => trip.duration >= +from);
            } else {
                return sortedTrips.filter(
                    (trip) => trip.duration >= +from && trip.duration < +to,
                );
            }

        }
        return sortedTrips.filter(({ title }) =>
            title.toLowerCase().includes(search.toLowerCase()),
        );
    }, [trips, search, sortLvl, sortDuration]);

    if (!hasTrips) {
        return (
            <Loader />
        );
    }

    return (
        <main>
            <h1 className="visually-hidden">Travel App</h1>
            <section className="trips-filter">
                <h2 className="visually-hidden">Trips filter</h2>
                <form className="trips-filter__form" autoComplete="off">
                    <label className="trips-filter__search input">
                        <span className="visually-hidden">Search by name</span>
                        <input
                            value={search}
                            onChange={(element) => setsearch(element.target.value)}
                            data-test-id="filter-search"
                            name="search"
                            type="search"
                            placeholder="search by title"
                        />
                    </label>
                    <label className="select">
                        <span className="visually-hidden">Search by duration</span>
                        <SelectSort
                            value={sortDuration}
                            onChange={(element) => setsortDuration(element.target.value)}
                            defaultValue='duration'
                            options={[
                                { value: '0_x_5', name: '0 - 5 days' },
                                { value: '5_x_10', name: '5 - 10 days' },
                                { value: '10_x_', name: '10+ days' }
                            ]}
                        />
                    </label>
                    <label className="select">
                        <span className="visually-hidden">Search by level</span>
                        <select
                            name="level"
                            value={sortLvl}
                            onChange={(e) => setsortLvl(e.target.value)}
                        >
                            <option value="">level</option>
                            <option value="easy">easy</option>
                            <option value="moderate">moderate</option>
                            <option value="difficult">difficult</option>
                        </select>
                    </label>
                </form>
            </section>
            <section className="trips">
                <h2 className="visually-hidden">Trips List</h2>
                <ul className="trip-list">
                    {sortTrips.map(trip =>
                        <TripItem key={trip.id} trip={trip} />
                    )}

                </ul>
            </section>
        </main>
    );
}
