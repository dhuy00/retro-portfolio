import React, { useState } from "react";
import { SiThestorygraph } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";
import Story from "../components/about/Story";
import { motion } from "motion/react";
import Interest from "../components/about/Interest";
import Values from "../components/about/Values";
import Background from "../components/skills/Background";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { LuDatabase } from "react-icons/lu";
import { VscTools } from "react-icons/vsc";
import SkillCard from "../components/skills/SkillCard";

const TechStack = () => {
  const [activeTab, setIsActive] = useState(0);

  const tabs = [
    {
      id: 0,
      text: "ALL",
      icon: <HiOutlineLightningBolt />,
    },
    {
      id: 1,
      text: "FRONTEND",
      icon: <IoColorPaletteOutline />,
    },
    {
      id: 2,
      text: "BACKEND",
      icon: <LuDatabase />,
    },
    {
      id: 3,
      text: "TOOLS",
      icon: <VscTools />,
    },
  ];

  const skillList = [
    {
      id: 0,
      name: "React",
      category: '>_ FRONTEND'
    },
    {
      id: 1,
      name: "Typescript",
      category: '>_ FRONTEND'
    },
    {
      id: 2,
      name: "Next.JS",
      category: '>_ FRONTEND'
    },
    {
      id: 3,
      name: "Tailwind CSS",
      category: '>_ FRONTEND'
    },
    {
      id: 4,
      name: "NodeJS",
      category: '>_ BACKEND'
    },
    {
      id: 4,
      name: "NodeJS",
      category: '>_ BACKEND'
    },
    {
      id: 4,
      name: "NodeJS",
      category: '>_ BACKEND'
    },
    {
      id: 4,
      name: "NodeJS",
      category: '>_ BACKEND'
    },
  ]

  const buttonStyle = `flex items-center gap-2 px-8 py-4 border-2 
    font-semibold`;

  return (
    <div className="w-screen relative py-24">
      <Background />

      <div className="relative flex flex-col items-center">
        <h1 className="font-press-start text-[3rem] text-accent">
          TECH <span className="text-primary">STACK</span>
        </h1>
        <span className="font-orbitron text-muted-foreground">
          Tools and technologies I use to build my products
        </span>

        {/* Tabs */}
        <div className="flex gap-4 font-orbitron mt-12">
          {tabs.map((item) => (
            <button
              key={item.id}
              onClick={() => setIsActive(item.id)}
              className={`${buttonStyle} ${
                activeTab === item.id
                  ? "border-accent bg-accent/20 text-accent shadow-[0_0_20px_rgba(0,255,255,0.4)] "
                  : "hover:border-primary transition hover:scale-105 text-muted-foreground"
              }`}
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </div>

        {/* Skill list */}
        <div className="w-[1200px] flex justify-center mt-12">
          <div className="grid grid-cols-4 gap-4 flex-wrap">
            {
              skillList.map((item) => (
                <SkillCard category={item.category} text={item.name}/>
              )) 
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
