import React from "react";
import AnimatedGrid from "../components/hero/AnimatedGrid";
import ScanlineEffect from "../components/hero/ScanlineEffect";
import { GrTopCorner } from "react-icons/gr";
import { MdOutlineFileDownload } from "react-icons/md";
import ArcadeMachine from "../components/hero/ArcadeMachine";
import Particles from "../components/hero/Particles";
import GlitchText from "../components/common/GlitchText";
import CatScroll from "../components/hero/CatScroll";
import { motion } from "motion/react";

const Hero = () => {
  const description =
    "Crafting elegant solutions to complex problems. Specializing in React, TypeScript, and modern web technologies.";
  return (
    <div className="mt-14 h-[640px] w-full relative flex items-center font-orbitron">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f2e] via-[#2d1b4e] to-[#0f0820]" />
      <AnimatedGrid />
      <ScanlineEffect />
      {/* Corner */}
      <div className="absolute top-8 left-12 w-12 h-12 border-l-4 border-t-4 border-primary opacity-50" />
      <div className="absolute bottom-8 right-12 w-12 h-12 border-r-4 border-b-4 border-accent opacity-50" />

      {/* Main content */}
      <div className="relative mx-48 flex flex-col leading-none">
        <span
          className="text-accent border px-5 py-2 border-accent text-sm font-semibold bg-accent/10
        w-fit"
        >
          HI! IT'S DUC HUY
        </span>
        <GlitchText className="font-press-start text-[2.5rem] mt-8">
          I'M A <span className="text-primary">FULLSTACK</span>
        </GlitchText>
        <GlitchText className="font-press-start text-[4rem] text-accent mt-4">
          DEVELOPER
        </GlitchText>
        <p className="max-w-[450px] text-muted-foreground text-[16px] leading-relaxed mt-8">
          {description}
        </p>
        <div className="flex gap-4 mt-8">
          <button
            className="text-primary-foreground bg-primary border-2 border-primary 
          shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] 
          transition px-8 py-2 hover:scale-105"
          >
            HIRE ME
          </button>
          <button
            className="flex items-center text-accent gap-1 border-2 border-accent px-8 py-2
          hover:bg-accent/10 transition hover:scale-105"
          >
            <MdOutlineFileDownload className="text-2xl" />
            <span>RESUME</span>
          </button>
        </div>
      </div>

      <Particles />

      {/* Arcade Machine */}
      <div className="absolute right-32 top-[22%] ">
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 blur-3xl" />
        <div className="relative w-[550px]">
          <ArcadeMachine />
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-0 right-0 flex items-center justify-center
        flex-col"
      >
        <CatScroll />
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-accent text-xs font-press-start"
        >
          SCROLL
        </motion.span>
      </motion.div>
    </div>
  );
};

export default Hero;
