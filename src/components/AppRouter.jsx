import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Bookings from '../pages/Bookings';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Trip from '../pages/Trip';

export default function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/bookings' element={<Bookings />} />
            <Route path='/trip/:id' element={<Trip />} />
        </Routes>
    );
}
