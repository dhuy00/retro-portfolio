import React from 'react'

const Story = () => {
  const paragraph = [
    {
      id: 1,
      text: `Started coding at 14, building simple websites in my bedroom. Fast forward to today, I've shipped products used by millions of users and led engineering teams at fast-growing startups.`,
      color: "primary",
    },
    {
      id: 2,
      text: `Passionate about building intuitive, performant web applications that solve real problems. I believe great software is a blend of clean code, thoughtful design, and user empathy.`,
      color: "accent",
    },
    {
      id: 3,
      text: `When I'm not coding, you'll find me contributing to open source, writing technical articles, or mentoring junior developers in the community.`,
      color: "secondary",
    },
  ]
  return (
    <div className='border-2 border-primary/30 p-8 bg-card w-[1100px] font-orbitron tracking-wider 
    flex flex-col gap-8 text-[16px]'>
      {
        paragraph.map((item) => (
          <div className='flex items-start gap-4 leading-normal'>
            <span className={`w-3 h-3 mt-2 bg-${item.color}`}></span>
            <p>{item.text}</p>
          </div>
        ))
      }
    </div>
  )
}

export default Story
