"use client";
import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import SocialButton from "./SocialButton";
import LanguageSwitchButton from "./LanguageSwitchButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

import { socialLinks } from "../utils";



const navLinks = [
  {
    title: "About",
    path: "#about-section",
  },
  {
    title: "Projects",
    path: "#projects-section",
  },
  {
    title: "Contact",
    path: "#contact-section",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-navbar bg-opacity-90">
      <div className=" flex flex-warp items-center justify-between mx-auto px-8 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold py-2 flex items-center"
        >
          <Image
            src="./images/logo_transparent2.png"
            alt="logo"
            width={150}
            height={100}
            className="mt-1"
          />
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center p-2 border rounded-lg border-slate-200 text-slate-200 hover:text-primary-400 hover:border-primary-400 transform duration-300"
            >
              <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center p-2  border rounded-lg border-primary-400 text-primary-400  transform duration-300"
            >
              <FontAwesomeIcon icon={faX} className="w-5 h-5" />
            </button>
          )}
        </div>

        <div className=" menu hidden md:block md:w-auto">
          <div className="flex items-center justify-center">
            
              <span className="mr-6">
                <LanguageSwitchButton/>
              </span>
            

            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>

            <ul className="flex p-4 pl-8">
              {socialLinks.map((social, index) => (
                <li key={index} className="mx-2 w-7 h-7 text-md">
                  <SocialButton
                    link={social.link}
                    icon={social.icon}
                    colors={social.colors}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {navbarOpen ? (
        <MenuOverlay links={navLinks} socialLinks={socialLinks} />
      ) : null}
    </nav>
  );
};

export default Navbar;
