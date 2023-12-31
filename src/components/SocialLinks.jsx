import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";

const SocialLinks = () => {

  const links=[
    {
        id:1,
        child: (
            <>
            LinkedIn <FaLinkedin size={30} />
            </>
        ),
        href:"https://www.linkedin.com/in/ayush-sharma-390605239/",
        style:'rounded-tr-md'
    },
    {
        id:2,
        child: (
            <>
            GitHub<FaGithub size={30} />
            </>
        ),
        href:"https://github.com/14ayush",
        
    },
    {
        id:3,
        child: (
            <>
            E-Mail< HiOutlineMail size={30} />
            </>
        ),
        href:"mailto:aayushparashar984@gmail.com",
        
    },
    {
        id:4,
        child: (
            <>
            Resume <BsFillPersonLinesFill size={30} />
            </>
        ),
        href:'/oncampus resume.pdf',
        style:'rounded-br-md',
        download:true,
    },
  ]

  return (
    <div className="hidden lg:flex lg:flex-col lg:top-[35%] lg:left-0 lg:fixed">
        <ul>

         {links.map(({id,child,href,style,download}) => (
            <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-r from-black to-yellow-300 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + " "+style}>
            <a href={href} className="flex justify-between items-center w-full text-white font-semibold"
            download={download}
            target="_blank"
            rel="noreferrer">
               {child}
            </a>
        </li>

         ))}

            
        </ul>
    </div>
  )
}

export default SocialLinks