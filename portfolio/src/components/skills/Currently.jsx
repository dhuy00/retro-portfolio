import React from "react";

const Currently = () => {
  const techstacks = [
    {
      id: 0,
      name: "Java",
    },
    {
      id: 1,
      name: "AWS",
    },
    {
      id: 2,
      name: "Three.js",
    },
    {
      id: 3,
      name: "UI/UX Principles",
    },
  ];

  return (
    <div className="w-full max-w-[1100px] border-2 border-accent/50 bg-card rounded-lg flex 
    flex-col gap-6 p-5 sm:p-6 md:p-8 lg:p-10 mt-12 px-4 sm:px-6">
      <h2 className="font-press-start text-[12px] sm:text-[14px] md:text-[16px] text-accent
       text-center leading-relaxed">
        CURRENTLY LEARNING
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
        {techstacks.map((item) => (
          <span
            key={item.id}
            className="px-4 sm:px-6 py-2 sm:py-2.5 border-2 border-accent text-accent 
            font-orbitron text-[12px] sm:text-[14px] rounded-md hover:bg-accent/10 transition-all duration-300"
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Currently;