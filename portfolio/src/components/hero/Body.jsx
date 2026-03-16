import React from "react";
import { HiOutlineBolt } from "react-icons/hi2";
import Card from "./Card";
import { IoCode } from "react-icons/io5";
import { LuSparkles } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa6";
import Buttons from "./Buttons";

const Body = () => {
  const cards = [
    {
      id: 1,
      name: "fullstack",
      icon: <IoCode />,
      description: "Building web applications from frontend to backend.",
      color: "#51A2FF",
    },
    {
      id: 2,
      name: "creative",
      icon: <LuSparkles />,
      description: "Unique designs that stand out from the crowd",
      color: "#FB64B6",
    },
    {
      id: 1,
      name: "performance",
      icon: <HiOutlineBolt />,
      description: "Fast, optimized, and scalable applications",
      color: "#05DF72",
    },
  ];

  return (
    <div className="bg-white w-full h-full border-4 border-t-0 px-12 py-4 flex flex-col">
      <div className="flex gap-1 items-center">
        <HiOutlineBolt className="text-[#F0B100]" />
        <span className="text-sm text-[#00A63E]">
          {'> System.log("Welcome"!)'}
        </span>
      </div>
      <div className="flex flex-col">
        <h1 className="font-space-grotesk text-[5.5rem] font-black leading-none mt-6">
          HI, I'M DUCHUY
        </h1>
        <h2
          className="text-[5.2rem] tracking-tight 8xl font-black text-transparent
          leading-none mt-2 [word-spacing:-10px]"
          style={{
            WebkitTextStroke: "3px black",
          }}
        >
          A WEB DEVELOPER
        </h2>
        <span className="w-[850px] h-[15px] bg-[#FFDF20] border border-[2px]"></span>
      </div>
      <div className="flex gap-4 mt-4">
        {cards.map((item) => (
          <Card card={item} />
        ))}
      </div>
      <Buttons/>
    </div>
  );
};

export default Body;
