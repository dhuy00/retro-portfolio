import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-card border-primary/50 border-2 p-8">
      <h3 className="font-press-start text-primary text-[16px]">
        SEND MESSAGE
      </h3>
      <div className="flex flex-col gap-4 mt-4 font-orbitron">
        <div className="flex flex-col gap-2">
          <label className="text-muted-foreground">Name</label>
          <input
            className="border-2 border-primary/50 py-2.5 px-4 w-112 bg-background focus:outline-none 
            focus:border-accent/90 transition"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-muted-foreground">Email</label>
          <input
            className="border-2 border-primary/50 py-2.5 px-4 w-112 bg-background focus:outline-none focus:border-accent/90 transition"
            type="text"
            placeholder="your@email.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-muted-foreground">Message</label>
          <textarea
            className="border-2 border-primary/50 py-2.5 px-4 w-112 bg-background focus:outline-none 
            focus:border-accent/90 transition h-32"
            type="text"
            placeholder="your@email.com"
          ></textarea>
        </div>
      </div>
      <button
        className="text-primary-foreground bg-primary border-2 border-primary 
          shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] 
          transition px-8 py-3 w-full mt-4 font-orbitron text-sm"
      >
        SEND MESSAGE
      </button>
    </div>
  );
};

export default ContactForm;
