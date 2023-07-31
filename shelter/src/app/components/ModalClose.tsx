'use client'

import React from 'react';
import Image from 'next/image';

import closeButton from '../assets/icons/modal_close_button.svg'
import '../styles/modal.css'

const ModalClose: React.FC = () => {
return (
<div className="popup_close_button_items">
    <form action="#" className="close-popup">
        <button className="popup_close_button">
            <Image 
            className="popup_close_button_pic" 
            src={ closeButton }
            alt="close"
            width={52}
            height={52}
            />
        </button>
    </form>
</div>
)};
export default ModalClose;