import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../app/features/auth/actions';

export default function SignIn() {
    // const navigate = useNavigate();
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch();

    const handleLogin = useCallback(
        () => dispatch(login({
            "email": email,
            "password": password
        })),
        [dispatch, email, password]
    );

    return (
        <main className='sign-in-page'>
            <h1 className='visually-hidden'>Travel App</h1>
            <form
                className='sign-in-form'
                autoComplete="off"
            >
                <h2 className='sign-in-form__title'>Sign In</h2>
                <label className='input'>
                    <span className='input__heading'>Email</span>
                    <input
                        data-test-id="auth-email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label className="input">
                    <span className='input__heading'>Password</span>
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
                <button data-test-id="auth-submit" className='button' type="button" onClick={handleLogin}>
                    Sign In
                </button>
            </form>
            <span>
                Don't have an account?
                <Link
                    data-test-id="auth-sign-up-link"
                    to="/sign-up"
                    className='sign-in-form__link'
                >
                    Sign Up
                </Link>
            </span>
        </main>

    );
}
