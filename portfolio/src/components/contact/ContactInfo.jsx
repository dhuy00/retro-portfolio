import React from "react";
import { BiMapPin } from "react-icons/bi";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

const ContactInfo = () => {
  const contact = [
    {
      id: 0,
      icon: <LuGithub />,
      name: "Github",
      text: "github.com/yourname",
    },
    {
      id: 1,
      icon: <FiLinkedin />,
      name: "Linkedin",
      text: "linkedin.in/yourname",
    },
    {
      id: 2,
      icon: <IoMailOutline />,
      name: "Mail",
      text: "twitter.com/yourname",
    },
    {
      id: 2,
      icon: <IoMailOutline />,
      name: "Mail",
      text: "twitter.com/yourname",
    },
  ];
  return (
    <div>
      <div className="bg-card border-2 border-accent/50 p-5">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
          <span className="text-accent font-press-start text-[10px]">
            STATUS: AVAILABLE FOR WORK
          </span>
        </div>
      </div>
      {/* Availability */}
      <div className="bg-card border-2 border-primary/30 p-4 mt-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <BiMapPin className="w-5 h-5 text-primary" />
            <span style={{ fontFamily: "'Orbitron', sans-serif" }}>
              Ho Chi Minh City, Viet Nam
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-card border-2 border-primary/50 mt-4 p-6 w-128">
        <h3 className="font-press-start text-sm text-primary">CONNECT</h3>
        <div className="flex flex-col gap-6 mt-4 font-orbitron">
          {contact.map((item) => (
            <div className="flex gap-4 items-center text-muted-foreground">
              <span className="text-[24px] text-primary">{item.icon}</span>
              <div className="flex flex-col">
                <span className="font-medium">{item.name}</span>
                <span className="text-sm">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
