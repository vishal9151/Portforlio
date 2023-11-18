// src/components/RightContent.js
import React from 'react';
import x from "./image.png";

const RightContent = () => {
  return (
    <div className="lg:w-1/2 p-4 flex justify-center items-center">
      {/* Image with 80% of its container size */}
      <img
        src={x} // Replace with the actual image source
        alt="Right Content"
        className="w-80 h-80 object-cover rounded-full mt-[40px]"
      />
    </div>
  );
};

export default RightContent;
