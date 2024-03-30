
"use Client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

import React from "react";


//export const jsonData = await import('../../public/content.json');
//console.log(jsonData["content"]["en"]["about-section"][""]);

export const socialLinks = [
    {
      id: "instagram",
      title: "Instagram",
      link: "https://www.instagram.com/ayavuzm/",
      colors: {
        default: "pink-400",
        hover: "pink-200",
      },
  
      icon: <FontAwesomeIcon icon={faInstagram} />,
    },
  
    {
      id: "linkedin",
      title: "Linkedin",
      link: "https://www.linkedin.com/in/ahmet-yavuz-mutlu-478870225/",
      colors: {
        default: "blue-400",
        hover: "blue-200",
      },
  
      icon: <FontAwesomeIcon icon={faLinkedin} />,
    },
  
    {
      id: "github",
      title: "github",
      link: "https://github.com/ahmetyavuzm",
      colors: {
        default: "green-400",
        hover: "green-200",
      },
  
      icon: <FontAwesomeIcon icon={faGithub} />,
    },
    {
      id: "gmail",
      title: "gmail",
      link: "mailto:ahmetyavuzm@gmail.com",
      colors: {
        default: "red-400",
        hover: "red-200",
      },
  
      icon: <FontAwesomeIcon icon={faGoogle} />,
    },
  ];