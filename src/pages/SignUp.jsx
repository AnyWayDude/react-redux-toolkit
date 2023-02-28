import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registry } from '../app/features/auth/actions';

export default function SignUp() {
    const dispatch = useDispatch();
    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const handleLogin = useCallback(
        (e) => {
            dispatch(registry({
                "fullName": fullName,
                "email": email,
                "password": password
            }))
        },
        [dispatch, fullName, email, password]
    );

    return (

        <main className="sign-up-page">
            <h1 className="visually-hidden">Travel App</h1>
            <form
                className="sign-up-form"
                autoComplete="off"
            >
                <h2 className="sign-up-form__title">Sign Up</h2>
                <label className="input">
                    <span className="input__heading">Full name</span>
                    <input
                        data-test-id="auth-full-name"
                        name="full-name"
                        type="text"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        required
                    />
                </label>
                <label className="input">
                    <span className="input__heading">Email</span>
                    <input
                        data-test-id="auth-email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required />
                </label>
                <label className="input">
                    <span className="input__heading">Password</span>
                    <input
                        minLength="3"
                        data-test-id="auth-password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button onClick={handleLogin} data-test-id="auth-submit" className="button" type="button">
                    Sign Up
                </button>
            </form>
            <span>
                Already have an account?
                <Link
                    data-test-id="auth-sign-in-link"
                    to='/sign-in'
                    className="sign-up-form__link"
                >
                    Sign In
                </Link>
            </span>
        </main>

    );
}
