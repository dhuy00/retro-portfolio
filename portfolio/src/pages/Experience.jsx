import React, { useState } from "react";
import { SiThestorygraph } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";
import Story from "../components/about/Story";
import { motion } from "motion/react";
import Interest from "../components/about/Interest";
import Values from "../components/about/Values";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  const [activeTab, setIsActive] = useState(0);

  const category = [
    {
      id: 0,
      text: "MY STORY",
      icon: <SiThestorygraph />,
    },
    {
      id: 1,
      text: "INTERESTS",
      icon: <FaRegHeart />,
    },
    {
      id: 2,
      text: "VALUES",
      icon: <FaBullseye />,
    },
  ];

  const buttonStyle = `flex items-center gap-2 px-8 py-4 border-2 border-muted-foreground/30
    text-muted-foreground font-semibold`;

  return (
    <div className="w-screen relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0820] via-[#1a0f2e] to-[#0f0820]" />

      <div className="relative flex flex-col items-center gap-8">
        <h1 className="font-press-start text-[3rem] text-accent">
          <span className="text-primary">EXPERIENCE</span>
        </h1>
        <div className="w-[1300px] relative">
          <span className="absolute bg-gradient-to-b from-primary via-accent to-primary w-[2px] 
          h-[350px] left-1/2"></span>
          <ExperienceCard/>
        </div>
      </div>
    </div>
  );
};

export default Experience;
