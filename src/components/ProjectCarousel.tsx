"use client";

import { useState } from "react";

interface ProjectProps {
  name: string;
  imgIconUrl: string;
  lastUpdated: Date;
}

const ProjectCarouselUnfocused: React.FC<ProjectProps & { setProject: (project: string) => void; }> = ({ name, setProject }) => {
  const onClick = () => setProject(name);
  return <div onClick={onClick} className="rounded-lg cursor-pointer p-4 m-2 bg-froggy-900">{name}</div>;
};

interface ProjectDetailsProps extends ProjectProps {
  description: string;
}

const ProjectCarouselFocused: React.FC<ProjectDetailsProps> = ({ name }) => {
  return <div className="rounded-lg p-6 m-2 bg-froggy-900 flex-grow">{name}</div>;
};

const projects: ProjectDetailsProps[] = [
  {
    name: "ANNIverse",
    description: "",
    imgIconUrl: "",
    lastUpdated: new Date()
  },
  {
    name: "ccs-web-static",
    description: "",
    imgIconUrl: "",
    lastUpdated: new Date()
  },
  {
    name: "wiki",
    description: "",
    imgIconUrl: "",
    lastUpdated: new Date()
  },
  {
    name: "theming",
    description: "",
    imgIconUrl: "",
    lastUpdated: new Date()
  }
];

const initialFocusedProject = projects.find(p => p.name === "ANNIverse") as ProjectDetailsProps;

// ANNIverse, ccs-web-static, wiki, theming
const ProjectCarousel: React.FC = () => {
  const [focusedProjectName, setFocusedProjectName] = useState<string>(initialFocusedProject.name);

  const { focusedProject, otherProjects } = projects.reduce((obj, project) => {
    const focusedProject = project.name === focusedProjectName ? project : undefined;
    if(focusedProject) obj.focusedProject = project;
    else obj.otherProjects?.push(project)
    return obj;
  }, { focusedProject: initialFocusedProject, otherProjects: [] } as { focusedProject: ProjectDetailsProps, otherProjects: ProjectDetailsProps[] })

  const changeProject = (newProject: string) => {
    setFocusedProjectName(newProject);
  }

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
