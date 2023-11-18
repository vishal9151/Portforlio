// src/components/LeftContent.js
import React from 'react';
import Typed from 'react-typed';

const LeftContent = () => {
  return (
    <div className="lg:w-1/2 p-4">
      {/* Static half and animated half of the line */}
      <h2 className="text-4xl text-gray-900 font-bold opacity-100 mb-4">
        <span className="p-2 rounded">A Full Stack</span>
        <Typed
          strings={['MERN Developer',]}
          typeSpeed={50} // Adjust the typing speed as needed
          backSpeed={40} // Adjust the backspacing speed as needed
          loop
        />
      </h2>
      <p className="text-gray-800 text-1xl font-semibold">
        "Full Stack Developer crafting innovative solutions at the intersection of front-end elegance and back-end robustness."
      </p>
    </div>
  );
};

export default LeftContent;
