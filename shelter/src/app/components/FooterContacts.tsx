'use client'

import React from 'react';
import Image from 'next/image';
import '../styles/globals.css';
import '../styles/footer.css';

import mailImage from '../assets/icons/icon-email.svg';
import phoneImage from '../assets/icons/icon-phone.svg';

const FooterContacts: React.FC = () => {
    return (
        <div className="footer_left_block">
            <p><a id="contacts"></a></p>
            <h3 className="footer_left_block_text">For questions<br />and suggestions</h3>
            <div className="footer_email_items">
                <Image 
                className="footer_email_pic" 
                src={ mailImage }
                alt="cover"
                width={40}
                height={32}
                />
                <h4 className="footer_email">email@shelter.com</h4>
            </div>
            <div className="footer_phone_items">
                <Image 
                className="footer_phone_pic" 
                src={ phoneImage } 
                alt="phone"
                width={40}
                height={32}
                />
                <h4 className="footer_phone">+13 674 567 75 54</h4>
            </div>
        </div>
    );
};

export default FooterContacts;