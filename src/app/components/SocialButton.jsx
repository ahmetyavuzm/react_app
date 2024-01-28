"use client";
import React, {useState} from "react";
import Link from "next/link";


const SocialButton = ({link, icon, colors}) => {
  const [isHovered, setIsHovered] = useState(false);

  const primary = `bg-${colors.default}`;
  const secondary = `bg-${colors.hover}`;

  const primaryText = `text-${colors.default}`;
  const secondaryText = `text-${colors.hover}`;
  
 
  return (
    <Link
    href = {link}>
      <div
        className="flex items-center justify-center h-full w-full relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`${
            isHovered
              ? `${secondary} bg-[#ffffff] scale-y-[0] -translate-y-1/2 `
              : `${primary} scale-y-1`
          } absolute w-0.5 h-full top-0 left-0 rounded-sm transform duration-1000`}
        ></div>
        <div
          className={`${
            isHovered
              ? `${secondary} scale-y-[0] translate-y-1/2 `
              : `${primary} scale-y-1`
          }  absolute w-0.5 h-full bottom-0 right-0 rounded-sm transform duration-1000`}
        ></div>
        <div
          className={`${
            isHovered
              ? `${secondary} scale-x-[1]`
              : `${primary} scale-x-0  -translate-x-1/2`
          }  absolute w-full h-0.5 top-0 left-0 rounded-sm transform duration-1000`}
        ></div>
        <div
          className={`${
            isHovered
              ? `${secondary} scale-x-[1] `
              : `${primary} scale-x-0 translate-x-1/2`
          }  absolute w-full h-0.5 bottom-0 right-0 rounded-sm transform duration-1000`}
        ></div>
        <span className={`${isHovered? secondaryText: primaryText}  m-2`}>
            {icon}
        </span>

      </div>
    </Link>
  );
};

export default SocialButton;
