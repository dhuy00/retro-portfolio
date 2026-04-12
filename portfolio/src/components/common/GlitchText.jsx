import { motion } from "motion/react";

const GlitchText = ({ children, className, style }) => {
  return (
    <div className={`relative inline-block ${className}`} style={style}>
      {/* Main text */}
      <span className="relative z-10">{children}</span>

      {/* Glitch layer 1 - Cyan */}
      <motion.span
        className="absolute top-0 left-0 w-full h-full"
        style={{
          color: "#00ffff",
          clipPath: "inset(0 0 0 0)",
          ...style,
        }}
        animate={{
          clipPath: [
            "inset(0 0 0 0)",
            "inset(40% 0 30% 0)",
            "inset(0 0 0 0)",
            "inset(70% 0 10% 0)",
            "inset(0 0 0 0)",
          ],
          x: [-3, 3, -3, 3, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "linear",
        }}
      >
        {children}
      </motion.span>

      {/* Glitch layer 2 - Magenta */}
      <motion.span
        className="absolute top-0 left-0 w-full h-full"
        style={{
          color: "#ff00ff",
          clipPath: "inset(0 0 0 0)",
          ...style,
        }}
        animate={{
          clipPath: [
            "inset(0 0 0 0)",
            "inset(20% 0 60% 0)",
            "inset(0 0 0 0)",
            "inset(50% 0 30% 0)",
            "inset(0 0 0 0)",
          ],
          x: [3, -3, 3, -3, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "linear",
          delay: 0.1,
        }}
      >
        {children}
      </motion.span>

      {/* Random noise effect */}
      <motion.span
        className="absolute top-0 left-0 w-full h-full mix-blend-difference"
        style={{
          color: "#ffffff",
          opacity: 0,
          ...style,
        }}
        animate={{
          opacity: [0, 0.8, 0, 0.6, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "linear",
        }}
      >
        {children}
      </motion.span>
    </div>
  );
}

export default GlitchText
