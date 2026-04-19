import React from 'react'
import { FaTrophy } from "react-icons/fa6";

const Certification = () => {
  const certifications = [
    {
      id: 0,
      name: "AWS Certified Developer",
      year: 2025
    },
    {
      id: 1,
      name: "TOEIC Reading & Listening - 945",
      year: 2025
    },
  ]
  return (
    <div className='w-1/2 bg-card border-2 border-primary p-8'>
      <div className='flex items-center font-press-start gap-2'>
        <FaTrophy className='text-lg text-yellow-500'/>
        <span className='text-[14px] text-primary'>CERTIFICATIONS</span>
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        {
          certifications.map((item) => (
            <div className='border-l-4 border-accent flex justify-between py-2 pl-4 font-orbitron
            text-[14px] font-medium'>
              <span>{item.name}</span>
              <span className='text-accent'>{item.year}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Certification
