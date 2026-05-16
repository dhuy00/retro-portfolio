import React from "react";
import ExperienceCard from "../components/experience/ExperienceCard";
import Education from "../components/experience/Education";

const Experience = () => {
  return (
    <div className="w-full relative py-16 md:py-24 overflow-hidden" id="experience">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0820] via-[#1a0f2e] to-[#0f0820]" />

      <div className="relative flex flex-col items-center gap-10 px-4">
        <h1 className="font-press-start text-2xl sm:text-4xl md:text-5xl text-accent text-center">
          <span className="text-primary">EXPERIENCE</span>
        </h1>

        <div className="w-full max-w-7xl relative">
          <span className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="flex flex-col gap-10">
            <ExperienceCard />
          </div>
        </div>

        <Education />
      </div>
    </div>
  );
};

export default Experience;