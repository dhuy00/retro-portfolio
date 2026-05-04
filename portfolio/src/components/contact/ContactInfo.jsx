import React from "react";
import { BiMapPin } from "react-icons/bi";

const ContactInfo = () => {
  const contact = [
    {
      id: 0,
      icon: "",
      text: "github.com/yourname",
    },
    {
      id: 1,
      icon: "",
      text: "linkedin.in/yourname",
    },
    {
      id: 2,
      icon: "",
      text: "twitter.com/yourname",
    },
    {
      id: 3,
      icon: "",
      text: "hello@yourname.dev",
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
      <div className="flex flex-col">
        <h3>CONNECT</h3>
        <div className="flex flex-col">
          {contact.map((item) => (
            <div>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
