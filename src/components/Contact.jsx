import React from 'react';
import {BsFillSendCheckFill} from "react-icons/bs";


const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 text-white w-full min-h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div className="pb-2">
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-yellow-300">Contact Me</p>
                <p className="py-6">Fill the form for any query and we will be Right Back</p>
            </div>
            <div className="flex justify-center items-center">
                <form action="https://formspree.io/f/mwkdlbwq" method="POST" className=" flex flex-col w-full md:w-1/2 mb-4">
                    <input type="text" name="name" placeholder="Enter Your Name"  className=" my-2 p-2 bg-transparent border-2 border-white rounded-md text-white focus:outline-none"/>
                    <input type="number" name="phone" placeholder="Enter Your Mobile No"  className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                    
                    <input type="text" name="e-mail" placeholder="Enter Your E-Mail"  className="my-1 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                    <textarea name="message" rows="10" placeholder="Enter Your Query" className="my-2 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"/>
                    <div className="flex justify-center items-center my-8">
                      <button className="text-white font-bold group w-fit px-4 py-3  flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105">
                         Let's talk
                         <span className="px-4 group-hover:scale-105 duration-300">
                         <BsFillSendCheckFill size={25} className="ml-1" />
                         </span>
                       </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact