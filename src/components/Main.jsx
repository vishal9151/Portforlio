import React, { useState } from "react";
import {Link} from "react-router-dom";
import Java from "./java.png";
import Front from "./frontend.png";
import Back from "./backend.png";

const Card = ({ title,link }) => {
  return (
    <Link to={link} className="card-link">
         <div className="border rounded-lg min-h-[35vh] w-[15vw] flex flex-col justify-center items-center shadow-md bg-gray-800 mx-3 transform transition-transform hover:scale-105 cursor-pointer hover:duration-300">
        <h2 className=" text-white font-semibold text-3xl text-center p-4">
            {title}
        </h2>
    </div>
    </Link>
  );
};

function Main() {
  const [all, setAll] = useState(true);
  const [frontend, setFrontend] = useState(false);
  const [backend, setBackend] = useState(false);
  const handleAll = () => {
    setAll(true);
    setFrontend(false);
    setBackend(false);
  };
  const handleFrontend = () => {
    setAll(false);
    setFrontend(true);
    setBackend(false);
  };
  const handleBackend = () => {
    setAll(false);
    setFrontend(false);
    setBackend(true);
  };
  const All = [
    {
        title: "Habit Tracker App",
        link: "https://habit-tracker-github-io-roan.vercel.app/"
    },
    {
        title:"Authenticated Todo",
        link: "https://authenticated-todo-iota.vercel.app/"
    },
    {
        title: "Issue Tracker",
        link: "http://13.236.181.183:8000/"
    },
    {
        title: "Btech Burger Wala",
        link: "https://github.com/vishal9151/Btech-Burger-Wala"
    } 
  ];
  const Frontend = [
    {
        title: "Habit Tracker App",
        link: "https://habit-tracker-github-io-roan.vercel.app/"
    },
    {
        title:"Authenticated Todo",
        link: "https://competishun-task-todo.vercel.app/"
    },
  ];
  const Backend = [
    {
        title: "Issue Tracker",
        link: "http://13.236.181.183:8000/"
    },
    {
        title: "Btech Burger Wala",
        link: "https://github.com/vishal9151/Btech-Burger-Wala"
    } 
  ];
  return (
    <div className="bg-gray-500  h-full">
      <div className="w-4/5 mx-auto">
      <div className=" text-4xl text-center pt-5 pb-10 font-bold underline" id="project">Projects</div>
        <div className="w-1/2 mx-auto flex justify-evenly font-semibold">
          <button
            className="rounded-3xl border px-3 border-black hover:bg-black hover:text-white duration-300 ease-in-out"
            onClick={handleAll}
          >
            All
          </button>
          <button
            className="rounded-3xl border px-3 border-black hover:bg-black hover:text-white duration-300 ease-in-out"
            onClick={handleFrontend}
          >
            Frontend
          </button>
          <button
            className="rounded-3xl border px-3 border-black hover:bg-black hover:text-white duration-300 ease-in-out"
            onClick={handleBackend}
          >
            Backend
          </button>
        </div>
        <div className="flex mt-8 justify-center">
          {all && All.map((title) => <Card title={title.title} link={title.link}/>)}
          {frontend && Frontend.map((title) => <Card title={title.title} link={title.link}/>)}
          {backend && Backend.map((title) => <Card title={title.title} link={title.link}/>)}
        </div>
        <div className=" text-4xl text-center mt-10 font-bold underline">Skills</div>
        <div className="flex justify-between mt-10">
          <div className="border-black border font-semibold px-3 py-[2px] rounded-3xl hover:bg-black hover:text-white duration-300 ease-in-out cursor-pointer">Java</div>
          <div className="border-black border font-semibold px-3 py-[2px] rounded-3xl hover:bg-black hover:text-white duration-300 ease-in-out cursor-pointer">HTML/CSS</div>
          <div className="border-black border font-semibold px-3 py-[2px] rounded-3xl hover:bg-black hover:text-white duration-300 ease-in-out cursor-pointer">JavaScript</div>
          <div className="border-black border font-semibold px-3 py-[2px] rounded-3xl hover:bg-black hover:text-white duration-300 ease-in-out cursor-pointer">Node.js</div>
          <div className="border-black border font-semibold px-3 py-[2px] rounded-3xl hover:bg-black hover:text-white duration-300 ease-in-out cursor-pointer">Express.js</div>
          <div className="border-black border font-semibold px-3 py-[2px] rounded-3xl hover:bg-black hover:text-white duration-300 ease-in-out cursor-pointer">MongoDB</div>
          <div className="border-black border font-semibold px-3 py-[2px] rounded-3xl hover:bg-black hover:text-white duration-300 ease-in-out cursor-pointer">React.js</div>
          <div className="border-black border font-semibold px-3 py-[2px] rounded-3xl hover:bg-black hover:text-white duration-300 ease-in-out cursor-pointer">Redux</div>
          <div className="border-black border font-semibold px-3 py-[2px] rounded-3xl hover:bg-black hover:text-white duration-300 ease-in-out cursor-pointer">Tailwind.css</div>
        </div>
        <div className=" text-4xl text-center mt-10 font-bold underline" id="certificate">Certifications</div>
        <div className="flex justify-evenly mt-10 pb-8">
          <img src={Java} alt="" height="250px" width="250px" className="hover:scale-125 rounded-xl hover:duration-300"/>
          <img src={Front} alt="" height="250px" width="250px" className="hover:scale-125 rounded-xl hover:duration-300"/>
          <img src={Back} alt="" height="250px" width="250px" className="hover:scale-125 rounded-xl hover:duration-300"/>
        </div>
      </div>
    </div>
  );
}

export default Main;
