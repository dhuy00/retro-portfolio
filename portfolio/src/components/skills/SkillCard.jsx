import React from "react";

const SkillCard = ({ category, text }) => {
  return (
    <div className="flex flex-col gap-2 bg-card border-2 border-primary/30 w-[265px] py-8 items-center
    hover:scale-105 transition hover:border-accent hover:text-accent">
      <span className="text-[12px] font-semibold font-mono text-primary">{category}</span>
      <span className="text-[14px] font-press-start">{text}</span>
    </div>
  );
};

export default SkillCard;
