import React from "react";
import { FaSuitcase } from "react-icons/fa";

const ExperienceCard = () => {
  const experiences = {
    id: 0,
    company: "TechCorp Inc",
    role: "Senior Full-Stack Engineer",
    time: "2022 - Present",
    detail: [
      "Led development of real-time analytics platform serving 100K+ users",
      "Reduced API response time by 60% through optimization",
      "Mentored 5 junior developers and established code review practices",
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
  };
  return (
    <div className="">
      <div className="bg-card border-2 border-primary/50 p-6 flex flex-col w-[48%]">
            <span className="absolute w-4 h-4 bg-primary right-1/2 translate-x-1/2"></span>
        <div className="flex flex-col gap-2">
          <div className="flex items-center font-press-start gap-6 text-[13px]">
            {experiences.role}
          </div>
          <span className="font-orbitron text-accent font-medium">
            {experiences.company}
          </span>
          <span className="font-orbitron text-sm text-muted-foreground">
            {experiences.time}
          </span>
        </div>
        <div className="flex flex-col font-orbitron gap-4 mt-8 text-muted-foreground">
          {
            experiences.detail.map((item) => (
              <div className="flex items-start gap-4">
                <span className="w-2 h-2 bg-primary mt-2"></span>
                <span>{item}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
