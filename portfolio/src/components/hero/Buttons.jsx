import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";

const Buttons = () => {
  return (
    <div className="flex-1 flex mt-5 mb-2 font-bold justify-between items-center">
      <div className="flex gap-4 items-center">
        <button
          className="bg-[#FFDF20] px-8 py-3.5 h-fit flex items-center gap-2 border-4 shadow-hard
        hover:shadow-none transition hover:translate-x-1 hover:translate-y-1"
        >
          <span>VIEW MY WORK</span>
          <FaArrowRight />
        </button>
        <button
          className="px-8 py-3.5 h-fit flex items-center gap-2 border-4 shadow-hard
        hover:shadow-none transition hover:translate-x-1 hover:translate-y-1"
        >
          GET IN TOUCH
        </button>
      </div>
      <div className="flex gap-2 text-[1.6rem]">
        <button className="border-4 leading-none h-10 w-10 flex justify-center items-center bg-black text-white border-black">
          <FiGithub className="leading-none"/>
        </button>
        <button className="border-4 leading-none h-10 w-10 flex justify-center items-center bg-[#155DFC] text-white border-black">
          <FiLinkedin/>
        </button>
        <button className="border-4 leading-none h-10 w-10 flex justify-center items-center bg-[#FB64B6] border-black">
          <MdMailOutline/>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
