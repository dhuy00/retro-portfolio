import React from "react";
import { FiUser } from "react-icons/fi";
import { FaBook } from "react-icons/fa";
import { RiTriangleFill } from "react-icons/ri";
import { LuCoffee } from "react-icons/lu";
import { MdOutlineWork } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { BsHammer } from "react-icons/bs";
import { FaTerminal } from "react-icons/fa6";

const Skills = () => {
  return (
    <div className=" px-28 mt-12 flex flex-col font-space-mono relative">
      {/* Intro */}
      <div
        className="flex items-center gap-2 bg-pink-400 w-fit px-8 py-2 font-bold
      text-[2.5rem] border-4"
      >
            <FaTerminal className="w-10 h-10" />
        <span>TECK_STACK.json</span>
      </div>

    </div>
  );
};

export default Skills;
