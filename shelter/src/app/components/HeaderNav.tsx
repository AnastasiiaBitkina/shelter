'use client'

import React from 'react';
import '../styles/header.css'

const HeaderNav: React.FC = () => {
    return (
        <nav className="header__nav">
            <ul className="header__list">
                <li className="header__item">
                    <a className="header__notlink">About the shelter</a>
                </li>
                <li className="header__item">
                    <a href="../shelter/index2.html" className="header__link">Our pets</a>
                </li>
                <li className="header__item">
                    <a href="#help_the_shalter" className="header__link">Help the shelter</a>
                </li>
                <li className="header__item">
                    <a href="#contacts" className="header__link">Contacts</a>
                </li>
            </ul>
        </nav>
    )
}

export default HeaderNav;

