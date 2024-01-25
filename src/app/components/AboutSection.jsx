"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const TAB_DATA = [
  {
    id: "skills",
    title: "Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Python</li>
        <li>Image Processing</li>
        <li>Machine Learning</li>
        <li>Web Scrapping</li>
      </ul>
    )
  },
  {
    id: "education",
    title: "Education",
    content: (
      <ul  className="list-disc pl-2">
        <li>Hacettepe University - Computer Engineering (2nd Grade)</li>
      </ul>
    )
  },
];

/*
{tabs.map((t, index) => (
    <TabButton key={index} selectTab={() => handleTabChange(t.name)} active={tab === t.name} children={t.children}/>
))}
*/

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="./images/computer1.png"
          alt="about_me_image"
          width={500}
          height={500}
          className=" rounded-3xl hidden md:block"
        />
        <div className="h-full">
          <h2 className="text-white font-extrabold text-2xl lg:text-3xl mb-4 mt-4 md:mt-0">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-[#ADB7BE] text-justify mb-2">
            I am a [Your Role/Title] with a strong foundation in [Your Key
            Technologies or Frameworks]. My journey in the world of development
            has equipped me with the skills to tackle challenges head-on and the
            creativity to build seamless and intuitive user experiences.
          </p>

          <div>
            {TAB_DATA.map((t, index) => (
              <TabButton
                key={index}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
                title={t.title}
              />
            ))}
          </div>

          <div className="mt-8">
              {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
