'use client'

import React from 'react';
import HeaderNav from './HeaderNav'
import HeaderLogo from './HeaderLogo';
import '../styles/globals.css'
import '../styles/header.css'
import '../styles/intro.css'


const Header: React.FC = () => {
    return (
        <div className='wrapper'>
            <div className='header___wrapper'>
                <div className="header__components">
                    <HeaderLogo />
                    <HeaderNav />
                </div>
            </div>
        </div>
    );
};

export default Header;