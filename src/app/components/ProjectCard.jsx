import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEye } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={` flex flex-col items-center justify-start bg-background rounded-xl p-4 lg:p-6  w-[200px] h-[300px] lg:w-[300px] lg:h-[450px] transition duration-200`}
    >
      <div className="flex items-center justify-center rounded-xl w-auto h-auto mb-2 lg:mb-4 relative">
        <Image
          src={project["imageURL"]}
          alt={project["name"]}
          width={250}
          height={250}
          className={`${isHovered ? "opacity-10" : ""} rounded-xl`}
        />
        <div
          className={`${
            isHovered ? "flex" : "hidden"
          } justify-center items-center absolute `}
        >
          <Link href={project["repoURL"]} title="Go to Github Page">
            <div className="flex items-center justify-center border-2 border-white rounded-full m-3 p-1 lg:p-2 lg:m-5 w-8 h-8  lg:w-14 lg:h-14 bg-black hover:border-secondary-400 hover:text-secondary-400 ">
              <FontAwesomeIcon icon={faCode} className="w-full h-full"/>
            </div>
          </Link>
          <Link href={project["repoURL"]} title="Show Description">
            <div className="flex items-center justify-center border-2 border-white rounded-full m-3 p-1 lg:p-2 lg:m-5 w-8 h-8 lg:w-14 lg:h-14  bg-black hover:border-secondary-400 hover:text-secondary-400">
              <FontAwesomeIcon icon={faEye} className="w-full h-full" />
            </div>
          </Link>
        </div>
      </div>
      <div className={`${isHovered ? "opacity-10" : ""}  w-full h-full`}>
        <h1 className="text-white text-md lg:text-xl text-center font-semibold">
          {project["title"]}
        </h1>
        <div className="w-auto h-[1px] bg-primary-400 mb-1"></div>
        <p className="text-darktext overflow-clip text-sm lg:text-lg">
          {project["description"]}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
