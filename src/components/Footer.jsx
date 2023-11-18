import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  const linkedinUrl = 'https://www.linkedin.com/in/vishal-mangla-a1aaaa201/';
  const githubUrl = 'https://github.com/vishal9151';

  return (
    <div className="h-[30vh] bg-gray-800 flex  text-white" id='contact'>
      <div className="mb-4 text-3xl font-bold flex w-1/2 items-center justify-center">Contact me: <a href="mailto:manglvisha@gmail.com" className="font-serif pl-6">manglvisha@gmail.com</a></div>
      <div className="flex w-1/2 justify-center items-center">
        <div className="mr-4">
          <span className="text-lg font-semibold">Follow me on:</span>
        </div>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-white p-4">
          <FaLinkedin size={30} />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-white p-4">
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
