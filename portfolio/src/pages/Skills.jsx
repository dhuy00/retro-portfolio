import React, { useEffect, useState } from "react";
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
import Certification from "../components/skills/Certification";

const SkillOption = ({ item, isActive, handleClick }) => {
  return (
    <>
      <div
        className={`px-4 py-4 border-[4px] flex flex-col gap-2 shadow-md
          hover:translate-x-1 hover:translate-y-1 transition ${
            isActive(item.id)
              ? `${item.bg} shadow-none
          translate-x-2 translate-y-1 pointer-events-none`
              : "bg-white"
          }`}
        onClick={() => handleClick(item.id)}
      >
        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg tracking-wide">
            {item.name.toUpperCase()}
          </span>
          <FaArrowRight />
        </div>
        <span className="text-[12px] font-semibold text-gray-700">
          {item.technologies} technologies
        </span>
      </div>
    </>
  );
};

const skillCategory = [
  {
    id: 1,
    name: "frontend",
    bg: "bg-blue-400",
    skills: ["React", "Tailwind", "JavaScript", "HTML/CSS"],
  },
  {
    id: 2,
    name: "backend",
    bg: "bg-green-400",
    skills: ["Node.js", "Express", "ASP.NET", "REST API"],
  },
  {
    id: 3,
    name: "database",
    bg: "bg-pink-400",
    skills: ["MySQL", "SQL Server", "MongoDB", "Redis"],
  },
  {
    id: 4,
    name: "devops",
    bg: "bg-indigo-400",
    skills: ["Docker", "CI/CD", "Nginx", "GitHub Actions"],
  },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const currentCategory = skillCategory.find((item) => item.id === activeSkill);

  useEffect(() => {
    setActiveSkill(1);
  }, []);

  const isActive = (id) => {
    return id == activeSkill;
  };

  const switchSkill = (id) => {
    setActiveSkill(id);
    console.log("Switch skill");
  };

  useEffect(() => {
    console.log("Current skill: ", activeSkill);
  }, [activeSkill]);

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
      <div className="flex items-center gap-3 text-lg font-medium border-l-4 my-4 py-3 px-6">
        <span>A comprehensive overview of my <span className="bg-blue-400 px-2 py-1 border-3">development toolkit</span></span>
      </div>
      <div className="w-full h-[495px] flex gap-10 ">
        <div className="w-2/6 h-full ">
          <div
            className="bg-black text-white flex items-center gap-2 font-mono font-semibold text-[14px]
          py-2.5 px-4"
          >
            <FaTerminal />
            <span>SELECT_CATEGORY</span>
          </div>
          <div className="mt-3 flex flex-col gap-5">
            {skillCategory.map((item) => (
              <SkillOption
                item={item}
                isActive={isActive}
                handleClick={switchSkill}
              />
            ))}
          </div>
        </div>
        <div
          className={`w-4/6 h-full border-4 px-6 pt-6 font-mono flex flex-col ${
            currentCategory?.bg || "bg-blue-400"
          }`}
        >
          <div className=" text-black flex justify-between items-center">
            <span className="text-[1.9rem] font-semibold">
              {currentCategory?.name.toUpperCase()}
            </span>
            <span className="bg-white border-2 px-3 font-semibold py-1 text-sm">
              {currentCategory?.skills.length} items
            </span>
          </div>

          <span className="w-full h-[3px] mt-2 bg-black"></span>

          <div className="flex flex-col gap-5 mt-6">
            {currentCategory?.skills.map((skill, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-white shadow-hard border-4 py-4 px-4
                hover:translate-x-1 hover:translate-y-1 transition"
              >
                <div className="flex items-center gap-6">
                  <span className="bg-black text-white px-4 py-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[20px] font-semibold">{skill}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-3 border-2 h-3 bg-green-500"></span>
                  <span className="text-[13px] font-semibold">READY</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Certification/>
    </div>
  );
};

export default Skills;
