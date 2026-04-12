import React from "react";

const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <div
        className="w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
};

export default AnimatedGrid;
