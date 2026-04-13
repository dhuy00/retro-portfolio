import React from "react";
import { motion } from "framer-motion";

const CatScroll = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Mouse character */}
      <motion.g
        animate={{ opacity: [1, 0.8, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        {/* Left ear */}
        <rect x="8" y="4" width="4" height="4" fill="#ff00ff" />
        <rect x="8" y="8" width="4" height="4" fill="#ff00ff" />
        <rect x="12" y="8" width="4" height="4" fill="#8b5cf6" />

        {/* Right ear */}
        <rect x="28" y="4" width="4" height="4" fill="#ff00ff" />
        <rect x="28" y="8" width="4" height="4" fill="#ff00ff" />
        <rect x="24" y="8" width="4" height="4" fill="#8b5cf6" />

        {/* Head/Body */}
        <rect x="12" y="12" width="4" height="4" fill="#00ffff" />
        <rect x="16" y="12" width="4" height="4" fill="#00ffff" />
        <rect x="20" y="12" width="4" height="4" fill="#00ffff" />
        <rect x="24" y="12" width="4" height="4" fill="#00ffff" />

        <rect x="8" y="16" width="4" height="4" fill="#00ffff" />
        <rect x="12" y="16" width="4" height="4" fill="#ff00ff" />
        <rect x="16" y="16" width="4" height="4" fill="#00ffff" />
        <rect x="20" y="16" width="4" height="4" fill="#00ffff" />
        <rect x="24" y="16" width="4" height="4" fill="#ff00ff" />
        <rect x="28" y="16" width="4" height="4" fill="#00ffff" />

        {/* Eyes blinking */}
        <motion.g
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        >
          <rect x="12" y="16" width="4" height="4" fill="#1a0f2e" />
          <rect x="24" y="16" width="4" height="4" fill="#1a0f2e" />
        </motion.g>

        {/* Nose */}
        <rect x="18" y="20" width="4" height="4" fill="#ff00ff" />

        {/* Body lower */}
        <rect x="12" y="20" width="4" height="4" fill="#00ffff" />
        <rect x="16" y="20" width="4" height="4" fill="#00ffff" />
        <rect x="20" y="20" width="4" height="4" fill="#00ffff" />
        <rect x="24" y="20" width="4" height="4" fill="#00ffff" />

        <rect x="12" y="24" width="4" height="4" fill="#00ffff" />
        <rect x="16" y="24" width="4" height="4" fill="#8b5cf6" />
        <rect x="20" y="24" width="4" height="4" fill="#8b5cf6" />
        <rect x="24" y="24" width="4" height="4" fill="#00ffff" />

        {/* Feet */}
        <rect x="12" y="28" width="4" height="4" fill="#ff00ff" />
        <rect x="24" y="28" width="4" height="4" fill="#ff00ff" />

        {/* Tail - animated wiggle */}
      </motion.g>

      {/* Wiggling tail */}
      <motion.g
        animate={{ x: [0, 2, 0, -2, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="28" y="20" width="4" height="4" fill="#ff00ff" />
        <rect x="32" y="16" width="4" height="4" fill="#ff00ff" />
        <rect x="32" y="12" width="4" height="4" fill="#8b5cf6" />
      </motion.g>

      {/* Glow effect around mouse */}
      <motion.ellipse
        cx="20"
        cy="20"
        rx="16"
        ry="14"
        fill="#00ffff"
        opacity="0.1"
        filter="blur(8px)"
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  );
};

export default CatScroll;
