import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const PersonalInfo = () => {
  return (
    <div className="fixed top-[45%] text-muted-foreground right-[3%] flex flex-col text-[35px] gap-3">
      <a
        className="hover:text-[#6e4bd6] transition-colors"
        href="https://www.linkedin.com/in/huy-duc-abb718356/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a
        className="hover:text-[#6e4bd6] transition-colors"
        href="https://github.com/dhuy00"
        target="_blank"
      >
        <FaGithubSquare />
      </a>
    </div>
  );
};

export default PersonalInfo;
