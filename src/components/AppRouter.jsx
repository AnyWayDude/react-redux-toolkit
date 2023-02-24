import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Bookings from '../pages/Bookings';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Trip from '../pages/Trip';

export default function AppRouter() {

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/bookings' element={<Bookings />} />
            <Route path='/trip/:id' element={<Trip />} />
            <Route path='*' element={<Navigate to="/" />} />
        </Routes>
    );
}
