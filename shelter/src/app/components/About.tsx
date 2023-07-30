'use client'

import React from 'react';
import Image from 'next/image';
import '../styles/about.css';
import '../styles/globals.css'
import aboutPic from '../assets/images/about-pets.png'

const About: React.FC = () => {
    return (
        <section className="about_the_shelter">
        <div className="wrapper">
            <div className="about_the_shelter__item">
                <Image 
                src={ aboutPic } 
                alt="dog" 
                className="about_the_shelter__pic"
                width={300}
                height={408} />
                <div className="about_the_shelter__text">
                    <h3 className="about_the_shelter__heading">About the shelter &#8220;Cozy House&#8221;</h3>
                    <p className="about_the_shelter__subheading">Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.</p>
                    <p className="about_the_shelter__subheading_2">We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.</p>
                </div>
            </div>
        </div>
    </section>
    );
}

export default About;


