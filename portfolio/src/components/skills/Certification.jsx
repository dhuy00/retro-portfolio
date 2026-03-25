import React from 'react'
import { IoColorPaletteOutline } from "react-icons/io5";

const CertificationItem = ({item}) => {
  return (
    <div className={`flex flex-col py-6 px-8 pr-12 border-4 gap-4 w-[300px] ${item.color}`}>
      <span className='border-2 w-fit bg-white px-4 py-0.5 text-sm font-semibold'>{item.year}</span>
      <span className='font-semibold text-lg'>{item.name}</span>
    </div>
  )
}

const Certification = () => {
  const certifications = [
    {
      id: 1,
      name: "AWS Certified Developer",
      year: 2026,
      color: 'bg-yellow-300'
    },
    {
      id: 2,
      name: "945 - TOEIC Reading & Listening",
      year: 2026,
      color: 'bg-blue-400'
    },
    {
      id: 3,
      name: "320 - TOEIC Speaking & Writing",
      year: 2026,
      color: 'bg-green-400'
    },
  ]
  return (
    <div className='my-8'>
      <div className='flex items-center gap-4 text-[1.8rem] font-mono-space'>
        <IoColorPaletteOutline className='text-[2.2rem]'/>
        <span className='font-semibold'>CERTIFICATIONS</span>
      </div>
      {/* List */}
      <div className='flex gap-4 mt-4'>
        {certifications.map((item) => (
          <CertificationItem item={item}/>
        ))}
      </div>
    </div>
  )
}

export default Certification
