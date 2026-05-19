import React from "react";
import { FaBook } from "react-icons/fa6";

const SoftSkill = () => {
  const softSkills = [
    {
      id: 0,
      name: "Problem Solving",
    },
    {
      id: 1,
      name: "Communication",
    },
    {
      id: 2,
      name: "Adaptability",
    },
    {
      id: 3,
      name: "Team Collaboration",
    },
    {
      id: 4,
      name: "Continuous Learning",
    },
  ];

  return (
    <div className="w-full lg:w-1/2 bg-card border-2 border-accent/50 rounded-lg p-5 sm:p-6 md:p-8">
      <div className="flex items-center gap-2 font-press-start">
        <FaBook className="text-base sm:text-lg text-accent" />

        <span className="text-[12px] sm:text-[14px] text-accent">
          SOFT SKILLS
        </span>
      </div>

      <div className="flex flex-wrap gap-3 sm:gap-4 mt-5">
        {softSkills.map((item) => (
          <div
            key={item.id}
            className="border-2 border-accent/50 px-3 sm:px-4 py-2 sm:py-2.5 font-orbitron text-[11px] sm:text-[12px] text-foreground hover:border-accent hover:bg-accent/10 transition-all duration-300 break-words"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SoftSkill;
