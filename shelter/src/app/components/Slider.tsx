import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import PetCard from './PetCard';
import leftArrow from '../assets/icons/Arrow_right.png';
import rightArrow from '../assets/icons/Arrow.png';

export type SliderProps = {
    pets: {
      name: string;
      imageUrl: StaticImageData; 
      onLearnMore: () => void;
    }[];
};

const handleClick = () => {
    console.log("Button clicked");
};

const Slider: React.FC<SliderProps> = ({ pets }) => {
    return (
        <div className="pets_slider" id="pagination">
            <div className="pets_slider_left_button_item">
                <button id="prev" className="pets_slider_left_button">
                    <Image
                        className="left_arrow_pic"
                        src={leftArrow}
                        alt="arrow"
                        width={14}
                        height={6}
                    />
                </button>
            </div>
            {pets.map(pet => (
                <PetCard
                    key={pet.name}
                    name={pet.name}
                    imageUrl= {pet.imageUrl}
                    onLearnMore={pet.onLearnMore}                    
                />
            ))}
            <div className="pets_slider_right_button_item">
                <button id="next" className="pets_slider_right_button">
                    <Image
                        className="right_arrow_pic"
                        src={rightArrow}
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
