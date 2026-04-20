import React from "react";
import { FiGithub } from "react-icons/fi";


const ProjectCard = () => {
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
    <div className="w-[550px] bg-card border-primary/50 border-2 p-6 flex flex-col gap-4 hover:border-accent
    transition hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] ">
      <div className="font-press-start">E-Commerce Platform</div>
      <span className="text-muted-foreground font-orbitron">
        Full-stack e-commerce solution with real-time inventory management
      </span>
      <div className="flex gap-4 flex-wrap">
        {techstack.map((item) => (
          <span className="font-orbitron border text-accent border-accent/50 font-medium px-2 py-1 text-sm">
            {item.name}
          </span>
        ))}
      </div>
      {/* divider */}
      <span className="h-[2px] w-full bg-primary/50"></span>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 font-orbitron">
          <button className="text-accent border-2 border-accent/50 px-8 py-1.5 text-sm font-medium
          hover:scale-105 transition hover:bg-accent/10 hover:border-accent">
            DETAIL
          </button>
          <button className="text-primary border-2 border-primary/50 px-8 py-1.5 text-sm font-medium
          hover:scale-105 transition hover:bg-primary/10 hover:border-primary">
            LIVE
          </button>
        </div>
          <FiGithub className="text-[20px] text-primary hover:text-accent transition" />
      </div>
    </div>
  );
};

export default ProjectCard;
