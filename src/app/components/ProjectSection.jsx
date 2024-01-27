import React from "react";
import GithubService from "../services/GithubService.js";
import ProjectCard from "./ProjectCard.jsx";

const tags = ["All", "Web", "AI", "Console App", "Game", "Mobile"];

const ProjectSection = () => {
  const [projects, setProjects] = React.useState([]);

  const [currentTag, setCurrentTag] = React.useState("All");

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await GithubService.getProjects();
      setProjects(result);
    };

    fetchData();
  }, []);

  console.log(projects);


  let filteredProjects = projects.filter((project) => {
    if (currentTag === "All") {
      return true;
    } else {
      return project["tags"].includes(currentTag);
    }
  });

  return (
    <section id="projects-section" className="flex flex-col items-center justify-start mt-4">
      <div className="mb-2 lg:mb-4">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold">
          Projects
        </h1>
      </div>

      <div className="w-full h-0.5 bg-primary-400 rounded-full mb-2 lg:mb-4"></div>
      <div className="mb-6">
        <ul className="flex flex-wrap justify-center">
          {tags.map((tag, index) => (
            <li key={index} className="mx-2 mb-1 md:my-0">
              <button
                onClick={() => setCurrentTag(tag)}
                className={`${
                  currentTag === tag
                    ? "text-primary-400 border border-primary-400"
                    : "text-darktext border border-background  hover:border-white hover:bg-opacity-80 hover:text-white"
                } px-3 lg:px-5 py-1 lg:py-3 rounded-full  bg-background bg-opacity-100 `}
              >
                {tag}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul className="flex flex-wrap justify-center">
          {filteredProjects.map((project, index) => (
            <li key={index} className="mx-2 mb-1 md:my-0">
              <ProjectCard project={project} />
            </li>
          ))}

          <span className={`${filteredProjects.length === 0 ? "flex items-center justify-center": "hidden"} text-xl md:text-3xl lg:text-4xl font-semibold text-darktext w-full h-[300px] lg:h-[450px] `}> {`No Project :(`}</span>
        </ul>
      </div>
    </section>
  );
};

export default ProjectSection;
