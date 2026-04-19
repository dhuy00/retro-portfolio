import { motion } from "motion/react";
import { useMemo } from "react";

const Particles = () => {
  const particles = useMemo(() => {
    return [...Array(30)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random(),
      color: ["#ff00ff", "#00ffff", "#8b5cf6"][Math.floor(Math.random() * 3)],
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating code symbols */}
      {[...Array(10)].map((_, i) => {
        const symbols = [
          "<>",
          "{}",
          "()",
          "[]",
          "/>",
          "< />",
          "=>",
          "++",
          "&&",
          "||",
        ];
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        return (
          <motion.div
            key={`symbol-${i}`}
            className="absolute text-primary/20"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "12px",
            }}
            animate={{
              y: [0, -200],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
          >
            {symbol}
          </motion.div>
        );
      })}

      {/* Binary rain effect */}
      {[...Array(15)].map((_, i) => {
        const x = (i * 7) % 100;

        return (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-accent/10"
            style={{
              left: `${x}%`,
              top: "-20px",
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "10px",
            }}
            animate={{
              y: [0, window.innerHeight + 100],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 15,
              ease: "linear",
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        );
      })}

      {/* Glowing orbs */}
      {[...Array(5)].map((_, i) => {
        const size = 50 + Math.random() * 100;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const color = [
          "rgba(255,0,255,0.1)",
          "rgba(0,255,255,0.1)",
          "rgba(139,92,246,0.1)",
        ][i % 3];

        return (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: size,
              height: size,
              backgroundColor: color,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};

export default Particles;
