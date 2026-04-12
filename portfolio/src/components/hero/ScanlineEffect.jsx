import React from "react";

const ScanlineEffect = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 opacity-10">
      <div
        className="w-full h-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, transparent 1px, transparent 2px, rgba(0,0,0,0.15) 3px)",
          backgroundSize: "100% 3px",
        }}
      />
    </div>
  );
};

export default ScanlineEffect;
