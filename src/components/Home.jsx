// src/components/Home.js
import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Home = () => {
  return (
    <div className="relative bg-gray-500 h-4/5" id='Home'>
      <div className="container mx-auto flex justify-between items-center p-8">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  );
};

export default Home;
