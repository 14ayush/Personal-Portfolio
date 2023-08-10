import React from 'react';
import AQI from "../assets/portfolio/AQI.png";
import cake from "../assets/portfolio/cake webpage.png";
import Crypto from "../assets/portfolio/crypto.png";
import IPL from "../assets/portfolio/ipldashboard.png";
import Movie from "../assets/portfolio/movies.png.webp";
import Charlie from "../assets/portfolio/images.jpeg";
import { useState } from "react";




const Portfolio = () => {
    const portfolios=[
        {
            id:1,
            src:AQI,
            text:"Machine-learning",
            video:"#",
            code:"https://github.com/14ayush/Air-Quality-Index",
        },
        {
            id:2,
            src:cake,
            text:"Web-Development",
            video:"https://ayushcakebakery.netlify.app/",
            code:"https://github.com/14ayush/web-project",
        },
        {
            id:3,
            src:IPL,
            text:"PowerBI-Dashboard IPL",
            video:"https://www.linkedin.com/feed/update/urn:li:activity:7092643310959235072/",
            code:"https://www.linkedin.com/feed/update/urn:li:activity:7092643310959235072/",
        },
        {
            id:4,
            src:Crypto,
            text:"PowerBI-Dashboard Crypto",
            video:"https://www.linkedin.com/posts/ayush-sharma-390605239_powerbi-dataanalytics-datascience-activity-7054042430991474688-0CGp?utm_source=share&utm_medium=member_desktop",
            code:"https://www.linkedin.com/posts/ayush-sharma-390605239_powerbi-dataanalytics-datascience-activity-7054042430991474688-0CGp?utm_source=share&utm_medium=member_desktop",
        },
        {
            id:5,
            src:Movie,
            text:"ML-Project",
            video:"https://www.linkedin.com/posts/ayush-sharma-390605239_machinelearning-technology-team-activity-7061028362101678080-cGU2?utm_source=share&utm_medium=member_desktop",
            code:"https://github.com/14ayush/Movies-recommendation-system",
        },
        {
            id:6,
            src:Charlie,
            text:"AI-Chatbot",
            video:"#",
            code:"https://github.com/14ayush/Charlie-A.I",
        },
    ];

    
  return (
    <div name="Portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen text-white">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-yellow-300">Portfolio</p>
        <p className="py-6">Here is Some of My Work till now.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
        {portfolios.map(({ id, src,text,video,code }) => (
          <div key={id} className="portfolio-box-wrapper">
            <div className="portfolio-box shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-200">
              <img src={src} alt={`Portfolio ${id}`} className="rounded-md" />
              <div className="flex items-center justify-center mt-2">
                <a href={video} className="portfolio-button w-1/2 px-6 py-3 m-2 duration-200 hover:scale-110">Demo</a>
                <a href={code} className="portfolio-button w-1/2 px-6 py-3 m-2 duration-200 hover:scale-110">Code</a>
              </div>
              <div key={text} className="text-center">
              <p>{text}</p>
            
             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>


);
}

export default Portfolio