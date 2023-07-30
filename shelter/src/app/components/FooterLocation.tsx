'use client'

import React from 'react';
import Image from 'next/image';
import '../styles/globals.css';
import '../styles/footer.css';

import markerImage from '../assets/icons/icon-marker.svg'


const FooterLocation: React.FC = () => {
    return (
        <div className="footer_central_block">
            <p className="footer_center_block_text">We are waiting<br />for your visit</p>
            <div className="footer_location_Boston_items">
                <Image 
                className="footer_location_Boston_pic" 
                src={ markerImage }
                alt="location"
                />
                <h4 className="footer_location_Boston">1 Central Street, Boston<br />(entrance from the store)</h4>
            </div>
            <div className="footer_location_London_items">
                <Image 
                className="footer_location_London_pic" 
                src={ markerImage }
                alt="location"
                />
                <h4 className="footer_location_London">18 South Park, London</h4>
            </div>
        </div>
    );
};

export default FooterLocation;