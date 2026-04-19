import React from "react";

const Currently = () => {
  const techstacks = [
    {
      id: 0,
      name: "Rust",
    },
    {
      id: 1,
      name: "WebAssembly",
    },
    {
      id: 0,
      name: "Three.js",
    },
    {
      id: 0,
      name: "Kubernets",
    },
  ];
  return (
    <div className="w-[1100px]  border-accent/50 bg-card border-2 flex flex-col gap-6 p-10 mt-12">
      <h2 className="font-press-start text-[16px] text-accent text-center">
        CURRENTLY LEANRING
      </h2>
      <div className="flex justify-center items-center gap-4">
        {techstacks.map((item) => (
          <span className="px-6 py-2.5 border-2 border-accent text-accent font-orbitron">
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Currently;
