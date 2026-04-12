import React from "react";
import AnimatedGrid from "../components/hero/AnimatedGrid";
import ScanlineEffect from "../components/hero/ScanlineEffect";
import { GrTopCorner } from "react-icons/gr";
import { MdOutlineFileDownload } from "react-icons/md";
import ArcadeMachine from "../components/hero/ArcadeMachine";
import Particles from "../components/hero/Particles";
import GlitchText from "../components/common/GlitchText";

const Hero = () => {
  const description =
    "Crafting elegant solutions to complex problems. Specializing in React, TypeScript, and modern web technologies.";
  return (
    <div className="mt-14 h-[640px] w-full relative flex items-center font-orbitron">
      {/* Background Gradient */}
      <div className="z-0 absolute inset-0 bg-gradient-to-br from-[#1a0f2e] via-[#2d1b4e] to-[#0a0118]" />
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
      <div className="absolute right-32 top-[22%] w-[550px]">
        <ArcadeMachine />
      </div>
    </div>
  );
};

export default Hero;
