import React from 'react';

const About = () => {
    
  return (
    <div name="About" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
            <p className="text-4xl font-bold inline border-b-4 border-white text-yellow-300">
                About Me
            </p>
        </div>
        <div className="text-xl mt-10 md:mt-16 lg:mt-20">
            <p>
            I am a passionate coder and data enthusiast, driven by an insatiable curiosity for all things related to computer science and the world of data. With an unwavering dedication to my craft, I have embarked on a journey that began with a single line of code in C language during my ninth-grade years, igniting a lifelong passion that continues to fuel my pursuits
            </p>
            <br/>
            <p>
            Throughout my dynamic journey, I have enthusiastically undertaken more than six innovative projects that are a testament to my unyielding commitment to the realm of data science. My projects stand as a testament to my relentless exploration of intricate patterns and insights that lie hidden within data sets. The fusion of my coding prowess with my keen analytical skills has led to the creation of solutions that transcend conventional boundaries.
            </p>
        </div>
        <div className="mt-6 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 items-center md:items-start">
            <a href="/oncampus resume.pdf" download className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer text-white rounded-lg">
                Download Resume
                
            </a>
            <a href="https://wa.me/9084626104" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg">
                Say Hello
            </a>
        </div>
    </div>
</div>


  )
};

export default About