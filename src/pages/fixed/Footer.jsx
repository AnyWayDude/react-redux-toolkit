import React from 'react';
import { ReactComponent as HeartIcon } from '../../images/heart.svg';

export default function Footer() {
    return (
        <footer className='footer'>
            <span class="footer__text">
                from
                <a className='footer__link' href="https://binary-studio.com">
                    binary studio
                </a>
                with
                <HeartIcon className='footer__icon' alt='heart icon' />
            </span>
        </footer>
    );
}
