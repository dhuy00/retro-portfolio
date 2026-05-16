// ContactForm.tsx
import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-card border-primary/50 border-2 p-5 sm:p-8 w-full lg:flex-1">
      <h3 className="font-press-start text-primary text-sm sm:text-base">
        SEND MESSAGE
      </h3>

      <div className="flex flex-col gap-4 mt-6 font-orbitron">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-muted-foreground text-sm sm:text-base">
            Name
          </label>

          <input
            className="border-2 border-primary/50 py-3 px-4 w-full bg-background focus:outline-none 
            focus:border-accent/90 transition text-sm sm:text-base"
            type="text"
            placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-muted-foreground text-sm sm:text-base">
            Email
          </label>

          <input
            className="border-2 border-primary/50 py-3 px-4 w-full bg-background focus:outline-none 
            focus:border-accent/90 transition text-sm sm:text-base"
            type="email"
            placeholder="your@email.com"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-muted-foreground text-sm sm:text-base">
            Message
          </label>

          <textarea
            className="border-2 border-primary/50 py-3 px-4 w-full bg-background focus:outline-none 
            focus:border-accent/90 transition h-32 sm:h-40 resize-none text-sm sm:text-base"
            placeholder="Write your message..."
          />
        </div>
      </div>

      {/* Button */}
      <button className="text-primary-foreground bg-primary border-2 border-primary 
      shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:shadow-[0_0_30px_rgba(255,0,255,0.6)] transition-all duration-300 px-8 py-3 w-full mt-6 font-orbitron text-sm sm:text-base">
        SEND MESSAGE
      </button>
    </div>
  );
};

export default ContactForm;