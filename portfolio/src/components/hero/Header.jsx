import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="text-white bg-black py-3 flex justify-between items-center">
      <div className="flex items-center">
        {/* Dot */}
        <div className="flex gap-1 items-center pl-4">
          <span className="w-2 h-2 rounded-full bg-[#FB2C36]"></span>
          <span className="w-2 h-2 rounded-full bg-[#FFDF20]"></span>
          <span className="w-2 h-2 rounded-full bg-[#00C950]"></span>
        </div>
        <span className="text-[10px] pl-4">~/portfolio/main.tsx</span>
      </div>
      <div className="flex items-end mr-4">
        <FaChevronDown className="-rotate-90 text-xs" />
        <span className="w-[9px] h-[1.5px] bg-white rounded-sm"></span>
      </div>
    </div>
  );
};

export default Header;
