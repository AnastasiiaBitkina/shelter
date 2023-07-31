import React from 'react';
import Image from 'next/image';
import ModalClose from './ModalClose';
import imageUrl from './PetsSlider';
import { StaticImageData } from 'next/image';

import '../styles/modal.css'

type ModalProps = {
    pet: {
        name: string;
        imageUrl: StaticImageData;
        onLearnMore: () => void;
    };
    onClose: () => void;
};


const Modal: React.FC<ModalProps> = ({pet}) => {
    return (
        <div className="popup__bg">
            <div className="popup">
                <div className="popup_cards">
                    <div className="popup_card">
                        <div className="popup_items">
                            <Image
                                className="popup_pic"
                                src={pet.imageUrl}
                                alt={pet.name}
                                width={500}
                                height={500}
                            />
                            <div className="popup_text_items">
                                <h3 className="popup_heading">{pet.name}</h3>
                                <p className="popup_subheading">Cat - British Shorthair</p>
                                <p className="popup_text">Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.</p>
                                <ul className="popup_list">
                                    <li><b className="bold_text">Age:</b> 2 year</li>
                                    <li><b className="bold_text">Inoculations:</b> none</li>
                                    <li><b className="bold_text">Diseases:</b> none</li>
                                    <li><b className="bold_text">Parasites:</b> none</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ModalClose />
                </div>
            </div>
        </div>
    )
};

export default Modal;