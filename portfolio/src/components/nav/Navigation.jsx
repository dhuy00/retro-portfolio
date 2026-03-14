import React, { useState } from "react";
import NameIcon from "./NameIcon";

const Navigation = () => {
  const nav = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Skills",
    },
    {
      id: 4,
      text: "Work",
    },
    {
      id: 5,
      text: "Experience",
    },
    {
      id: 6,
      text: "Logs",
    },
  ];

  const [activeTab, setActiveTab] = useState(1);

  const handleSwicthTab = (id) => {
    setActiveTab(id);
  }

  return (
    <div
      className="bg-white fixed top-0 left-0 right-0 px-4 py-2 flex border-2 border-black
    justify-between items-center font-space-mono font-bold pr-32 shadow-hard mr-2 box-border"
    >
      <NameIcon />
      <div className="gap-8 flex items-center ">
        {nav.map((item) => (
          <span className={`hover:bg-[#51A2FF] px-4 py-1.5 border hover:border hover:border-black 
          cursor-pointer ${activeTab === item.id ? 'bg-[#FFDF20] pointer-events-none border-black' : 'border-transparent '}`}
          onClick={() => handleSwicthTab(item.id)}>
            /{item.text.toUpperCase()}
          </span>
        ))}
        <button className="bg-[#05DF72] px-4 py-1.5 border">CONTACT</button>
      </div>
    </div>
  );
};

export default Navigation;
