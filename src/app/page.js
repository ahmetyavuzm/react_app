"use client"
import Image from "next/image";
import Link from 'next/link';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";

const CLIENT_ID = "c6f30f073ad637beb24b";

export default function Home() {

  let loginWithGithub = () => {
    window.location.assign("https://github.com/login/oauth/authorize?client_id=" + CLIENT_ID );
  }


  return <main className="flex flex-col min-h-screen">
    <Navbar/>
    <div className="container px-12 py-4 mx-auto mt-20">
      <HeroSection/>
      <AboutSection/>
    </div>
  </main>
}
