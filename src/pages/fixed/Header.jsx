import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as BookingIcon } from '../../images/search.svg';
import { ReactComponent as ProfileIcon } from '../../images/user.svg';

export default function Header({ user, onUserLogout }) {

    return (
        <header className="header">
            <div className="header__inner">
                <Link data-test-id="header-logo" to="/" className="header__logo">
                    Travel App
                </Link>
                {user ? (
                    <nav data-test-id="header-nav" className="header__nav">
                        <ul className="nav-header__list">
                            <li className="nav-header__item" title="Bookings">
                                <Link
                                    data-test-id="header-bookings-link"
                                    to="/bookings"
                                    className="nav-header__inner"
                                >
                                    <span className="visually-hidden">Bookings</span>
                                    <BookingIcon alt='icon' />
                                </Link>
                            </li>
                            <li className="nav-header__item" title="Profile">
                                <div
                                    data-test-id="header-profile-nav"
                                    className="nav-header__inner profile-nav"
                                    tabindex="0"
                                >
                                    <span className="visually-hidden">Profile</span>
                                    <ProfileIcon alt='prof icon' />
                                    <ul
                                        data-test-id="header-profile-nav-list"
                                        className="profile-nav__list"
                                    >
                                        <li
                                            data-test-id="header-profile-nav-username"
                                            className="profile-nav__item profile-nav__username"
                                        >
                                            {user.fullName}
                                        </li>
                                        <li className="profile-nav__item">
                                            <Link
                                                to={'/sign-in'}
                                                data-test-id="header-profile-nav-sign-out"
                                                className="profile-nav__sign-out button"
                                            >
                                                <button
                                                    type='button'
                                                    className='btn-out'
                                                    onClick={onUserLogout}
                                                >
                                                    Sign Out
                                                </button>
                                            </Link>

                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </nav>
                ) : null}

            </div>
        </header>
    );
}
