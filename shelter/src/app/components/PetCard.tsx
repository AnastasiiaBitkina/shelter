import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type PetCardProps = {
  name: string;
  imageUrl: StaticImageData;
  onLearnMore: () => void;
};

const PetCard: React.FC<PetCardProps> = ({ name, imageUrl, onLearnMore }) => {
    return (
      <div className="pets_slider_items katrine">
        <Image 
        className="pets_slider_pic" 
        src={imageUrl} 
        alt="pet" 
        width={270}
        height={270}
        />
        <h2 className="pets_slider_name">{name}</h2>
        <button className="pets_slider_button">
          Learn more
        </button>
      </div>
    );
  };
  
  export default PetCard;