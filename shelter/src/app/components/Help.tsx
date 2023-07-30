'use client'

import React from 'react';
import Image from 'next/image';
import HelpItem from './HelpItem';
import '../styles/globals.css';
import '../styles/help.css';

import petFoodImage from '../assets/icons/icon-pet-food.svg';
import transportationImage from '../assets/icons/icon-transportation.svg';
import toysImage from '../assets/icons/icon-toys.svg';
import bowlsImage from '../assets/icons/icon-bowls-and-cups.svg';
import shampoosImage from '../assets/icons/icon-shampoos.svg';

import vitaminsImage from '../assets/icons/icon-vitamins.svg';
import medicinesImage from '../assets/icons/icon-medicines.svg';
import collarsImage from '../assets/icons/icon-collars-leashes.svg';
import areasImage from '../assets/icons/icon-sleeping-area.svg';



const Help: React.FC = () => {
    return (
        <section className="help">
            <div className="wrapper">
                <div className="help_heading">
                    <p><a id="help_the_shalter"></a></p>
                    <h3 className="help_heading_text">How you can help<br />our shelter</h3>
                </div>
                <div className="help_strings">
                    <div className="help_string_1">
                        <HelpItem
                            imgSrc= { petFoodImage }
                            altText="pet_food"
                            title="Pet food"
                        />
                        <HelpItem
                            imgSrc= { transportationImage }
                            altText="transportation"
                            title="Transportation"
                        />
                        <HelpItem
                            imgSrc= { toysImage } 
                            altText="toys"
                            title="Toys"
                        />
                        <HelpItem
                            imgSrc= { bowlsImage }
                            altText="bowls"
                            title="Bowls and cups"
                        />
                        <HelpItem
                            imgSrc= { shampoosImage }
                            altText="shampoos"
                            title="Shampoos"
                        />
                    </div>
                    <div className="help_string_2">
                        <HelpItem
                            imgSrc= { vitaminsImage }
                            altText="vitamins"
                            title="Vitamins"
                        />
                        <HelpItem
                            imgSrc= { medicinesImage }
                            altText="medicines"
                            title="Medicines"
                        />
                        <HelpItem
                            imgSrc= { collarsImage } 
                            altText="collars"
                            title="Collars / leashes"
                        />
                        <HelpItem
                            imgSrc= { areasImage }
                            altText="areas"
                            title="Sleeping areas"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Help;