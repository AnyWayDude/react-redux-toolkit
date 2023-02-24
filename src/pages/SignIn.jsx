import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
    const navigate = useNavigate();
    return (
        <main className='sign-in-page'>
            <h1 className='visually-hidden'>Travel App</h1>
            <form
                className='sign-in-form'
                autocomplete="off"
                onSubmit={() => navigate("/")}
            >
                <h2 className='sign-in-form__title'>Sign In</h2>
                <label className='input'>
                    <span className='input__heading'>Email</span>
                    <input data-test-id="auth-email" name="email" type="email" required />
                </label>
                <label class="input">
                    <span className='input__heading'>Password</span>
                    <input
                        minLength="3"
                        data-test-id="auth-password"
                        name="password"
                        type="password"
                        autocomplete="new-password"
                        required
                    />
                </label>
                <button data-test-id="auth-submit" className='button' type="submit">
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
