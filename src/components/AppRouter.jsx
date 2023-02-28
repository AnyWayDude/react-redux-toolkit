import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { loadCurrentUser, logout } from '../app/features/auth/actions';
import { PublicRoute, PrivateRoute } from '../pages/authRoures';
import Bookings from '../pages/Bookings';
import Header from '../pages/fixed/Header';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Trip from '../pages/Trip';
import Loader from './UI/Loader';

export default function AppRouter() {
    const { user } = useSelector((state) => ({
        user: state.auth.user,
    }));


    const dispatch = useDispatch();

    const hasToken = Boolean(localStorage.getItem("token"));
    const hasUser = Boolean(user);

    const handleUserLogout = useCallback(() => (
        dispatch(logout())
    ), [dispatch]);

    useEffect(() => {
        if (hasToken) {
            dispatch(loadCurrentUser());
        }
    }, [dispatch, hasToken]);

    if (!hasUser && hasToken) {
        return (
            <Loader />
        );
    }

    return (
        <>
            <Header user={user} onUserLogout={handleUserLogout} />
            <Routes>
                <Route path='/' element={< PrivateRoute component={Home} />} />
                <Route path='/sign-in' element={<PublicRoute component={SignIn} />} />
                <Route path='/sign-up' element={<PublicRoute component={SignUp} />} />
                <Route path='/bookings' element={<PrivateRoute component={Bookings} />} />
                <Route path='/trip/:id' element={<PrivateRoute component={Trip} />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </>

    );
}
