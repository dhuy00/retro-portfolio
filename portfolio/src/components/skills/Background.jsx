import React from "react";
import { motion } from "motion/react";

const Background = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0820] via-[#0a0412] to-[#0a0412]" />

      {/* Radial gradient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] opacity-60" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] opacity-60" />
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-secondary/15 rounded-full blur-[100px]" />

      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 255, 0.2) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating pixel particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1"
            style={{
              backgroundColor:
                i % 3 === 0 ? "#ff00ff" : i % 3 === 1 ? "#00ffff" : "#8b5cf6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Diagonal scan lines */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0, 255, 255, 0.5) 10px, rgba(0, 255, 255, 0.5) 11px)",
        }}
      />
    </>
  );
};

export default Background;
