"use client";

import { useState } from "react";

interface ProjectProps {
  name: string;
}

const ProjectCarouselUnfocused: React.FC<ProjectProps & { setProject: (project: string) => void; }> = ({ setProject }) => {
  return <div className="cursor-pointer p-4 m-2 bg-froggy-900"></div>;
};

interface ProjectDetailsProps extends ProjectProps {

}

const ProjectCarouselFocused: React.FC<ProjectDetailsProps> = ({ }) => {
  return <div className="p-6 m-2 bg-froggy-900 flex-grow"></div>;
};

interface ProjectCarouselProps {

}

const projects: ProjectDetailsProps[] = [
  {
    name: "ANNIverse"
  },
  {
    name: "ccs-web-static"
  },
  {
    name: "wiki"
  },
  {
    name: "theming"
  }
];

const initialFocusedProjectName = projects.find(p => p.name === "ANNIverse")?.name ?? "";

// ANNIverse, ccs-web-static, wiki, theming
const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ }) => {
  const [focusedProjectName, setFocusedProjectName] = useState<string>(initialFocusedProjectName);

  const [focusedProject, ...otherProjects] = projects.sort((pA, pB) => pA.name === focusedProjectName ? 1 : pB.name === focusedProjectName ? 1 : 0)

  const changeProject = (newProject: string) => {
    setFocusedProjectName(newProject);
  }
  console.log(otherProjects.length);

  return (
    <>
      <ProjectCarouselFocused {...focusedProject} />
      <div className="flex flex-col min-w-[200px]">{
        otherProjects.map(project => 
            <ProjectCarouselUnfocused
              key={project.name}
              setProject={changeProject}
              {...project} />
          )
        }
      </div>
    </>
  );
};

export default ProjectCarousel;
