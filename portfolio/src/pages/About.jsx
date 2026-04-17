import React from "react";
import { SiThestorygraph } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";


const About = () => {
  const buttonStyle = `flex items-center gap-2 px-8 py-4 border-2 border-muted-foreground/30 
  text-muted-foreground hover:border-accent hover:text-accent`
  return (
    <div className="w-screen relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0820] via-[#1a0f2e] to-[#0f0820]" />
      <div className="relative flex flex-col items-center gap-8">
        <h1 className="font-press-start text-[3rem] text-accent">
          ABOUT <span className="text-primary">ME</span>
        </h1>
        <div className="flex gap-4 font-orbitron">
          <button className={buttonStyle}>
            <SiThestorygraph/>
            <span>MY STORY</span>
          </button>
          <button className={buttonStyle}>
            <FaRegHeart/>
            <span>INTERESTS</span>
          </button>
          <button className={buttonStyle}>
            <FaBullseye/>
            <span>VALUES</span>
          </button>
        </div>
        <div>
          <div>
            <span></span>
            <p>
              Started coding at 14, building simple websites in my bedroom. Fast
              forward to today, I've shipped products used by millions of users
              and led engineering teams at fast-growing startups.
            </p>
          </div>
          <div>
            <span></span>
            <p>
              Passionate about building intuitive, performant web applications
              that solve real problems. I believe great software is a blend of
              clean code, thoughtful design, and user empathy.
            </p>
          </div>
          <div>
            <span></span>
            <p>
              When I'm not coding, you'll find me contributing to open source,
              writing technical articles, or mentoring junior developers in the
              community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
