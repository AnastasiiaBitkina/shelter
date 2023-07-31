import React, { useState } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

type PetCardProps = {
  name: string;
  imageUrl: StaticImageData;
  onLearnMore: () => void;
};

const PetCard: React.FC<PetCardProps> = ({ name, imageUrl, onLearnMore }) => {

  const [selectedPet, setSelectedPet] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
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
      <button className="pets_slider_button" onClick={onLearnMore}>
        Learn more
      </button>
    </div>
  );
};

export default PetCard;