'use client'

import React from 'react';
import Image from 'next/image';
import '../styles/globals.css'
import '../styles/pets.css'

import leftArrow from '../assets/icons/Arrow_right.png';
import rightArrow from '../assets/icons/Arrow.png';

const Slider: React.FC = () => {
    return (
        <div className="pets_slider" id="pagination">
            <div className="pets_slider_left_button_item">
                <button id="prev" className="pets_slider_left_button">
                    <Image 
                    className="left_arrow_pic" 
                    src={ leftArrow } 
                    alt="arrow" 
                    width={14}
                    height={6}
                    />
                </button>
            </div>

            <div className="pets_slider_right_button_item">
                <button id="next" className="pets_slider_right_button">
                    <Image 
                    className="right_arrow_pic" 
                    src={ rightArrow }
                    alt="arrow"
                    width={14}
                    height={6} 
                    />
                </button>
            </div>
        </div>
    );
};

export default Slider;