"use client"
import Image from "next/image";
import Link from 'next/link';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {

  return <main className="flex flex-col min-h-screen">
    <Navbar/>
    <div className="container px-12 py-4 mx-auto mt-20">
      <HeroSection/>
      <AboutSection/>
      <ProjectSection/>
      <ContactSection/>
    </div>
    <Footer/>
  </main>
}
