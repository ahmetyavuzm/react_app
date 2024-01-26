import React from "react";
import NavLink from "./NavLink";
import SocialButton from "./SocialButton";


const MenuOverlay = ({ links, socialLinks }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
      <li>
      <ul className="flex p-4">
          {socialLinks.map((social, index) => (
            <li key={index} className="mx-2">
            <SocialButton link={social.link} icon={social.icon} colors= {social.colors} />
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default MenuOverlay;
