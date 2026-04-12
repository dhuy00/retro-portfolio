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
  };

  return (
    <div
      className="bg-background/80 border-b-2 border-primary/50 fixed top-0 left-0 right-0 backdrop-blur-sm
      py-3 px-12 flex items-center justify-between z-50"
    >
      <NameIcon />
      <div className="font-orbitron gap-12 flex text-sm font-semibold mr-24">
        {nav.map((item) => (
          <a
            onClick={() => handleSwicthTab(item.id)}
            className={`cursor-pointer hover:text-accent transition-colors ${activeTab === item.id ? 'text-accent' : ''}`}
          >
            {item.text.toUpperCase()}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
