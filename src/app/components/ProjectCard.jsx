import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faEye, faX } from "@fortawesome/free-solid-svg-icons";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={` flex flex-col items-center justify-start bg-gradient-radial to-background from-gray-700 rounded-xl p-4 lg:p-6  w-[200px] h-[300px] lg:w-[300px] lg:h-[450px] transition duration-200`}
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
                  <FontAwesomeIcon icon={faCode} className="w-full h-full" />
                </div>
              </Link>
              <button onClick={handleOpen} title="Show Description">
                <div className="flex items-center justify-center border-2 border-white rounded-full m-3 p-1 lg:p-2 lg:m-5 w-8 h-8 lg:w-14 lg:h-14  bg-black hover:border-secondary-400 hover:text-secondary-400">
                  <FontAwesomeIcon icon={faEye} className="w-full h-full" />
                </div>
              </button>
            </div>
          </div>
          <div
            className={`${
              isHovered ? "opacity-10" : ""
            }  w-full h-full relative`}
          >
            <h1 className="text-white text-md lg:text-xl text-center font-semibold">
              {project["title"]}
            </h1>
            <div className="w-auto h-[1px] bg-primary-400 mb-1"></div>
            <p className="text-darktext overflow-clip text-sm lg:text-lg">
              {project["description"]}
            </p>
          </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <div className="flex flex-col bg-background rounded-3xl p-4 md:p-6 opacity-95 items-center justify-center absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 w-10/12 h-2/3 sm:w-8/12 md:w-6/12">
          <button
            onClick={handleClose}
            className=" hover:text-secondary-400 absolute top-0 right-0 mr-4 mt-4 md:mt-6 md:mr-6 "
          >
            <FontAwesomeIcon icon={faX} className="w-4 h-4 md:w-6 md:h-6" />
          </button>

          <div className=" w-full h-full">
            <h1 className="text-xl md:text-3xl font-semibold">
              {project["title"]}
            </h1>
            <div className="w-full md:h-1 h-0.5 bg-secondary-400 rounded-full mb-2 md:mb-4"></div>
            <div className="w-full h-full">
              <p className="text-md sm:text-lg md:text-xl text-darktext">
                {project["longDescription"]}
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
