import React, { useState } from "react";
import { SiThestorygraph } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";
import Story from "../components/about/Story";
import { motion } from "motion/react";
import Interest from "../components/about/Interest";
import Values from "../components/about/Values";

const About = () => {
  const [activeTab, setIsActive] = useState(0);

  const category = [
    {
      id: 0,
      text: "MY STORY",
      icon: <SiThestorygraph />,
    },
    {
      id: 1,
      text: "INTERESTS",
      icon: <FaRegHeart />,
    },
    {
      id: 2,
      text: "VALUES",
      icon: <FaBullseye />,
    },
  ];

  const buttonStyle = `flex items-center gap-2 px-8 py-4 border-2 border-muted-foreground/30
    text-muted-foreground font-semibold`;

  return (
    <div className="w-screen relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0820] via-[#1a0f2e] to-[#0f0820]" />

      <div className="relative flex flex-col items-center gap-8">
        <h1 className="font-press-start text-[3rem] text-accent">
          ABOUT <span className="text-primary">ME</span>
        </h1>

        {/* Tabs */}
        <div className="flex gap-4 font-orbitron">
          {category.map((item) => (
            <button
              key={item.id}
              onClick={() => setIsActive(item.id)}
              className={`${buttonStyle} ${
                activeTab === item.id
                  ? "border-primary bg-primary/20 text-primary shadow-[0_0_20px_rgba(255,0,255,0.4)]"
                  : "hover:border-accent hover:text-accent transition hover:scale-105"
              }`}
            >
              {item.icon}
              <span>{item.text}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === 0 && <Story />}
          {activeTab === 1 && <Interest />}
          {activeTab === 2 && <Values />}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
