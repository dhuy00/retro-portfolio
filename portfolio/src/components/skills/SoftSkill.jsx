import React from 'react'
import { FaTrophy } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";

const SoftSkill = () => {
  const certifications = [
    {
      id: 0,
      name: "Problem Solving",
    },
    {
      id: 1,
      name: "Team Leadership",
    },
    {
      id: 2,
      name: "Code Review",
    },
    {
      id: 3,
      name: "Technical Writing",
    },
    {
      id: 4,
      name: "Mentoring",
    },
    {
      id: 5,
      name: "Agile/Scrum",
    },
  ]
  return (
    <div className='w-1/2 bg-card border-2 border-accent p-8'>
      <div className='flex items-center font-press-start gap-2'>
        <FaBook className='text-lg text-accent'/>
        <span className='text-[14px] text-accent'>SOFT SKILLS</span>
      </div>
      <div className='flex gap-4 mt-4 flex-wrap'>
        {
          certifications.map((item) => (
            <div className='border-2 border-accent flex justify-between py-2 px-3 font-orbitron
            text-[12px]'>
              {item.name}
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SoftSkill
