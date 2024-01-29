"use client";
import React from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = ({content}) => {
  const [tab, setTab] = React.useState("skills");

  const handleTabChange = (id) => {
    React.startTransition(() => {
      setTab(id);
    });
  };


  return (      <section id="about-section" className="text-white">
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
        {content["title"]}
      </h2>
      <p className="text-lg md:text-xl text-[#ADB7BE] text-justify mb-2">
        {content["description"]}
      </p>

      <div>
        {content["tabs"].map((t, index) => (
          <TabButton
            key={index}
            selectTab={() => handleTabChange(t.id)}
            active={tab === t["id"]}
            title={t["title"]}
          />
        ))}
      </div>

      <div className="mt-8">
        <ul className="list-disc pl-2">
          {content["tabs"]
            .find((t) => t["id"] === tab)
            .content.map((c, index) => (
              <li key={index}>{c}</li>
            ))}
        </ul>
      </div>

    </div>
  </div>
</section>

  );
};

export default AboutSection;
