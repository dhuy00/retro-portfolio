import React from "react";

const SectionBreak = () => {
  return (
    <div className="relative mx-28 mt-12 bg-white border-4 h-[220px] flex justify-center items-center shadow-lg">
      <span className="w-4 h-4 bg-red-400 rounded-full absolute border-2 top-4 left-7"></span>
      <span className="w-4 h-4 bg-green-400 rounded-full absolute border-2 bottom-4 left-7"></span>
      <span className="w-4 h-4 bg-blue-400 rounded-full absolute border-2 top-4 right-7"></span>
      <span className="w-4 h-4 bg-yellow-300 rounded-full absolute border-2 bottom-4 right-7"></span>
      <div className="bg-[#FFE4B5] w-[80%] h-[70%] -rotate-1 border-2 shadow-hard">

      </div>
    </div>
  );
};

export default SectionBreak;