import { Imprima } from 'next/font/google';
import React from 'react';
import Image from 'next/image';
import '../styles/globals.css';
import '../styles/help.css'

interface HelpItemProps {
    imgSrc: string;
    altText: string;
    title: string;
}

const HelpItem: React.FC<HelpItemProps> = ({ imgSrc, altText, title }) => {
    return (
        <div className="help__items">
            <Image 
            className="help_pic" 
            src={imgSrc} 
            alt={altText} 
            width={30}
            height={30}
            />
            <h4 className="help_text">{title}</h4>
        </div>
    );
}

export default HelpItem;
