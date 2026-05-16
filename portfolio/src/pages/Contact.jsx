import React from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

const Contact = () => {
  return (
    <div className="w-full relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0820] via-[#1a0f2e] to-[#0f0820]" />

      <div className="relative flex flex-col items-center px-4">
        <h1 className="font-press-start text-2xl sm:text-4xl md:text-5xl text-center leading-relaxed">
          <span className="text-primary">
            GET IN <span className="text-accent">TOUCH</span>
          </span>
        </h1>

        <span className="text-muted-foreground font-orbitron text-sm sm:text-base text-center mt-3">
          Let's build something amazing together
        </span>

        <div className="w-full max-w-2xl relative flex flex-col lg:flex-row gap-6 mt-10 items-stretch justify-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;