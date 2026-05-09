import { motion } from "motion/react";
import { FaCode, FaBolt, FaTrophy, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6">
      {/* Smooth gradient starting from hero section's end color */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0820] via-[#1a0f2e] to-[#0f0820]" />

      <div className="relative z-10 max-w-6xl mx-48">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl lg:text-5xl mb-4"
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            <span className="text-accent">ABOUT</span>{" "}
            <span className="text-primary">ME</span>
          </h2>
        </motion.div>

        {/* Two Column Layout */}
        <div className="flex gap-24 items-center">
          {/* Left: Retro Image Frame */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Retro arcade frame container */}
            <div className="relative w-80">
              {/* Pixel corner decorations */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-primary animate-pulse" />
              <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-accent animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-accent animate-pulse" />
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-primary animate-pulse" />

              {/* Side accent bars */}
              <div className="absolute -left-6 top-1/4 w-2 h-1/2 bg-gradient-to-b from-primary via-accent to-primary opacity-70" />
              <div className="absolute -right-6 top-1/4 w-2 h-1/2 bg-gradient-to-b from-accent via-primary to-accent opacity-70" />

              {/* Main display frame */}
              <div className="relative border-4 border-primary bg-gradient-to-br from-[#1a0f2e] to-[#2d1b4e] p-6 overflow-hidden shadow-[0_0_50px_rgba(255,0,255,0.5)]">
                {/* Scanline effect overlay */}
                <div
                  className="absolute inset-0 opacity-40 pointer-events-none z-10"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 246, 0.15) 2px, rgba(139, 92, 246, 0.15) 4px)'
                  }}
                />

                {/* Animated grid background */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  animate={{ backgroundPosition: ['0px 0px', '50px 50px'] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{
                    backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                  }}
                />

                {/* Image container with inner border */}
                <div className="relative border-2 border-accent overflow-hidden">
                  {/* Your Image Here - Replace src with your image path */}
                  <img
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&h=600&fit=crop"
                    alt="Profile"
                    className="w-128 h-auto object-cover aspect-[3/4]"
                  />

                  {/* Image overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f2e]/80 via-transparent to-transparent" />

                  {/* CRT glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                {/* Pulsing border effect */}
                <motion.div
                  className="absolute inset-0 border-2 pointer-events-none"
                  style={{ borderColor: '#ff00ff' }}
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Pixel decorations on frame */}
                <div className="absolute top-2 left-2 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-accent"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                    />
                  ))}
                </div>

                <div className="absolute top-2 right-2 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-primary"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.3 }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating decorative elements */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3"
                  style={{
                    backgroundColor: i % 2 === 0 ? '#ff00ff' : '#00ffff',
                    left: i % 2 === 0 ? '-8px' : 'auto',
                    right: i % 2 === 1 ? '-8px' : 'auto',
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

          {/* Right: Description */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Main text */}
            <div className="space-y-6">
              <div>
                <h3
                  className="text-2xl mb-4 text-primary"
                  style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '1.1rem' }}
                >
                  PLAYER ONE
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.05rem' }}>
                  Full-stack developer with <span className="text-primary">8+ years</span> of experience crafting elegant solutions to complex problems. Started coding at 14, building simple websites in my bedroom. Fast forward to today, I've shipped products used by millions of users and led engineering teams at fast-growing startups.
                </p>
                <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.05rem' }}>
                  Passionate about building intuitive, performant web applications that solve real problems. I believe great software is a blend of <span className="text-accent">clean code</span>, <span className="text-secondary">thoughtful design</span>, and <span className="text-primary">user empathy</span>.
                </p>
              </div>
            </div>

            {/* Pixel decoration */}
            <div className="flex gap-2">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3"
                  style={{ backgroundColor: i % 3 === 0 ? '#ff00ff' : i % 3 === 1 ? '#00ffff' : '#8b5cf6' }}
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
}

export default About;