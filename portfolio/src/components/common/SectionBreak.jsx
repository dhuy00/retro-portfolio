import React from "react";

const SectionBreak = () => {
  return (
    <div className="relative mx-28 mt-12 bg-white border-4 h-[220px] flex justify-center items-center shadow-lg">
      <span className="w-4 h-4 bg-red-400 rounded-full absolute border-2 top-4 left-7"></span>
      <span className="w-4 h-4 bg-green-400 rounded-full absolute border-2 bottom-4 left-7"></span>
      <span className="w-4 h-4 bg-blue-400 rounded-full absolute border-2 top-4 right-7"></span>
      <span className="w-4 h-4 bg-yellow-300 rounded-full absolute border-2 bottom-4 right-7"></span>
      <div className="bg-[#FFE4B5] w-[80%] h-[70%] -rotate-1 border-3 shadow-hard flex flex-col px-10 py-8
      font-space-mono text-xl relative">
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-7 bg-white/60 border border-black/20
        rotate-[-2deg]"></div>
        <p className="font-mono text-xl leading-relaxed">
            "First,{" "}
            <mark className="bg-[#FF69B4] px-1 border-2 border-black">solve the problem</mark>.
            Then,{" "}
            <mark className="bg-[#4A90E2] px-1 border-2 border-black">write the code</mark>."
          </p>
        <div className="flex items-center text-sm mt-4">
          <div className="h-0.5 bg-black flex-1"></div>
          <span>John johnson</span>
        </div>
      </div>
    </div>
  );
};

export default SectionBreak;