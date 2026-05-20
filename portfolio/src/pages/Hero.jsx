import React from "react";
import AnimatedGrid from "../components/hero/AnimatedGrid";
import ScanlineEffect from "../components/hero/ScanlineEffect";
import { MdOutlineFileDownload } from "react-icons/md";
import Particles from "../components/hero/Particles";
import GlitchText from "../components/common/GlitchText";
import CatScroll from "../components/hero/CatScroll";
import { motion } from "motion/react";
import { HolographicCodeDisplay } from "../components/hero/HolographicCodeDisplay";

const Hero = () => {
  const description =
    "Building modern web applications while continuously learning and improving my skills in React, TypeScript, and full-stack development.";

  return (
    <section
      id="home"
      className="relative overflow-hidden font-orbitron min-h-screen flex items-center px-6 sm:px-10 lg:px-16 xl:px-24 pt-24 pb-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f2e] via-[#2d1b4e] to-[#0f0820]" />

      <AnimatedGrid />
      <ScanlineEffect />
      <Particles />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block text-accent border border-accent bg-accent/10 px-4 py-2 text-xs sm:text-sm font-semibold">
            HI! IT'S DUC HUY
          </span>

          <div className="mt-8 leading-none">
            <GlitchText className="font-press-start text-[1.6rem] sm:text-[2.2rem] lg:text-[2.8rem]">
              I'M A <span className="text-primary pt-2">FULLSTACK</span>
            </GlitchText>

            <GlitchText className="font-press-start text-accent mt-4 text-[2.4rem] sm:text-[3.5rem] lg:text-[4.5rem]">
              DEVELOPER
            </GlitchText>
          </div>

          <p className="mt-8 text-muted-foreground leading-relaxed text-sm sm:text-base max-w-[500px] mx-auto lg:mx-0">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <a
              href="/cv.pdf"
              download
              className="flex items-center justify-center text-accent gap-2 border-2 border-accent px-8 py-3 hover:bg-accent/10 transition hover:scale-105 text-sm sm:text-base cursor-pointer"
            >
              <MdOutlineFileDownload className="text-xl sm:text-2xl" />
              <span>RESUME</span>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 flex items-center justify-center w-full scale-90 sm:scale-100 lg:scale-110"
        >
          <HolographicCodeDisplay />
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <CatScroll />

        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-accent text-[10px] sm:text-xs font-press-start mt-1"
        >
          SCROLL
        </motion.span>
      </motion.div>
    </section>
  );
};

export default Hero;
