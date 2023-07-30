'use client'

import React from 'react';
import Image from 'next/image';
import '../styles/globals.css';
import '../styles/donation.css';

import cardImage from '../assets/icons/credit-card.svg'

const Card: React.FC = () => {
    return (
        <div className="donation_card_items">
            <Image className="donation_card_pic" 
            src={ cardImage } 
            alt="card" 
            width={30}
            height={23}
            />
            <h4 className="donation_cart">8380 2880 8028 8791 7435</h4>
        </div>
    );
};

export default Card;

