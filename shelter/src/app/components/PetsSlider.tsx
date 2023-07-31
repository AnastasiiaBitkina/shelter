import React from 'react';
import  Slider, { SliderProps } from './Slider';
import { StaticImageData } from 'next/image';


import katrineImage from '../assets/images/pets-katrine.png';
import jenniferImage from '../assets/images/pets-jennifer.png';
import woodyImage from '../assets/images/pets-woody.png';
import sophiaImage from '../assets/images/pets-sophia.png';
import timmyImage from '../assets/images/pets-timmy.png';
import scarletImage from '../assets/images/pets-scarlet.png';
import freddyImage from '../assets/images/pets-freddie.png';
import charlyImage from '../assets/images/pets-charly.png';




/*type SliderProps = {
    pets: {
      name: string;
      imageUrl: string;
      onLearnMore: () => void;
    }[];
  };*/
  

  const PetsSlider: React.FC = () => {
    const pets: {
        name: string;
        imageUrl: StaticImageData;
        onLearnMore?: () => void; 
    }[] =[
      {
        name: "Katrine",
        imageUrl: katrineImage 
      },
      {
        name: "Jennifer",
        imageUrl: jenniferImage
      },
      {
        name: "Woody",
        imageUrl: woodyImage
      },
      {
        name: "Sophia",
        imageUrl: sophiaImage
      },
      {
        name: "Timmy",
        imageUrl: timmyImage
      },
      {
        name: "Scarlet",
        imageUrl: scarletImage
      },
      {
        name: "Freddie",
        imageUrl: freddyImage
      },
      {
        name: "Charly",
        imageUrl: charlyImage
      }
    ];
  
    const handleLearnMore = (petName: string) => {
      console.log(`You clicked on ${petName}`);
    };

    const shuffledPets = pets.sort(() => 0.5 - Math.random()).slice(0, 3);

    return (
      <Slider pets={shuffledPets.map(pet => ({
          name: pet.name,
          imageUrl: pet.imageUrl,
          onLearnMore: () => handleLearnMore(pet.name)
      }))} />
    );
};

export default PetsSlider;
