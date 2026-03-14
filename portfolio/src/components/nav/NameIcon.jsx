import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const NameIcon = () => {
  return (
    <div className="flex items-center gap-2 font-space-mono font-bold">
      {/* Rectangle */}
      <div
        className="w-10 h-10 bg-[#FFDF20] flex justify-center items-center border-[3.5px]
      relative"
      >
        <div className="flex items-end">
          <FaChevronDown className="-rotate-90" />
          <span className="w-3 h-0.5 bg-black rounded-sm"></span>
        </div>
        <span
          className="absolute w-3 h-3 rounded-full bg-[#00C950] border-2
        -top-2 -right-2 opacity-75"
        ></span>
      </div>
      <span className="tracking-wide">DUCHUY.DEV</span>
    </div>
  );
};

export default NameIcon;
