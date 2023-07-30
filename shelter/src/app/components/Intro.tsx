'use client'

import React from 'react';
import Image from 'next/image';
import '../styles/globals.css'
import '../styles/header.css'
import '../styles/intro.css'


const Intro: React.FC = () => {
    return (
        <section className="intro">
                <div className="wrapper">
                    <div className="intro_flex">
                        <div className="intro_content">
                            <div className="intro_left_block">
                                <h3 className="intro_heading">
                                    Not only people need a house
                                </h3>
                                <p className="intro_subheading">
                                    We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!
                                </p>
                                <button className="intro_button_primery">Make a friend</button>
                            </div>
                        </div>
                        <Image src="/src/app/assets/images/start-screen-puppy.png" alt="pappy" className="start_screen_puppy"  width= {698}  height={728} />
                    </div>
                </div> 
            </section>
    );
};

export default Intro;