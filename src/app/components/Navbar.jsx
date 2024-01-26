"use client";
import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import SocialButton from "./SocialButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram , faLinkedin , faGithub} from "@fortawesome/free-brands-svg-icons"

const colors = require('tailwindcss/colors');

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const socialLinks = [
  {
    id: "instagram",
    title: "Instagram",
    link: "https://www.instagram.com/ayavuzm/",
    colors : {
      default: "pink-400",
      hover: "pink-200",
    },

    icon: (<FontAwesomeIcon icon={faInstagram} />),
  },

  {
    id: "linkedin",
    title: "Linkedin",
    link: "https://www.linkedin.com/in/ahmet-yavuz-mutlu-478870225/",
    colors : {
      default: "blue-400",
      hover: "blue-200",
    },

    icon: (<FontAwesomeIcon icon={faLinkedin} />),
  },

  {
    id: "github",
    title: "github",
    link: "https://github.com/ahmetyavuzm",
    colors : {
      default: "green-400",
      hover: "green-200",
    },

    icon: (<FontAwesomeIcon icon={faGithub} />),
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
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center p-2  border rounded-lg border-primary-400 text-primary-400  transform duration-300"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>

        <div className=" menu hidden md:block md:w-auto">
          <div className="flex items-center justify-center">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>

            <ul className="flex p-4 pl-8">
              {socialLinks.map((social, index) => (
                <li key={index} className="mx-2">
                  <SocialButton link={social.link} icon={social.icon} colors={social.colors} />
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
