'use client'

import React from 'react';
import Image from 'next/image';
import FooterContacts from './FooterContacts';
import FooterLocation from './FooterLocation';
import '../styles/globals.css';
import '../styles/footer.css';

import footerImage from '../assets/images/footer-puppy.png'



const Footer: React.FC = () => {
    return (
            <footer className="footer">
                <div className="wrapper">
                    <div className="footer_flex">
                        <div className="footer_left_plus_centar">
                            <FooterContacts />
                            <FooterLocation />
                        </div>
                        <div className="footer_right_block">
                            <Image 
                            className="footer_right_block_pic" 
                            src={ footerImage }
                            width={300}
                            height={310}
                            alt="footer_puppy"
                            />
                        </div> 
                    </div>
                </div>
            </footer>
    );
};

export default Footer;