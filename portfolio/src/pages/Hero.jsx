import React from "react";
import Header from "../components/hero/Header";
import Body from "../components/hero/Body";



const Hero = () => {

  return (
    <div className="mt-22 w-full flex justify-center items-center font-space-mono">
      <div className="w-[1100px] h-full">
        {/* Header */}
        <Header />
        {/* Body */}
        <Body/>
      </div>
    </div>
  );
};

export default Hero;
