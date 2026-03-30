import React from "react";
import { FaRegFolder } from "react-icons/fa";
import { PiMedal } from "react-icons/pi";
import ProjectItem from "../components/projects/ProjectItem";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: "Taskflow",
      category: "Web Apps",
      year: 2026,
      subtitle: "Intelligent Project Management",
      description: "AI-powered project management platform with smart task prioritization, team collaboration tools, and real-time analytics dashboard.",
      teckStack: ["React", "Typescript", "Node.js", "Redis"]
    },
    {
      id: 2,
      title: "Taskflow",
      category: "Web Apps",
      year: 2026,
      subtitle: "Intelligent Project Management",
      description: "AI-powered project management platform with smart task prioritization, team collaboration tools, and real-time analytics dashboard.",
      teckStack: ["React", "Typescript", "Node.js", "Redis"]
    },
    {
      id: 3,
      title: "Taskflow",
      category: "Web Apps",
      year: 2026,
      subtitle: "Intelligent Project Management",
      description: "AI-powered project management platform with smart task prioritization, team collaboration tools, and real-time analytics dashboard.",
      teckStack: ["React", "Typescript", "Node.js", "Redis"]
    },
    {
      id: 4,
      title: "Taskflow",
      category: "Web Apps",
      year: 2026,
      subtitle: "Intelligent Project Management",
      description: "AI-powered project management platform with smart task prioritization, team collaboration tools, and real-time analytics dashboard.",
      teckStack: ["React", "Typescript", "Node.js", "Redis"]
    },
  ]
  return (
    <div className=" px-28 mt-4 flex flex-col font-space-mono relative">
      {/* Intro */}
      <div
        className="flex items-center gap-2 bg-blue-400 w-fit px-8 py-2 font-bold
          text-[2.5rem] border-4"
      >
        <FaRegFolder />
        <span>PROJECTS.dir</span>
      </div>
      <div className="bg-white w-[850px] border-l-8 pl-6 text-[1.2rem] py-2 leading-[35px] mt-4">
        A collection of projects I've built, ranging from{" "}
        <span className="bg-yellow-300 px-2 border-2">
          full-stack applications
        </span>
        &nbsp;to&nbsp;
        <span className="bg-pink-400 px-2 border-2">
          open-source tools.
        </span>{" "}
        Each one taught me something new!
      </div>
      <div className="flex items-center gap-4 text-[1.8rem] font-mono-space mt-4">
        <PiMedal className="text-[2.2rem]" />
        <span className="font-semibold">FEATURED WORK</span>
      </div>
      <div className="flex flex-wrap">
        {
          projectList.map((item) => {
            <ProjectItem/>
          })
        }
      </div>
    </div>
  );
};

export default Projects;
