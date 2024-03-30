import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEye, faX } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../contexts/LanguageContext";

import Modal from "@mui/material/Modal";

const ProjectCard = ({ content, project }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const { language, changeLanguage } = React.useContext(LanguageContext);


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  if (!project["content"][language]) {
    return <div></div>;
  }


  return (
    <div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={` flex flex-col items-center justify-center md:justify-start bg-gradient-radial to-background from-gray-700 rounded-xl p-4 lg:p-6  w-[200px] h-[300px] lg:w-[300px] lg:h-[450px] transition duration-200`}
      >
          <div className="flex items-center justify-center rounded-xl w-auto h-auto mb-2 lg:mb-4 relative">
            <div className="flex items-center justify-center md:w-[220px] md:h-[220px] w-[180px] h-[180px]">
            <Image
              src={project["imageURL"]}
              alt={project["name"]}
              width={250}
              height={250}
              className={`${isHovered ? "opacity-10" : ""} rounded-xl`}
            />
            </div>
            
            <div
              className={`${
                isHovered ? "flex" : "hidden"
              } justify-center items-center absolute `}
            >
              <div className="flex flex-col items-center justify-center">
              <Link href={project["repoURL"]} title={content["github_title"]}>
                <div className="flex items-center justify-center border-2 border-white rounded-full m-3 p-1 lg:p-2 lg:m-5 w-8 h-8  lg:w-14 lg:h-14 bg-black hover:border-secondary-400 hover:text-secondary-400 ">
                  <FontAwesomeIcon icon={faCode} className="w-full h-full" />
                  
                </div>
              </Link>
              <div>{content["github"]}</div>
              </div>
              
              <div className="flex flex-col items-center justify-center">
              <button onClick={handleOpen} title={content["description_title"]}>
                <div className="flex items-center justify-center border-2 border-white rounded-full m-3 p-1 lg:p-2 lg:m-5 w-8 h-8 lg:w-14 lg:h-14  bg-black hover:border-secondary-400 hover:text-secondary-400">
                  <FontAwesomeIcon icon={faEye} className="w-full h-full" />
                </div>
              </button>
              <div>{content["description"]}</div>
              </div>
              
            </div>
          </div>
          <div
            className={`${
              isHovered ? "opacity-10" : ""
            }  w-full h-full relative`}
          >
            <h1 className="flex items-center justify-center text-white text-md h-full md:h-auto lg:text-xl text-center font-semibold ">
              {project["content"][language]["title"]}
            </h1>
            <div className="w-auto h-[1px] bg-primary-400 mb-1 hidden md:block  "></div>
            <p className="text-darktext overflow-clip text-sm lg:text-lg hidden md:block text-center ">
              {project["content"][language]["description"]}
            </p>
          </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <div className="flex flex-col bg-background rounded-3xl p-4 md:p-6 opacity-95 items-center justify-start absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-10/12 h-2/3 sm:w-8/12 md:w-6/12">
          <button
            onClick={handleClose}
            className=" hover:text-secondary-400 absolute top-0 right-0 mr-4 mt-4 md:mt-6 md:mr-6 "
          >
            <FontAwesomeIcon icon={faX} className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          <div className=" w-full h-2/3">
            <h1 className="text-xl md:text-3xl font-semibold">
              {project["content"][language]["title"]}
            </h1>
            <div className="w-full md:h-1 h-0.5 bg-secondary-400 rounded-full mb-2 md:mb-4"></div>
            <div className="w-full h-full overflow-y-auto ">
              <p className="text-sm sm:text-md md:text-xl text-darktext whitespace-normal break-words">
                {project["content"][language]["longDescription"]}
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center absolute bottom-0 right-0">
            <Link href={project["repoURL"]} title="Go to Github Page">
              <div className="flex items-center justify-center border-2 border-white rounded-full m-3 p-1 lg:p-2 lg:m-5 w-8 h-8  lg:w-12 lg:h-12 bg-black hover:border-secondary-400 hover:text-secondary-400 ">
                <FontAwesomeIcon icon={faCode} className="w-full h-full" />
              </div>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectCard;
