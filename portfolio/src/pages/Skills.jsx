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
import { FaArrowRight } from "react-icons/fa6";

const SkillOption = () => {
  return (
    <>
      <div
        className="px-4 py-5 bg-white border-[4px] flex flex-col gap-2 shadow-md
          hover:translate-x-1 hover:translate-y-1 transition"
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg tracking-wide">FRONTEND</span>
          <FaArrowRight />
        </div>
        <span className="text-[12px] font-semibold text-gray-700">
          4 technologies
        </span>
      </div>
    </>
  );
};

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const handleSwitch = (id) => {
    setActiveSkill(id);
  };

  const skillCategory = [
    {
      id: 1, 
      name: "frontend",
      technologies: 4,
    },
    {
      id: 2, 
      name: "backend",
      technologies: 4,
    },
    {
      id: 1, 
      name: "database",
      technologies: 4,
    },
    {
      id: 1, 
      name: "devops",
      technologies: 4,
    },
  ]

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
      <div className="w-full h-[300px] ">
        <div className="w-2/6 h-full ">
          <div
            className="bg-black text-white flex items-center gap-2 font-mono font-semibold text-[14px]
          py-2.5 px-4"
          >
            <FaTerminal />
            <span>SELECT_CATEGORY</span>
          </div>
          <div className="mt-3 flex flex-col gap-5">
            {
              skillCategory.map((item) => (
                <SkillOption/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
