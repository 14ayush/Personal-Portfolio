import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from "react-scroll"

const Navbar = () => {
    const[nav, setNav]=useState(false)
    const links = [
        {
            id:1,
            link:'home',
        },
        {
            id:2,
            link:'About',
        },
        {
            id:3,
            link:'Portfolio',
        },
        {
            id:4,
            link:'Experience',
        },
        {
            id:5,
            link:"Contact",
        },
    ]
  return (
    <div className="flex justify-between items-center w-full h-20 text-yellow-300 px-4 bg-black fixed z-10">
    <div>
      <h1 className="text-5xl font-signature ml-2">ayush</h1>
    </div>
    <ul className="hidden md:flex">
      {links.map(({ id, link }) => (
        <li
          key={id}
          className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-300"
        >
          <Link to={link} smooth duration={500}>{link}</Link>
          
        </li>
      ))}
    </ul>
    <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
      {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
    </div>
    {nav && (
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 duration-200 py-4 text-2xl"
          >
            <Link onClick={()=>setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
    )}
  </div>
  )
}

export default Navbar