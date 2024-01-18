"use client"
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';


const HeroSection = () => {
  
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className = {` text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-yellow-500`} > {"Hello, I'm "}</span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Yavuz',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Web Developer',
                1000,
                'Backend Developer',
                1000,
                'AI Programmer',
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <div className= "flex flex-wrap">
            <button className={`px-6 py-3 w-full sm:w-fit rounded-full sm:mr-4 bg-gradient-to-br from-cyan-400 to-yellow-500 hover:text-black text-white `}>Hire Me</button>
            <div className= {`rounded-full flex w-full sm:w-fit mt-3 sm:mt-0 px-[1px] py-[1px] bg-gradient-to-br from-cyan-400 to-yellow-500`}>
              <button className="w-full rounded-full bg-[#121212] bg-opacity-100 ">
                <div className="px-6 py-3 sm:w-fit rounded-full w-full z-20 text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-yellow-500 hover:text-white"> Download CV</div>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] md:w-[400px] md:h-[400px] relative">
            <Image 
            src="./images/developer.png" 
            alt="hero_image"
            width={400} 
            height={400} 
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"    
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
