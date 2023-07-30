'use client'

import React from 'react';
import '../styles/header.css'

const HeaderLogo: React.FC = () => {
    return (
        <div className="header__logo">
        <a href="#" className="header__logo_link">
            <div className="header__logo_item">
                <p className="header__logo_title">Cozy House</p>
                <p className="header__logo_subtitle">Shelter for pets in Boston</p>
            </div>
        </a>
    </div>
    )
}

export default HeaderLogo;