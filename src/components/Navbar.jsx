// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className="bg-gray-800 p-4 w-3/4 fixed top-0 left-0 right-0 mx-auto mt-2 z-10 rounded-3xl"
      initial={{ y: 0 }}
      animate={{ y: scrollY > 100 ? -100 : 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="flex justify-between items-center">
        <div className="text-white font-bold text-xl">Your Name</div>
        <div className="space-x-4">
          <a href="#Home" className="text-white hover:text-gray-300 transition duration-300">Home</a>
          <a href="#project" className="text-white hover:text-gray-300 transition duration-300">Projects</a>
          <a href="#certificate" className="text-white hover:text-gray-300 transition duration-300">Certificates</a>
          <a href="#contact" className="text-white hover:text-gray-300 transition duration-300">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
