import React from "react";

const Card = ({ card }) => {
  return (
    <div
      className="w-[290px] h-[150px] border-4 px-5 py-5 flex flex-col justify-between"
      style={{ backgroundColor: card.color }}
    >
      <div className="text-[30px]">{card.icon}</div>

      <span className="font-bold text-[22px] tracking-tight uppercase">
        {card.name}
      </span>

      <span className="text-xs">
        {card.description}
      </span>
    </div>
  );
};

export default Card;