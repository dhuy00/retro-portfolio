import React, { useMemo, useState } from "react";
import { motion } from "motion/react";

import { HiOutlineLightningBolt } from "react-icons/hi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LuDatabase } from "react-icons/lu";
import { VscTools } from "react-icons/vsc";

import Background from "../components/skills/Background";
import SkillCard from "../components/skills/SkillCard";
import Certification from "../components/skills/Certification";
import SoftSkill from "../components/skills/SoftSkill";
import Currently from "../components/skills/Currently";
import { HiServer } from "react-icons/hi";


const TechStack = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      text: "ALL",
      icon: <HiOutlineLightningBolt />,
      category: "ALL",
    },
    {
      id: 1,
      text: "FRONTEND",
      icon: <IoColorPaletteOutline />,
      category: "FRONTEND",
    },
    {
      id: 2,
      text: "BACKEND",
      icon: <HiServer />,
      category: "BACKEND",
    },
    {
      id: 3,
      text: "DATABASE",
      icon: <LuDatabase />,
      category: "DATABASE",
    },
    {
      id: 4,
      text: "TOOLS",
      icon: <VscTools />,
      category: "TOOLS",
    },
  ];

  const skillList = [
    {
      id: 0,
      name: "React",
      category: "FRONTEND",
    },
    {
      id: 1,
      name: "TypeScript",
      category: "FRONTEND",
    },
    {
      id: 2,
      name: "Vue.js",
      category: "FRONTEND",
    },
    {
      id: 3,
      name: "Tailwind CSS",
      category: "FRONTEND",
    },
    {
      id: 4,
      name: "Node.js",
      category: "BACKEND",
    },
    {
      id: 5,
      name: "Express.js",
      category: "BACKEND",
    },
    {
      id: 6,
      name: "MongoDB",
      category: "DATABASE",
    },
    {
      id: 7,
      name: "Git",
      category: "TOOLS",
    },
    {
      id: 8,
      name: "Docker",
      category: "TOOLS",
    },
    {
      id: 9,
      name: "Figma",
      category: "TOOLS",
    },
    {
      id: 10,
      name: "MySQL",
      category: "DATABASE",
    },
    {
      id: 11,
      name: "Oracle",
      category: "ORACLE",
    },
  ];

  const activeCategory =
    tabs.find((tab) => tab.id === activeTab)?.category || "ALL";

  const filteredSkills = useMemo(() => {
    if (activeCategory === "ALL") return skillList;

    return skillList.filter(
      (skill) => skill.category === activeCategory
    );
  }, [activeCategory]);

  const buttonStyle = `
    flex items-center gap-2 px-8 py-4 border-2 font-semibold cursor-pointer
  `;

  return (
    <div className="w-screen relative py-24" id="skills">
      <Background />

      <div className="relative flex flex-col items-center">
        <h1 className="font-press-start text-[3rem] text-accent">
          TECH <span className="text-primary">STACK</span>
        </h1>

        <span className="font-orbitron text-muted-foreground">
          Tools and technologies I use to build my products
        </span>

        {/* Tabs */}
        <div className="grid grid-cols-2 md:flex gap-3 md:gap-4 font-orbitron mt-8 md:mt-12">
          {tabs.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`
                ${buttonStyle}
                flex-1 sm:flex-none
                min-w-[140px]
                justify-center
                px-4 py-3
                text-sm md:text-base
                ${
                  activeTab === item.id
                    ? "border-accent bg-accent/20 text-accent shadow-[0_0_20px_rgba(0,255,255,0.4)]"
                    : "hover:border-primary transition hover:scale-105 text-muted-foreground"
                }
              `}
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </div>

        {/* Skills */}
        <div className="w-full max-w-[1100px] flex justify-center mt-12 px-4">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full"
          >
            {filteredSkills.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <SkillCard
                  category={`>_ ${item.category}`}
                  text={item.name}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="w-full max-w-[1100px] flex flex-col lg:flex-row mt-12 gap-6 px-4">
          <Certification />
          <SoftSkill />
        </div>

        <Currently />
      </div>
    </div>
  );
};

export default TechStack;