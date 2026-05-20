import { motion } from "motion/react";
import { FaCode, FaBolt, FaTrophy, FaUsers } from "react-icons/fa";
import avatar from '../assets/avatar.jpg'

const About = () => {
  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        py-20 sm:py-24
        px-6 sm:px-10 lg:px-16 xl:px-24
      "
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0820] via-[#1a0f2e] to-[#0f0820]" />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <h2
            className="
              leading-tight
              text-[2rem]
              sm:text-4xl
              lg:text-5xl
            "
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            <span className="text-accent">ABOUT</span>{" "}
            <span className="text-primary">ME</span>
          </h2>
        </motion.div>

        {/* Content */}
        <div
          className="
            flex flex-col lg:flex-row
            items-center
            gap-16 lg:gap-24
          "
        >
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center w-full lg:w-auto"
          >
            {/* Retro frame */}
            <div
              className="
                relative
                w-[280px]
                sm:w-[340px]
                md:w-[300px]
              "
            >
              {/* Corners */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 border-t-4 border-l-4 border-primary animate-pulse" />
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 border-t-4 border-r-4 border-accent animate-pulse" />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 border-b-4 border-l-4 border-accent animate-pulse" />
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 border-b-4 border-r-4 border-primary animate-pulse" />

              {/* Side Bars */}
              <div className="hidden sm:block absolute -left-6 top-1/4 w-2 h-1/2 bg-gradient-to-b from-primary via-accent to-primary opacity-70" />
              <div className="hidden sm:block absolute -right-6 top-1/4 w-2 h-1/2 bg-gradient-to-b from-accent via-primary to-accent opacity-70" />

              {/* Main Frame */}
              <div
                className="
                  relative overflow-hidden
                  border-4 border-primary
                  bg-gradient-to-br from-[#1a0f2e] to-[#2d1b4e]
                  p-4 sm:p-6
                  shadow-[0_0_35px_rgba(255,0,255,0.4)]
                "
              >
                {/* Scanlines */}
                <div
                  className="absolute inset-0 opacity-40 pointer-events-none z-10"
                  
                />

                {/* Animated grid */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  animate={{
                    backgroundPosition: ["0px 0px", "50px 50px"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                  
                    backgroundSize: "50px 50px",
                  }}
                />

                {/* Image */}
                <div className="relative border-2 border-accent overflow-hidden">
                  <img
                    src={avatar}
                    alt="Profile"
                    className="
                      w-full
                      aspect-[3/4]
                      object-cover
                      scale-150
                      -translate-y-12
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f2e]/80 via-transparent to-transparent" />

                  {/* CRT glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Pulse border */}
                <motion.div
                  className="absolute inset-0 border-2 pointer-events-none"
                  style={{ borderColor: "#ff00ff" }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Top pixels */}
                <div className="absolute top-2 left-2 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-accent"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>

                <div className="absolute top-2 right-2 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-primary"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="
                    absolute
                    w-2 h-2 sm:w-3 sm:h-3
                  "
                  style={{
                    backgroundColor:
                      i % 2 === 0 ? "#ff00ff" : "#00ffff",
                    left: i % 2 === 0 ? "-8px" : "auto",
                    right: i % 2 === 1 ? "-8px" : "auto",
                    top: `${20 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 180, 360],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              flex-1
              space-y-8
              text-center lg:text-left
            "
          >
            <div className="space-y-6">
              <div className="w-[750px] opacity-90">
                <h3
                  className="
                    text-primary
                    mb-5
                    text-lg sm:text-xl
                  "
                  style={{
                    fontFamily: "'Press Start 2P', monospace",
                  }}
                >
                  MY STORY SO FAR
                </h3>

                <p
                  className="
                    text-muted-foreground
                    leading-relaxed
                    mb-5
                    text-sm sm:text-base
                    tracking-wide
                  "
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  My journey into programming started with curiosity back in high school 
                  while learning Pascal. That curiosity eventually led me to pursue an IT 
                  major at the University of Science, where I discovered my passion for web 
                  development.
                </p>

                <p
                  className="
                    text-muted-foreground
                    leading-relaxed
                    text-sm sm:text-base
                    tracking-wide
                    mb-5
                  "
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  Since then, I’ve spent countless hours learning, experimenting, 
                  building personal projects, and improving my skills through real-world 
                  development experience.
                </p>

                <p
                  className="
                    text-muted-foreground
                    leading-relaxed
                    text-sm sm:text-base
                    tracking-wide
                  "
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                  }}
                >
                  Over the past year, I’ve been working mainly with Vue.js and Laravel in a 
                  professional environment, building modern web applications that are clean, 
                  responsive, and user-focused. I’m always looking to improve my skills, 
                  explore new technologies, and create products that provide real value to users.
                </p>
              </div>
            </div>

            {/* Pixels */}
            <div className="flex justify-center lg:justify-start gap-2 flex-wrap">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 sm:w-3 sm:h-3"
                  style={{
                    backgroundColor:
                      i % 3 === 0
                        ? "#ff00ff"
                        : i % 3 === 1
                        ? "#00ffff"
                        : "#8b5cf6",
                  }}
                  initial={{ opacity: 0.3, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;