import React from 'react';
import Slider from '../components/PetsSlider'
import '../styles/globals.css';
import '../styles/pets.css';



const Pets: React.FC = () => {
    return (
        <section className="pets">
            <div className="wrapper">
                <h3 className='pets_heading'>Our friends who<br />are looking for a house</h3>
            </div>
            <Slider />
            <div className="pets_button_item">
                <button className="pets_button">Get to know the rest</button>
            </div>
        </section>
    );
};

export default Pets;
