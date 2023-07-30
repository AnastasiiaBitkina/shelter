import React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import '../styles/globals.css'

const HomePage: React.FC = () => {
  return (
    <div>
      <div className='header-intro-backgraund'>
        <Header />
        <Intro />
      </div>
    </div>
  );
};

export default HomePage;