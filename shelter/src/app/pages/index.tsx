import React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import About from '../components/About';
import Pets from '../components/Pets';
import '../styles/globals.css'

const HomePage: React.FC = () => {
  return (
    <div>
      <div className='header-intro-backgraund'>
        <Header />
        <Intro />
      </div>
      <About />
      <Pets />
    </div>
  );
};

export default HomePage;