'use client'

import React from 'react';
import Image from 'next/image';
import LegalInfo from './LegalInfo';
import Card from './Card';
import '../styles/globals.css';
import '../styles/donation.css'

import donationImage from '../assets/images/donation-dog.png'



const Donation: React.FC = () => {
    return (
        <section className="donation">
            <div className="wrapper">
                <div className="donation_flex">
                    <Image
                        className='donation_dog_pic'
                        src={donationImage}
                        width={505}
                        height={261}
                        alt='dog'
                    />
                    <div className='donation_right_block_items'>
                        <h3 className="donation_heading">You can also<br />make a donation</h3>
                        <h5 className="donation_subheading">Name of the bank / Type of bank account</h5>
                        <Card />
                        <LegalInfo />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donation;