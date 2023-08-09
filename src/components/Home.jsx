import React from 'react'
import hero from "../assets/hero2.jpg";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

const Home = () => {
  return (
    <div name="home"className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white py-8">
        <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className=" flex flex-col justify-center h-full">
                <h2 className=" text-4xl sm:text-6xl font-bold text-yellow-300" >
                    I'm a Aspiring Data Scientist
                </h2>
                <p className="my-3">
                Dedicated and agile learner, adept at swiftly mastering new technologies. Thrives
                both independently and collaboratively within a team. Enthusiastically embraces learning opportunities to
                enhance technical prowess and contribute effectively.
                </p>
                <div>
                    <button className="text-white group w-fit px-6 py-3 my-4 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio<span className=" group-hover:rotate-90 duration-300 "><MdOutlineKeyboardArrowRight size={25} className="ml-1" /></span>
                    </button>
                </div>
            </div>
            <div>
                <img src={hero} className=" rounded-2xl mx-auto w-2/3 md:w-full "  ></img>
            </div>
        </div>
        
        
    </div>

  )
}

export default Home
















/*{MdOutlineKeyboardArrowRight}*/