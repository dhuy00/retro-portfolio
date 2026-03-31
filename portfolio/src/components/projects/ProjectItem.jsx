import React from "react";
import { LuGithub } from "react-icons/lu";
import { FiExternalLink } from "react-icons/fi";

const ProjectItem = () => {
  return (
    <div className="relative">
      <div className="w-[370px] h-[395px] border-4 relative z-20 bg-white p-6">
        <div className="flex justify-between items-center">
          <span className="text-sm border-2 px-2 py-1 font-semibold bg-yellow-300">WEB APPS</span>
          <span className="text-sm font-semibold">2026</span>
        </div>
        <h2 className="text-2xl font-semibold my-4">TaskFlow</h2>
        <p className="text-gray-600 text-sm">Intelligent Project Management</p>
        <p className="text-sm mt-4">AI-powered project management platform with smart task prioritization, team collaboration tools, and real-time analytics dashboard.</p>
        <div className="flex space-x-2 space-y-1 text-[13px] flex-wrap mt-4">
          <span className="bg-gray-100 px-2 py-0.5 border-2">React</span>
          <span className="bg-gray-100 px-2 py-0.5 border-2">Typescript</span>
          <span className="bg-gray-100 px-2 py-0.5 border-2">Node.js</span>
          <span className="bg-gray-100 px-2 py-0.5 border-2">+2</span>
        </div>
        <div className="flex gap-4 mt-3">
          <button className="flex items-center gap-2 bg-black text-white w-[130px] h-[45px] justify-center">
            <LuGithub/>
            <span>Code</span>
          </button>
          <button className="flex items-center gap-2 bg-yellow-300 border-4 w-[130px] h-[45px] justify-center">
            <FiExternalLink />
            <span>Live</span>
          </button>
        </div>
      </div>
      <div className="w-[370px] h-[400px] border-4 absolute bg-yellow-300 z-10 top-6 left-3"></div>
    </div>
  );
};

export default ProjectItem;
