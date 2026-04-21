import React from "react";
import { LuGraduationCap } from "react-icons/lu";

const Education = () => {
  return (
    <div className="">
      <h1 className="my-6 text-center mt-12 font-press-start text-accent text-[18px]">EDUCATION</h1>
      <div className="font-orbitron flex flex-col gap-2 text-muted-foreground bg-card border-accent/50
       border-2 px-12 py-8 w-[800px]">
        <div className="flex items-center gap-2 font-press-start">
          <LuGraduationCap className="text-[2rem] text-accent" />
          <h3 className="text-sm text-white">B.S. Computer Science</h3>
        </div>
        <span className="text-accent">University of Science</span>
        <span className="text-sm">2021 - 2025</span>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <span className="w-1.25 h-2 bg-accent"></span>
            <span>Graduated with Honors (3.8 GPA)</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-1.25 h-2 bg-accent"></span>
            <span>Graduated with Honors (3.8 GPA)</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-1.25 h-2 bg-accent"></span>
            <span>Graduated with Honors (3.8 GPA)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
