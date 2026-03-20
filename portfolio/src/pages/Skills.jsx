import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { FaBook } from "react-icons/fa";
import { RiTriangleFill } from "react-icons/ri";
import { LuCoffee } from "react-icons/lu";
import { MdOutlineWork } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { BsHammer } from "react-icons/bs";
import { FaTerminal } from "react-icons/fa6";
import { FiCpu } from "react-icons/fi";
import { IoCode } from "react-icons/io5";
import { BsHddStack } from "react-icons/bs";
import { FiDatabase } from "react-icons/fi";
import { HiOutlineBolt } from "react-icons/hi2";

const SkillCard = ({ id, icon: Icon, title, count, bg, active, handleSwitchTab }) => {
  return (
    <div className={`flex flex-col gap-2 py-6 w-[300px] pl-6 border-4 ${bg} hover:translate-x-2
    hover:translate-y-2 transition hover:shadow-hard ${active == id ? "translate-x-2 translate-y-2 shadow-hard" : ''}`}
    onClick={() => handleSwitchTab(id)}>
      <Icon className="text-[3rem]" />
      <span className="text-[1.6rem] font-semibold tracking-wide">{title}</span>
      <span className="text-sm">{count}</span>
    </div>
  );
};

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null)
  const skills = [
    {
      id: 1,
      icon: IoCode,
      title: "FRONTEND",
      count: "6 technologies",
      bg: "bg-blue-400",
    },
    {
      id: 2,
      icon: BsHddStack,
      title: "BACKEND",
      count: "6 technologies",
      bg: "bg-pink-400",
    },
    {
      id: 3,
      icon: FiDatabase,
      title: "DATABASE",
      count: "6 technologies",
      bg: "bg-yellow-300",
    },
    {
      id: 4,
      icon: HiOutlineBolt,
      title: "TOOLS",
      count: "6 technologies",
      bg: "bg-green-400",
    },
  ];

  const handleSwitch = (id) => {
    setActiveSkill(id)
  }

  return (
    <div className=" px-28 mt-12 flex flex-col font-space-mono relative">
      {/* Intro */}
      <div
        className="flex items-center gap-2 bg-pink-400 w-fit px-8 py-2 font-bold
      text-[2.5rem] border-4"
      >
        <FaTerminal className="w-10 h-10" />
        <span>TECH_STACK.json</span>
      </div>
      {/* Core Tech */}
      <div className="flex items-center gap-3 font-semibold text-[1.9rem] mt-4">
        <FiCpu className="text-[1.9rem]" />
        <span>CORE TECHNOLOGIES</span>
      </div>
      <div className="mt-4 flex justify-between">
        {skills.map((item, index) => (
          <SkillCard key={index} {...item} handleSwitchTab={handleSwitch} active={activeSkill}/>
        ))}
      </div>
      <div>
        <div className="flex flex-col gap-2 justify-between">
          <span className="border-2 bg-blue-400 px-4 py-2">LIBRARY</span>
          <span>REACT</span>
          <span className="h-2 w-full bg-black"></span>
          <span>UI component framework</span>
          <div className="flex gap-4">
            <span className="w-4 h-4 bg-green-400"></span>
            <span>ACTIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
