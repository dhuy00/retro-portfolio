import React from "react";
import { LuGamepad2 } from "react-icons/lu";

const NameIcon = () => {
  return (
  <div className="flex gap-2 items-center">
    <LuGamepad2 className="text-3xl text-primary"/>
    <span className="font-orbitron font-bold tracking-wider">DUCHUY.DEV</span>
  </div>
  );
};

export default NameIcon;
