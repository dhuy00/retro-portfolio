import React from "react";

const Values = () => {
  const values = [
    {
      id: 1,
      name: "Craftsmanship",
      description: "Code is a craft. Every line matters, every detail count",
    },
    {
      id: 2,
      name: "Collaboration",
      description: "Best products are built by diverse teams working together.",
    },
    {
      id: 3,
      name: "Continuous Learning",
      description:
        "Technology evolves fast. Staying curious is non-negotiable.",
    },
    {
      id: 4,
      name: "User-First",
      description:
        "Features don't matter if they don't solve real user problems.",
    },
  ];
  return (
    <div className="bg-card border-2 border-primary/30 flex flex-col w-[1000px] p-8 gap-4">
      {values.map((item, index) => (
        <div className="flex gap-4 font-orbitron ">
          <span className="text-sm font-press-start text-primary border-2 border-primary w-6 h-6 flex
          justify-center items-center font-normal">
            <span className="text-xs">
              {index + 1}
            </span>
          </span>
          <div className="flex flex-col gap-2">
            <div className="text-accent text-md font-medium">{item.name}</div>
            <div className="text-muted-foreground text-sm">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Values;
