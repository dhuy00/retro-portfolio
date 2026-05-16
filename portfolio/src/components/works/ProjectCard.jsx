import React from "react";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({ project, setSelectedProject }) => {
  const techstack = [
    {
      id: 0,
      name: "Next.js",
    },
    {
      id: 1,
      name: "PostgreSQL",
    },
    {
      id: 2,
      name: "Stripe",
    },
  ];

  return (
    <div className="w-full max-w-[550px] bg-card border-primary/50 border-2 p-4 sm:p-6 flex flex-col gap-4 hover:border-accent transition hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]">
      <div className="font-press-start text-sm sm:text-base leading-relaxed">
        {project.title}
      </div>

      <span className="text-muted-foreground font-orbitron text-sm sm:text-base line-clamp-2 min-h-[3rem]">
        {project.description}
      </span>

      <div className="flex gap-2 sm:gap-4 flex-wrap">
        {project.tech.map((item) => (
          <span className="font-orbitron border border-accent/50 text-accent font-medium px-2 py-1 text-xs sm:text-sm">
            {item}
          </span>
        ))}
      </div>

      <span className="h-[2px] w-full bg-primary/50"></span>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-center">
        <div className="flex xs:flex-row gap-2 font-orbitron w-full sm:w-auto">
          <button className="text-accent border-2 border-accent/50 px-6 sm:px-8 py-2 sm:py-1.5 
          text-xs sm:text-sm font-medium hover:scale-105 transition hover:bg-accent/10 
          hover:border-accent w-full sm:w-auto"
          onClick={() => setSelectedProject(project.id)}>
            DETAIL
          </button>

          <button className="text-primary border-2 border-primary/50 px-6 sm:px-8 py-2 sm:py-1.5 text-xs sm:text-sm font-medium hover:scale-105 transition hover:bg-primary/10 hover:border-primary w-full sm:w-auto">
            LIVE
          </button>
        </div>

        <FiGithub className="text-[18px] sm:text-[20px] text-primary hover:text-accent transition self-end sm:self-auto cursor-pointer" />
      </div>
    </div>
  );
};

export default ProjectCard;
