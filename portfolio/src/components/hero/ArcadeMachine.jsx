import { motion } from "motion/react";

const ArcadeMachine = () => {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Cabinet Shadow */}
      <path
        d="M50 380 L50 120 L80 80 L520 80 L550 120 L550 380 Z"
        fill="rgba(0, 0, 0, 0.3)"
        transform="translate(5, 5)"
        opacity="0.5"
      />

      {/* Cabinet Base - Gradient */}
      <defs>
        <linearGradient id="cabinetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2d1b4e" />
          <stop offset="50%" stopColor="#1a0f2e" />
          <stop offset="100%" stopColor="#0f0820" />
        </linearGradient>
        <linearGradient id="screenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff00ff" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#00ffff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="controlPanelGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3d2b5e" />
          <stop offset="100%" stopColor="#1d0f3e" />
        </linearGradient>
        <linearGradient id="marqueeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff00ff" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#00ffff" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Cabinet Base */}
      <path
        d="M50 380 L50 120 L80 80 L520 80 L550 120 L550 380 Z"
        fill="url(#cabinetGradient)"
        stroke="#8b5cf6"
        strokeWidth="3"
      />

      {/* Cabinet Inner Panel */}
      <path
        d="M60 370 L60 130 L85 95 L515 95 L540 130 L540 370 Z"
        fill="none"
        stroke="#ff00ff"
        strokeWidth="1"
        opacity="0.3"
      />

      {/* Screen Bezel */}
      <rect
        x="75"
        y="105"
        width="350"
        height="190"
        fill="#0f0820"
        stroke="#8b5cf6"
        strokeWidth="2"
      />

      {/* Screen */}
      <rect
        x="80"
        y="110"
        width="340"
        height="180"
        fill="#0a0118"
        stroke="#ff00ff"
        strokeWidth="3"
      />

      {/* Screen glow */}
      <rect
        x="85"
        y="115"
        width="330"
        height="170"
        fill="url(#screenGlow)"
        opacity="0.8"
      />

      {/* Screen Content */}
      <g opacity="1">
        {/* INSERT COIN - Blinking */}
        <motion.text
          x="150"
          y="145"
          fill="#00ffff"
          fontSize="14"
          fontFamily="'Press Start 2P', monospace"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          &gt; INSERT COIN
        </motion.text>

        {/* PRESS START */}
        <motion.text
          x="150"
          y="170"
          fill="#ff00ff"
          fontSize="14"
          fontFamily="'Press Start 2P', monospace"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
        >
          &gt; PRESS START
        </motion.text>

        {/* Separator line */}
        <motion.line
          x1="120"
          y1="190"
          x2="380"
          y2="190"
          stroke="#8b5cf6"
          strokeWidth="1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* PLAYER: YOU */}
        <text
          x="150"
          y="215"
          fill="#fbbf24"
          fontSize="11"
          fontFamily="'Press Start 2P', monospace"
        >
          PLAYER: YOU
        </text>

        {/* ROLE */}
        <text
          x="150"
          y="235"
          fill="#8b5cf6"
          fontSize="10"
          fontFamily="'Press Start 2P', monospace"
        >
          ROLE: FULL-STACK
        </text>

        {/* START GAME Button */}
        <motion.g
          whileHover={{ scale: 1.05 }}
          animate={{ opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <rect
            x="180"
            y="250"
            width="140"
            height="25"
            fill="none"
            stroke="#00ffff"
            strokeWidth="2"
          />
          <text
            x="200"
            y="268"
            fill="#00ffff"
            fontSize="10"
            fontFamily="'Press Start 2P', monospace"
          >
            START GAME
          </text>
        </motion.g>
      </g>

      {/* Screen scanlines */}
      <g opacity="0.15">
        {[...Array(30)].map((_, i) => (
          <line
            key={i}
            x1="85"
            y1={115 + i * 6}
            x2="415"
            y2={115 + i * 6}
            stroke="#00ffff"
            strokeWidth="1"
          />
        ))}
      </g>

      {/* Control Panel */}
      <path
        d="M60 310 L90 340 L510 340 L540 310 Z"
        fill="url(#controlPanelGradient)"
        stroke="#8b5cf6"
        strokeWidth="3"
      />

      {/* Control Panel Highlight */}
      <path
        d="M70 312 L95 335 L505 335 L530 312"
        fill="none"
        stroke="#ff00ff"
        strokeWidth="1"
        opacity="0.3"
      />

      {/* Joystick Base */}
      <circle cx="150" cy="325" r="18" fill="#1a0f2e" stroke="#8b5cf6" strokeWidth="2" />

      {/* Joystick */}
      <motion.g
        animate={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "150px 325px" }}
      >
        <circle cx="150" cy="325" r="10" fill="#ff00ff" />
        <rect x="146" y="300" width="8" height="25" fill="#ff00ff" rx="4" />
        <circle
          cx="150"
          cy="295"
          r="14"
          fill="#00ffff"
          stroke="#ff00ff"
          strokeWidth="2"
        />
        {/* Joystick highlight */}
        <circle
          cx="147"
          cy="292"
          r="5"
          fill="#ffffff"
          opacity="0.6"
        />
      </motion.g>

      {/* Buttons with 3D effect */}
      <motion.g>
        <circle cx="350" cy="328" r="14" fill="#1a0f2e" opacity="0.5" />
        <circle
          cx="350"
          cy="320"
          r="14"
          fill="#ff00ff"
          stroke="#00ffff"
          strokeWidth="2"
        />
        <motion.circle
          cx="350"
          cy="320"
          r="14"
          fill="#ff00ff"
          opacity="0.8"
          animate={{ opacity: [0.8, 0.4, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
        />
        <circle cx="347" cy="317" r="5" fill="#ffffff" opacity="0.4" />
      </motion.g>

      <motion.g>
        <circle cx="390" cy="328" r="14" fill="#1a0f2e" opacity="0.5" />
        <circle
          cx="390"
          cy="320"
          r="14"
          fill="#00ffff"
          stroke="#ff00ff"
          strokeWidth="2"
        />
        <motion.circle
          cx="390"
          cy="320"
          r="14"
          fill="#00ffff"
          opacity="0.8"
          animate={{ opacity: [0.8, 0.4, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        />
        <circle cx="387" cy="317" r="5" fill="#ffffff" opacity="0.4" />
      </motion.g>

      <motion.g>
        <circle cx="430" cy="328" r="14" fill="#1a0f2e" opacity="0.5" />
        <circle
          cx="430"
          cy="320"
          r="14"
          fill="#8b5cf6"
          stroke="#00ffff"
          strokeWidth="2"
        />
        <motion.circle
          cx="430"
          cy="320"
          r="14"
          fill="#8b5cf6"
          opacity="0.8"
          animate={{ opacity: [0.8, 0.4, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
        />
        <circle cx="427" cy="317" r="5" fill="#ffffff" opacity="0.4" />
      </motion.g>

      <motion.g>
        <circle cx="470" cy="328" r="14" fill="#1a0f2e" opacity="0.5" />
        <circle
          cx="470"
          cy="320"
          r="14"
          fill="#fbbf24"
          stroke="#ff00ff"
          strokeWidth="2"
        />
        <motion.circle
          cx="470"
          cy="320"
          r="14"
          fill="#fbbf24"
          opacity="0.8"
          animate={{ opacity: [0.8, 0.4, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
        />
        <circle cx="467" cy="317" r="5" fill="#ffffff" opacity="0.4" />
      </motion.g>

      {/* Speaker grills - Enhanced */}
      <g opacity="0.8">
        {/* Left speaker */}
        <rect x="470" y="120" width="50" height="70" fill="none" stroke="#8b5cf6" strokeWidth="1" rx="5" />
        {[...Array(6)].map((_, row) =>
          [...Array(4)].map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={480 + col * 10}
              cy={130 + row * 10}
              r="2.5"
              fill="#8b5cf6"
            />
          ))
        )}

        {/* Right speaker */}
        <rect x="470" y="220" width="50" height="70" fill="none" stroke="#8b5cf6" strokeWidth="1" rx="5" />
        {[...Array(6)].map((_, row) =>
          [...Array(4)].map((_, col) => (
            <circle
              key={`b-${row}-${col}`}
              cx={480 + col * 10}
              cy={230 + row * 10}
              r="2.5"
              fill="#8b5cf6"
            />
          ))
        )}
      </g>

      {/* Marquee */}
      <path
        d="M40 70 L50 80 L550 80 L560 70 L560 30 L40 30 Z"
        fill="#2d1b4e"
        stroke="#ff00ff"
        strokeWidth="3"
      />

      {/* Marquee glow effect */}
      <motion.path
        d="M40 70 L50 80 L550 80 L560 70 L560 30 L40 30 Z"
        fill="url(#marqueeGradient)"
        opacity="0.3"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Marquee text background */}
      <rect
        x="100"
        y="40"
        width="400"
        height="30"
        fill="#0a0118"
        stroke="#00ffff"
        strokeWidth="2"
      />

      {/* Coin slot with detail */}
      <g>
        <rect
          x="280"
          y="360"
          width="40"
          height="12"
          fill="#1a0f2e"
          stroke="#8b5cf6"
          strokeWidth="1"
          rx="2"
        />
        <rect
          x="285"
          y="365"
          width="30"
          height="4"
          fill="#8b5cf6"
          stroke="#00ffff"
          strokeWidth="1"
        />
        <text
          x="245"
          y="368"
          fill="#8b5cf6"
          fontSize="6"
          fontFamily="'Orbitron', sans-serif"
        >
          COIN
        </text>
      </g>

      {/* Side LED strips */}
      <motion.g
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <line x1="60" y1="130" x2="65" y2="180" stroke="#00ffff" strokeWidth="3" opacity="0.8" />
        <line x1="60" y1="220" x2="65" y2="270" stroke="#ff00ff" strokeWidth="3" opacity="0.8" />
        <line x1="540" y1="130" x2="535" y2="180" stroke="#00ffff" strokeWidth="3" opacity="0.8" />
        <line x1="540" y1="220" x2="535" y2="270" stroke="#ff00ff" strokeWidth="3" opacity="0.8" />
      </motion.g>

      {/* Corner decorations */}
      <g stroke="#00ffff" strokeWidth="2" fill="none">
        <path d="M75 85 L75 95 M75 85 L85 85" />
        <path d="M515 85 L525 85 M525 85 L525 95" />
      </g>
    </svg>
  );
}

export default ArcadeMachine;