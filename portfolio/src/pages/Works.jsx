import React, { useState } from "react";
import { SiThestorygraph } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";
import Story from "../components/about/Story";
import { motion } from "motion/react";
import Interest from "../components/about/Interest";
import Values from "../components/about/Values";
import ProjectCard from "../components/works/ProjectCard";

const Works = () => {
  const [activeTab, setIsActive] = useState(0);

  const tabs = [
    {
      id: 0,
      text: "ALL",
    },
    {
      id: 1,
      text: "WEB",
    },
    {
      id: 2,
      text: "MOBILE",
    },
    {
      id: 3,
      text: "OPEN SOURCE",
    },
  ];

  const buttonStyle = `flex items-center gap-2 px-6 py-2 border-2 border-muted-foreground/30
    text-muted-foreground font-semibold`;

  return (
    <div className="w-screen relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0820] via-[#1a0f2e] to-[#0f0820]" />

      <div className="relative flex flex-col items-center">
        <h1 className="font-press-start text-[3rem] text-accent">
          MY <span className="text-primary">WORK</span>
        </h1>
        <span className="font-orbitron text-muted-foreground">
          Featured projects that showcase my expertise
        </span>

        {/* Tabs */}
        <div className="flex gap-4 font-orbitron mt-12">
          {tabs.map((item) => (
            <button
              key={item.id}
              onClick={() => setIsActive(item.id)}
              className={`${buttonStyle} ${
                activeTab === item.id
                  ? "border-primary bg-primary/20 text-primary shadow-[0_0_20px_rgba(255,0,255,0.4)] "
                  : "hover:border-accent hover:text-accent transition hover:scale-105 text-muted-foreground"
              }`}
            >
              <span>{item.text}</span>
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid grid-cols-2 gap-4 mt-12">
          {[1, 2, 3, 4, 5].map((item) => (
            <ProjectCard/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
