import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import Header from "./Header";
import { HiOutlineBolt } from "react-icons/hi2";
import Card from "./Card";
import { IoCode } from "react-icons/io5";
import { LuSparkles } from "react-icons/lu";


const Hero = () => {
  const cards = [
    {
      id: 1,
      name: "fullstack",
      icon: <IoCode/>,
      description: "Building end-to-end solutions with modern tech stacks",
      color: "#51A2FF"
    },
    {
      id: 2,
      name: "creative",
      icon: <LuSparkles/>,
      description: "Unique designs that stand out from the crowd",
      color: "#FB64B6"
    },
    {
      id: 1,
      name: "fullstack",
      icon: <HiOutlineBolt/>,
      description: "Fast, optimized, and scalable applications",
      color: "#05DF72"
    },
  ]

  return (
    <div className="mt-22 w-full h-[520px] flex justify-center items-center font-space-mono">
      <div className="w-[1000px] h-full">
        {/* Header */}
        <Header />
        {/* Body */}
        <div className="bg-white w-full h-full border-4 border-t-0 px-12 py-4">
          <div className="flex gap-1 items-center">
            <HiOutlineBolt className="text-[#F0B100]" />
            <span className="text-sm text-[#00A63E]">
              {'> System.log("Welcome"!)'}
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className="font-space-grotesk text-[5.5rem] font-black leading-none mt-6">
              HI, I'M A
            </h1>
            <h2
              className="text-[5.2rem] tracking-tighter 8xl font-black text-transparent
          leading-none mt-2 [word-spacing:-10px]"
              style={{
                WebkitTextStroke: "3px black",
              }}
            >
              FULLSTACK DEVELOPER
            </h2>
            <span className="w-[900px] h-[15px] bg-[#FFDF20] border border-[2px]"></span>
          </div>
          <div className="flex gap-4 mt-4">
            {cards.map((item) => (
              <Card card={item}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
