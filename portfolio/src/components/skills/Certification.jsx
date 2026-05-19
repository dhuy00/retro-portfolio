import React from "react";
import { FaTrophy } from "react-icons/fa6";

const Certification = () => {
  const certifications = [
    {
      id: 0,
      name: "TOEIC Speaking & Writing - 320",
      year: 2025,
    },
    {
      id: 1,
      name: "TOEIC Reading & Listening - 945",
      year: 2025,
    },
  ];

  return (
    <div className="w-full lg:w-1/2 bg-card border-2 border-primary/50 rounded-lg p-5 sm:p-6 md:p-8">
      <div className="flex items-center gap-2 font-press-start">
        <FaTrophy className="text-base sm:text-lg text-yellow-500" />

        <span className="text-[12px] sm:text-[14px] text-primary">
          CERTIFICATIONS
        </span>
      </div>

      <div className="flex flex-col gap-4 mt-5">
        {certifications.map((item) => (
          <div
            key={item.id}
            className="border-l-4 border-accent flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-2 pl-4 font-orbitron text-[13px] sm:text-[14px] font-medium text-foreground"
          >
            <span className="break-words">{item.name}</span>

            <span className="text-accent shrink-0">{item.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;