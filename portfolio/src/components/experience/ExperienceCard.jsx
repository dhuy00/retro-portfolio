import React from "react";

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
    <div className="relative flex justify-center md:justify-start w-full">
      <span className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 bg-primary z-10" />

      <div className="w-full md:w-[48%] bg-card border-2 border-primary/50 hover:border-primary transition-all duration-300 p-5 sm:p-6">
        <div className="flex flex-col gap-2">
          <div className="font-press-start text-[11px] sm:text-[13px] leading-relaxed text-white">
            {experiences.role}
          </div>

          <span className="font-orbitron text-accent font-medium text-sm sm:text-base">
            {experiences.company}
          </span>

          <span className="font-orbitron text-xs sm:text-sm text-muted-foreground">
            {experiences.time}
          </span>
        </div>

        <div className="flex flex-col font-orbitron gap-4 mt-6 text-muted-foreground">
          {experiences.detail.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></span>

              <span className="text-sm sm:text-base leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {experiences.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs sm:text-sm border border-primary/40 bg-primary/10 text-primary font-orbitron"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;