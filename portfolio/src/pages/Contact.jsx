import React, { useState } from "react";
import { SiThestorygraph } from "react-icons/si";
import { FaRegHeart } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa6";
import Story from "../components/about/Story";
import { motion } from "motion/react";
import Interest from "../components/about/Interest";
import Values from "../components/about/Values";
import ExperienceCard from "../components/experience/ExperienceCard";
import Education from "../components/experience/Education";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

const Contact = () => {
  return (
    <div className="w-screen relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0820] via-[#1a0f2e] to-[#0f0820]" />

      <div className="relative flex flex-col items-center">
        <h1 className="font-press-start text-[3rem] text-accent">
          <span className="text-primary [word-spacing:-20px]">GET IN <span className="text-accent">TOUCH</span></span>
        </h1>
        <span className="text-muted-foreground font-orbitron">Let's build something amazing together</span>
        <div className="w-[1300px] relative flex gap-4 mt-8 justify-center">
          <ContactForm/>
          <ContactInfo/>
        </div>
      </div>
    </div>
  );
};

export default Contact;
