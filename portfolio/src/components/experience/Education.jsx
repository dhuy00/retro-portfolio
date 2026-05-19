import React from "react";
import { LuGraduationCap } from "react-icons/lu";

const Education = () => {
  return (
    <div className="w-full flex flex-col items-center px-4">
      {/* Title */}
      <h1 className="my-6 mt-12 text-center font-press-start text-accent text-sm sm:text-lg 
      md:text-xl">
        EDUCATION
      </h1>

      {/* Card */}
      <div className="w-full max-w-[800px] font-orbitron flex flex-col gap-4 text-muted-foreground 
      bg-card border-2 border-accent/50 px-5 py-6 sm:px-8 sm:py-8 md:px-12">
        {/* Header */}
        <div className="flex items-start sm:items-center gap-3">
          <LuGraduationCap className="text-3xl sm:text-4xl text-accent shrink-0" />

          <div className="flex flex-col gap-1">
            <h3 className="font-press-start text-xs sm:text-sm md:text-base text-white 
            leading-relaxed">
              Bachelor of Information Technology
            </h3>

            <span className="text-accent text-sm sm:text-base">
              University of Science
            </span>

            <span className="text-xs sm:text-sm">2021 - 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;