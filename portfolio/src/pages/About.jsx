import React from "react";
import { FiUser } from "react-icons/fi";
import { FaBook } from "react-icons/fa";
import { RiTriangleFill } from "react-icons/ri";
import { LuCoffee } from "react-icons/lu";
import { MdOutlineWork } from "react-icons/md";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { BsHammer } from "react-icons/bs";

const About = () => {
  return (
    <div className=" px-28 mt-12 flex flex-col font-space-mono relative">
      {/* Colorful Grid */}
      <div className="grid grid-cols-8 gap-2 absolute top-6 right-16 opacity-20">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className={`w-8 h-8 border-2 border-black ${
              i % 3 === 0
                ? "bg-yellow-300"
                : i % 3 === 1
                  ? "bg-pink-400"
                  : "bg-blue-400"
            }`}
          />
        ))}
      </div>
      {/* Intro */}
      <div
        className="flex items-center gap-2 bg-yellow-300 w-fit px-8 py-2 font-bold
      text-[2.5rem] border-4"
      >
        <FiUser />
        <span>ABOUT_ME.md</span>
      </div>
      <div className="bg-white w-[750px] border-l-8 pl-4 text-[1.4rem] py-6 leading-[40px] mt-4">
        Hi! I'm a{" "}
        <span className="bg-pink-400 px-2 border-2">full-stack developer</span>
        &nbsp; who loves
        <br /> building{" "}
        <span className="bg-blue-400 px-2 border-2">creative solutions</span> to
        complex problems with a focus on &nbsp;
        <span className="px-2 bg-green-400 border-2">user experience</span>.
      </div>

      {/* Story */}
      <div className="mt-10 flex gap-6">
        <div className="flex flex-col w-1/2 gap-6 h-[280px]">
          <div className="bg-blue-400 py-7 px-6 border-4 h-full">
            <h2 className="text-2xl font-bold mb-4">THE JOURNEY</h2>
            <p>
              My coding journey started in 2018 when I built my first website.
              What began as a hobby quickly turned into a passion, and
              eventually, a career. <br /> <br /> I've had the privilege of
              working with startups, agencies, and enterprises, building
              everything from e-commerce platforms to SaaS applications
            </p>
          </div>
        </div>
        <div className="flex flex-col w-1/2 gap-6 h-[280px]">
          <div className="bg-green-400 py-7 px-6 border-4 h-full">
            <h2 className="text-2xl font-bold mb-4">WHAT I DO</h2>
            <div className="flex flex-col gap-3">
              <div className="bg-white flex flex-col gap-1 px-3 py-3 border-3">
                <span className="font-bold">Frontend development</span>
                <span>React, Typescript, Tailwind</span>
              </div>
              <div className="bg-white flex flex-col gap-1 px-3 py-3 border-3">
                <span className="font-bold">Backend development</span>
                <span>React, Typescript, Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
