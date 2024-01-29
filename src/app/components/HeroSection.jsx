"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { LanguageContext } from "../contexts/LanguageContext";

const HeroSection = ({ content }) => {
  const getTypingSequence = () => {
    let sequence = [];
    for (const text of content["typing-strings"]) {
      sequence.push(text);
      sequence.push(1000);
    }
    return sequence;
  };

  const getTypingElement = () => {
    return (
      <TypeAnimation
        sequence={getTypingSequence()}
        wrapper={"span"}
        speed={50}
        repeat={Infinity}
      />
    );
  };

  const [typingSequence, setTypingSequence] = React.useState(
    getTypingSequence()
  );
  const { language, changeLanguage } = React.useContext(LanguageContext);

  const [element, setElement] = React.useState(getTypingElement());

  React.useEffect(() => {
    setTypingSequence(getTypingSequence());
    let dummy = document.getElementById("dummy-delete");
    dummy.click();
  }, [language]);

  React.useEffect(() => {
    let dummy = document.getElementById("dummy-add");
    dummy.click();
  }, [typingSequence]);

  const dummyAddButton = (
    <button
      id="dummy-add"
      onClick={() => setElement(getTypingElement())}
    ></button>
  );
  const dummyDeleteButton = (
    <button id="dummy-delete" onClick={() => setElement(<div></div>)}></button>
  );

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 ">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span
              className={` text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500 `}
            >
              {content["title"]}
            </span>
            <br></br>
            <div className="flex justify-center  sm:block">
            <div id="typing-animation" className=" flex justify-center sm:block h-[100px] w-[200px] text-center sm:h-[150px] lg:h-auto sm:w-auto sm:text-start ">
              {element}
              {dummyAddButton}
              {dummyDeleteButton}
            </div>
            </div>
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-lg lg:text-xl">
            {content["description"]}
          </p>
          <div className="flex flex-wrap">
            <Link
              href="#contact-section"
              className={`px-6 py-3 w-full sm:w-fit rounded-full sm:mr-4 bg-gradient-to-br from-primary-400 to-secondary-500  hover:text-black text-white `}
            >
              {content["hire-button"]}
            </Link>
            <div
              className={`rounded-full flex w-full sm:w-fit mt-3 sm:mt-0 px-[1px] py-[1px] bg-gradient-to-br from-primary-400 to-secondary-500 `}
            >
              <button
                id="download-btn"
                className="w-full rounded-full bg-[#121212] bg-opacity-100 "
              >
                <div className="px-6 py-3 sm:w-fit rounded-full w-full z-20 text-transparent bg-clip-text bg-gradient-to-br from-primary-400 to-secondary-500  hover:text-white">
                  {" "}
                  {content["download-button"]}
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center col-span-5 place-self-center mt-4 lg:mt-0 relative w-[240px] h-[240px] sm:w-[390px] sm:h-[390px] md">
          <div className="absolute rounded-full animate-wave w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] bg-opacity-50 bg-primary-500"></div>
          <div className="absolute rounded-full animate-wave-delay-1s w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] bg-opacity-50 bg-secondary-200"></div>

          <Link href={"/"} className="absolute">
            <Image
              src="./images/my_cartoon.png"
              alt="hero_image"
              width={300}
              height={300}
              className="rounded-full w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] hover:cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
