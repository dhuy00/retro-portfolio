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
      name: "LinkedIn",
      text: "linkedin.com/in/yourname",
    },
    {
      id: 2,
      icon: <IoMailOutline />,
      name: "Email",
      text: "your@email.com",
    },
  ];

  return (
    <div className="w-full lg:w-[420px]">
      {/* Status */}
      <div className="bg-card border-2 border-accent/50 p-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse shrink-0" />

          <span className="text-accent font-press-start text-[9px] sm:text-[10px] leading-relaxed">
            STATUS: AVAILABLE FOR WORK
          </span>
        </div>
      </div>

      {/* Location */}
      <div className="bg-card border-2 border-primary/30 p-4 mt-4">
        <div className="flex items-center gap-3">
          <BiMapPin className="w-5 h-5 text-primary shrink-0" />

          <span className="font-orbitron text-sm sm:text-base">
            Ho Chi Minh City, Viet Nam
          </span>
        </div>
      </div>

      {/* Contact Links */}
      <div className="flex flex-col bg-card border-2 border-primary/50 mt-4 px-5 py-8 sm:px-6 
      sm:py-10 w-full">
        <h3 className="font-press-start text-xs sm:text-sm text-primary">
          CONNECT
        </h3>

        <div className="flex flex-col gap-6 mt-6 font-orbitron">
          {contact.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 items-start text-muted-foreground break-all"
            >
              <span className="text-2xl text-primary shrink-0">
                {item.icon}
              </span>

              <div className="flex flex-col">
                <span className="font-medium text-sm sm:text-base">
                  {item.name}
                </span>

                <span className="text-xs sm:text-sm">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;