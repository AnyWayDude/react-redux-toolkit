import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();

    return (

        <main class="sign-up-page">
            <h1 class="visually-hidden">Travel App</h1>
            <form
                class="sign-up-form"
                autocomplete="off"
                onSubmit={() => navigate("/")}
            >
                <h2 class="sign-up-form__title">Sign Up</h2>
                <label class="input">
                    <span class="input__heading">Full name</span>
                    <input
                        data-test-id="auth-full-name"
                        name="full-name"
                        type="text"
                        required
                    />
                </label>
                <label class="input">
                    <span class="input__heading">Email</span>
                    <input data-test-id="auth-email" name="email" type="email" required />
                </label>
                <label class="input">
                    <span class="input__heading">Password</span>
                    <input
                        minLength="3"
                        data-test-id="auth-password"
                        name="password"
                        type="password"
                        autocomplete="new-password"
                        required
                    />
                </label>
                <button data-test-id="auth-submit" class="button" type="submit">
                    Sign Up
                </button>
            </form>
            <span>
                Already have an account?
                <Link
                    data-test-id="auth-sign-in-link"
                    to='/sign-in'
                    class="sign-up-form__link"
                >
                    Sign In
                </Link>
            </span>
        </main>

    );
}
