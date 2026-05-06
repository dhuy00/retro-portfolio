import { motion } from "motion/react";
import { useState, useEffect } from "react";

// ─── tech badges ─────────────────────────────────────────────────────────────

const techBadges = [
  { label: "REACT",      color: "#61dafb", angle: 0,   radius: 200 },
  { label: "TYPESCRIPT", color: "#3178c6", angle: 51,  radius: 220 },
  { label: "NODE.JS",    color: "#68a063", angle: 103, radius: 195 },
  { label: "POSTGRES",   color: "#6aaed6", angle: 154, radius: 215 },
  { label: "DOCKER",     color: "#2496ed", angle: 206, radius: 200 },
  { label: "GRAPHQL",    color: "#e535ab", angle: 257, radius: 210 },
  { label: "AWS",        color: "#ff9900", angle: 308, radius: 205 },
];

// ─── 8-bit pixel badge ────────────────────────────────────────────────────────

function PixelBadge({ label, color, angle, radius, delay }) {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * radius;
  const y = Math.sin(rad) * radius * 0.45;

  return (
    <motion.div
      className="absolute"
      style={{ left: "50%", top: "50%", x: x - 46, y: y - 16 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3, type: "spring" }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3 + delay * 0.5, repeat: Infinity, ease: "easeInOut", delay: delay * 0.3 }}
        style={{ position: "relative", display: "inline-block" }}
      >
        {/* Pixel corner squares */}
        {[[-2,-2],[null,-2],[-2,null],[null,null]].map(([l,t], ci) => (
          <div key={ci} style={{
            position: "absolute",
            width: 4, height: 4,
            backgroundColor: color,
            top: ci < 2 ? -2 : undefined,
            bottom: ci >= 2 ? -2 : undefined,
            left: ci % 2 === 0 ? -2 : undefined,
            right: ci % 2 === 1 ? -2 : undefined,
            imageRendering: "pixelated",
          }} />
        ))}
        {/* Badge body */}
        <div style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: "8px",
          lineHeight: "1",
          color,
          border: `2px solid ${color}`,
          backgroundColor: "#06030f",
          padding: "6px 8px",
          whiteSpace: "nowrap",
          boxShadow: `3px 3px 0 #000, 0 0 10px ${color}55`,
          imageRendering: "pixelated",
          letterSpacing: "0.04em",
        }}>
          ▸ {label}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── 8-bit pixel orbit rings (SVG) ───────────────────────────────────────────

const OUTER_R = 228;
const INNER_R = 188;

function PixelOrbitRings() {
  const [blink, setBlink] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setBlink(b => (b + 1) % 4), 400);
    return () => clearInterval(id);
  }, []);

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      viewBox="-250 -250 500 500"
      style={{ width: "100%", height: "100%" }}
      shapeRendering="crispEdges"
    >
      {/* ── Outer ring — clockwise ── */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "0px 0px" }}
      >
        {/* Dashed pixel ring */}
        <circle r={OUTER_R} stroke="rgba(139,92,246,0.5)" strokeWidth="3"
          strokeDasharray="4 16" strokeLinecap="square" fill="none" />

        {/* Cardinal pixel markers — large */}
        {[0, 90, 180, 270].map((a, i) => {
          const rx = Math.cos((a * Math.PI) / 180) * OUTER_R;
          const ry = Math.sin((a * Math.PI) / 180) * OUTER_R;
          return (
            <g key={a}>
              <rect x={rx - 6} y={ry - 6} width="12" height="12" fill="#00ffff"
                opacity={i === blink ? 1 : 0.7} />
              {/* Cross cutout */}
              <rect x={rx - 2} y={ry - 6} width="4" height="12" fill="#0a0118" opacity="0.6" />
              <rect x={rx - 6} y={ry - 2} width="12" height="4" fill="#0a0118" opacity="0.6" />
            </g>
          );
        })}

        {/* Diagonal pixel markers — small */}
        {[45, 135, 225, 315].map(a => {
          const rx = Math.cos((a * Math.PI) / 180) * OUTER_R;
          const ry = Math.sin((a * Math.PI) / 180) * OUTER_R;
          return <rect key={a} x={rx - 3} y={ry - 3} width="6" height="6"
            fill="rgba(139,92,246,0.8)" />;
        })}
      </motion.g>

      {/* ── Inner ring — counter-clockwise ── */}
      <motion.g
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ transformOrigin: "0px 0px" }}
      >
        <circle r={INNER_R} stroke="rgba(255,0,255,0.35)" strokeWidth="2"
          strokeDasharray="3 18" strokeLinecap="square" fill="none" />

        {/* Small pixel markers at 4 cardinal points */}
        {[0, 90, 180, 270].map(a => {
          const rx = Math.cos((a * Math.PI) / 180) * INNER_R;
          const ry = Math.sin((a * Math.PI) / 180) * INNER_R;
          return <rect key={a} x={rx - 4} y={ry - 4} width="8" height="8"
            fill="#ff00ff" opacity="0.8" />;
        })}
      </motion.g>

      {/* ── Pixel corner brackets ── */}
      {[
        { tx: -235, ty: -235, sx: 1,  sy: 1  },
        { tx:  235, ty: -235, sx: -1, sy: 1  },
        { tx: -235, ty:  235, sx: 1,  sy: -1 },
        { tx:  235, ty:  235, sx: -1, sy: -1 },
      ].map(({ tx, ty, sx, sy }, i) => (
        <motion.g key={i}
          transform={`translate(${tx}, ${ty}) scale(${sx}, ${sy})`}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.6 }}
        >
          <rect x="0" y="0" width="3" height="18" fill="#00ffff" />
          <rect x="0" y="0" width="18" height="3" fill="#00ffff" />
          <rect x="5" y="5" width="3" height="3" fill="#00ffff" opacity="0.5" />
        </motion.g>
      ))}
    </svg>
  );
}

// ─── 8-bit pixel globe ────────────────────────────────────────────────────────

const PIXEL    = 7;
const GLOBE_R  = 9;
const GCX      = 140;
const GCY      = 140;
const M_PERIOD = 6;

const GLOBE_CELLS = (() => {
  const cells = [];
  for (let row = -(GLOBE_R + 1); row <= GLOBE_R + 1; row++) {
    for (let col = -(GLOBE_R + 1); col <= GLOBE_R + 1; col++) {
      const d = Math.sqrt(row * row + col * col);
      if (d >= GLOBE_R - 0.65 && d <= GLOBE_R + 0.65)  cells.push({ col, row, kind: "border" });
      else if (d < GLOBE_R - 0.65)                       cells.push({ col, row, kind: "interior" });
    }
  }
  return cells;
})();

const STARS = [
  [75,65],[95,58],[115,52],[165,50],[190,58],[210,70],
  [220,100],[225,140],[215,175],[195,200],[165,215],
  [110,218],[85,205],[62,185],[52,155],[55,105],
  [80,85],[170,80],[200,130],[205,160],
];

function PixelGlobe({ shift }) {
  return (
    <g shapeRendering="crispEdges">
      {STARS.map(([sx, sy], i) => (
        <rect key={`s${i}`} x={sx} y={sy} width={2} height={2}
          fill={i % 3 === 0 ? "#00ffaa" : i % 3 === 1 ? "#8b5cf6" : "#ff00ff"}
          opacity={0.4 + (i % 4) * 0.15} />
      ))}
      {GLOBE_CELLS.map(({ col, row, kind }) => {
        const key = `${col},${row}`;
        const x = GCX + col * PIXEL;
        const y = GCY + row * PIXEL;
        const w = PIXEL - 1;
        if (kind === "border") return <rect key={key} x={x} y={y} width={w} height={w} fill="#00ffaa" opacity="0.9" />;
        const isEq  = row === 0;
        const isTr  = Math.abs(row) === 3 || Math.abs(row) === 6;
        const isMer = ((col % M_PERIOD + M_PERIOD + shift) % M_PERIOD) === 0;
        if (isEq  && isMer) return <rect key={key} x={x} y={y} width={w} height={w} fill="#ffffff" opacity="0.95" />;
        if (isTr  && isMer) return <rect key={key} x={x} y={y} width={w} height={w} fill="#e0b0ff" opacity="0.9"  />;
        if (isEq)           return <rect key={key} x={x} y={y} width={w} height={w} fill="#00ffff" opacity="0.9"  />;
        if (isTr)           return <rect key={key} x={x} y={y} width={w} height={w} fill="#8b5cf6" opacity="0.75" />;
        if (isMer)          return <rect key={key} x={x} y={y} width={w} height={w} fill="#ff00ff" opacity="0.82" />;
        return null;
      })}
    </g>
  );
}

// ─── CRT bezel + screen assembly ─────────────────────────────────────────────

function RetroGlobeDisplay() {
  const [shift, setShift] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setShift(s => (s + 1) % M_PERIOD), 150);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80 }}
      className="relative z-10"
      style={{ width: 280, height: 280 }}
    >
      <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "100%", overflow: "visible" }}>
        <defs>
          <radialGradient id="screenBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0d1a0d" />
            <stop offset="100%" stopColor="#050a05" />
          </radialGradient>
          <radialGradient id="phosphorGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#00ffaa" stopOpacity="0.12" />
            <stop offset="70%"  stopColor="#8b5cf6" stopOpacity="0.04" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
          <clipPath id="screenClip">
            <circle cx="140" cy="140" r="98" />
          </clipPath>
        </defs>

        {/* Octagonal pixel bezel */}
        <polygon points="50,90 90,50 190,50 230,90 230,190 190,230 90,230 50,190"
          fill="#1a0f2e" stroke="#8b5cf6" strokeWidth="3" />
        <polygon points="56,93 93,56 187,56 224,93 224,187 187,224 93,224 56,187"
          fill="none" stroke="#ff00ff" strokeWidth="1" strokeOpacity="0.4" />

        {/* Corner screws */}
        {[[70,70],[210,70],[70,210],[210,210]].map(([x,y],i) => (
          <g key={i} shapeRendering="crispEdges">
            <rect x={x-5} y={y-5} width="10" height="10" fill="#2d1b4e" stroke="#8b5cf6" strokeWidth="1.5" />
            <line x1={x-3} y1={y} x2={x+3} y2={y} stroke="#00ffff" strokeWidth="1" strokeOpacity="0.7" />
            <line x1={x} y1={y-3} x2={x} y2={y+3} stroke="#00ffff" strokeWidth="1" strokeOpacity="0.7" />
          </g>
        ))}

        {/* Side indicator lights */}
        {[0,1,2].map(i => (
          <motion.rect key={`l${i}`} x={56} y={118 + i*14} width="6" height="8" shapeRendering="crispEdges"
            fill={["#00ffff","#ff00ff","#8b5cf6"][i]}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4 }} />
        ))}
        {[0,1,2].map(i => (
          <motion.rect key={`r${i}`} x={218} y={118 + i*14} width="6" height="8" shapeRendering="crispEdges"
            fill={["#8b5cf6","#00ffff","#ff00ff"][i]}
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.4 + 0.6 }} />
        ))}

        {/* Bottom label strip */}
        <rect x="95" y="234" width="90" height="14" fill="#0f0820" stroke="#8b5cf6" strokeWidth="1.5"
          shapeRendering="crispEdges" />
        <motion.text x="140" y="244" textAnchor="middle"
          fill="#00ffff" fontSize="6" fontFamily="'Press Start 2P', monospace"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}>
          SYS-ONLINE
        </motion.text>

        {/* CRT screen */}
        <circle cx="140" cy="140" r="100" fill="#060e06" />
        <circle cx="140" cy="140" r="98"  fill="url(#screenBg)" />
        <circle cx="140" cy="140" r="98"  fill="url(#phosphorGlow)" />

        {/* Pixel globe */}
        <g clipPath="url(#screenClip)">
          <PixelGlobe shift={shift} />
        </g>

        {/* Scanlines */}
        <g clipPath="url(#screenClip)" opacity="0.13" shapeRendering="crispEdges">
          {Array.from({ length: 50 }).map((_, i) => (
            <line key={i} x1="42" y1={42 + i*4} x2="238" y2={42 + i*4}
              stroke="#00ffaa" strokeWidth="1" />
          ))}
        </g>

        {/* Coordinate readout */}
        <text x="84" y="218" fill="#00ffaa" fontSize="5.5"
          fontFamily="'Press Start 2P', monospace" opacity="0.7">LAT 00°00'</text>
        <motion.text x="170" y="218" fill="#ff00ff" fontSize="5.5"
          fontFamily="'Press Start 2P', monospace"
          animate={{ opacity: [0.7, 0.3, 0.7] }}
          transition={{ duration: 1.8, repeat: Infinity }}>ROT+</motion.text>

        {/* Blinking cursor */}
        <motion.rect x={178} y={116} width={6} height={6} fill="#ff00ff" shapeRendering="crispEdges"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.85, repeat: Infinity }} />

        {/* Screen vignette */}
        <circle cx="140" cy="140" r="98"  fill="none" stroke="#000" strokeWidth="10" strokeOpacity="0.5" />
        <circle cx="140" cy="140" r="100" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeOpacity="0.6" />
      </svg>

      {/* CRT bloom */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(circle, rgba(0,255,170,0.06) 0%, transparent 70%)",
        filter: "blur(12px)", transform: "scale(1.15)",
      }} />
    </motion.div>
  );
}

// ─── main export ──────────────────────────────────────────────────────────────

export function HolographicCodeDisplay() {
  return (
    <div className="relative w-full flex items-center justify-center" style={{ minHeight: 500 }}>
      {/* 8-bit pixel orbit rings */}
      <PixelOrbitRings />

      {/* 8-bit floating badges */}
      {techBadges.map((badge, i) => (
        <PixelBadge key={badge.label} {...badge} delay={0.8 + i * 0.15} />
      ))}

      {/* 8-bit CRT globe */}
      <RetroGlobeDisplay />
    </div>
  );
}