"use client";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import React from "react";
import { LanguageContext } from "./contexts/LanguageContext";
import GithubService from "./services/GithubService";

const content = ""

export default function Home() {

  const {language , changeLanguage} = React.useContext(LanguageContext);
  
  const [content, setContent] = React.useState(undefined);

  React.useEffect(() => {
    const getContent = async () => {
      const json = await import('../../public/content.json');
      setContent(json);
    }
    getContent();
  }, []); 


  //content={jsonData["content"][language]["about-section"]}

  if (!content) {
    return <div></div>;
  }
  

  return (

      <main className="flex flex-col min-h-screen animate-lazy">
        <Navbar  content={content["content"][language]["navbar"]} />
        <div className="container px-12 py-4 mx-auto mt-20">
          <HeroSection content={content["content"][language]["hero-section"]} />
          <AboutSection content={content["content"][language]["about-section"]}/>
          <ProjectSection content={content["content"][language]["projects-section"]}/>
          <ContactSection content={content["content"][language]["contact-section"]} />
        </div>
        <Footer content={content["content"][language]["footer"]}/>
      </main>
  );
}




