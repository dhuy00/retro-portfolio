import React from "react";

const SkillCard = ({ category, text }) => {
  return (
    <div
      className="
        flex flex-col items-center justify-center gap-2 w-full min-h-[120px]
        px-4 py-8 text-center bg-card border-2 border-primary/30 rounded-lg
        hover:scale-105 hover:border-accent hover:text-accent transition-all duration-300
      "
    >
      <span className="text-[11px] sm:text-[12px] font-semibold font-mono text-primary">
        {category}
      </span>

      <span className="text-[12px] sm:text-[14px] font-press-start leading-relaxed break-words">
        {text}
      </span>
    </div>
  );
};

export default SkillCard;