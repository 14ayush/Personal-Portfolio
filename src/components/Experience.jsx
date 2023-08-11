import React from 'react';
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import Cpp from "../assets/c++.png";
import python from "../assets/Python-logo-notext.svg.webp";
import Machine_Learning from "../assets/images.jpg";
import Java_script from "../assets/javascript.png";
import Graph from "../assets/graphql.png";
import GitHub from "../assets/github.png";
import node_js from "../assets/node.png";
import Next from "../assets/nextjs.png";
import react from "../assets/react.png";
import sklearn from "../assets/sklearn.png";
import mysql from "../assets/mysql.png";
import PowerBI from "../assets/powerbi.png";
import Html from "../assets/html.png";
import aws from "../assets/aws.jpeg";





const Experience = () => {
    const techs=[
        {
            id:1,
            src:Html,
            title:"HTML",
            style:"shadow-orange-500",
        },
        {
            id:2,
            src:css,
            title:"CSS",
            style:"shadow-blue-500",
        },
        {
            id:3,
            src:PowerBI,
            title:"PowerBI",
            style:"shadow-yellow-500",
        },
        {
            id:4,
            src:sklearn,
            title:"SK-Learn",
            style:"shadow-white",
        },
        {
            id:5,
            src:GitHub,
            title:"GitHub",
            style:"shadow-white",
        },
        {
            id:6,
            src:node_js,
            title:"Node Js",
            style:"shadow-green-500",
        },
        {
            id:7,
            src:Next,
            title:"Next Js",
            style:"shadow-white",
        },
        {
            id:8,
            src:aws,
            title:"AWS",
            style:"shadow-purple-500",
        },
        {
            id:9,
            src:Cpp,
            title:"C ++",
            style:"shadow-blue-500",
        },
        {
            id:10,
            src:mysql,
            title:"My SQL",
            style:"shadow-orange-500",
        },
        {
            id:11,
            src:tailwind,
            title:"Tailwind",
            style:"shadow-cyan-600",
        },
        {
            id:12,
            src:react,
            title:"Rect Js",
            style:"shadow-blue-500",
        },
        {
            id:13,
            src:Machine_Learning,
            title:"Machine leraning",
            style:"shadow-green-500",
        },
        {
            id:14,
            src:python,
            title:"Python",
            style:"shadow-yellow-300",
        },
        {
            id:15,
            src:Graph,
            title:"Graphql",
            style:"shadow-pink-500",
        },
    ]
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white w-full min-h-screen">
  <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
    <div className="">
      <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-yellow-300">Experience</p>
      <p className="py-6">Tech Stack I Have</p>
    </div>
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center py-8 px-4 sm:px-0">
      {techs.map(({ id, src, title, style }) => (
        <div key={id} className={`shadow-md ${style} hover:scale-110 duration-500 py-2 rounded-lg relative overflow-hidden`}>
          <img src={src} className="w-20 mx-auto" alt={`Tech ${title}`} />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
            <p className="text-white text-lg">{title}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}

export default Experience