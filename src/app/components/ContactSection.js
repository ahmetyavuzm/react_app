"use client";
import React from "react";

import SocialButton from "./SocialButton";
import { socialLinks } from "../utils";

import InputBox from "./InputBox";
import TextArea from "./TextArea";

import EmailService from "../services/EmailService";


const ContactSection = ({ content }) => {
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      subject: subject,
      message: message,
    };
  

    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    
    console.log(responseData);
  
  };
  
  return (
    <section
      id="contact-section"
      className="flex flex-col items-center justify-center mt-8"
    >
      <div className="flex flex-col items-center justify-start md:items-start md:justify-around md:flex-row w-full h-full ">
        <div className="flex flex-col justify-center md:items-start items-center  w-[220px] sm:w-[300px] lg:w-[500px] text-center md:text-start  ">
          <h1 className="font-semibold text-md lg:text-2xl">
            {content["title"]}
          </h1>
          <p className="text-darktext text-sm lg:text-lg">
            {content["description"]}
          </p>

          <ul className="flex items-center justify-start mt-2 ">
            {socialLinks.map((social, index) => (
              <li
                key={index}
                className="mx-2 md:mx-0 md:mr-4 w-7 h-7 text-md lg:text-xl lg:w-10 lg:h-10"
              >
                <SocialButton
                  link={social.link}
                  icon={social.icon}
                  colors={social.colors}
                />
              </li>
            ))}
          </ul>
        </div>

       
        <form
          onSubmit={(e) => {handleSubmit(e)}}
          className=" w-10/12 h-full mt-8 sm:w-[300px] lg:w-[400px] md:mt-0"
        >
        <div>
          <div className="mb-2 lg:mb-8">
            <h1 className="text-md lg:text-2xl bg-black font-semibold text-gray-200">
              {content["form"]["email"]["title"]}
            </h1>
            <InputBox
              onChange={(value) => setEmail(value)}
              className="text-sm lg:text-lg"
              type="email"
              placeholder={content["form"]["email"]["placeholder"]}
              validationRegex={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
            />
          </div>
          <div className="mb-2 lg:mb-8">
            <h1 className="text-md lg:text-2xl font-semibold text-gray-200">
              {content["form"]["subject"]["title"]}
            </h1>
            <InputBox
              onChange={(value) => setSubject(value)}
              className="text-sm lg:text-lg"
              type="text"
              placeholder={content["form"]["subject"]["placeholder"]}
            />
          </div>
          <div className="mb-2 lg:mb-8">
            <h1 className="text-md lg:text-2xl font-semibold text-gray-200">
              {content["form"]["message"]["title"]}
            </h1>
            <TextArea
              onChange={(value) => setMessage(value)}
              className="text-sm lg:text-lg"
              rows="7"
              placeholder={content["form"]["message"]["placeholder"]}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full h-10 bg-primary-400 text-white text-sm lg:text-lg font-semibold rounded-md"
            >
              {content["form"]["submit"]["title"]}
            </button>
          </div>
          </div>
        </form>

      </div>
    </section>
  );
};

export default ContactSection;
