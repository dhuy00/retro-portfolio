import React from 'react'

const Interest = () => {
  const interests = [
    {
      id: 1,
      name: 'Open Source',
      description: 'Contributing to React, Next.js, and TypeScript projects'
    },
    {
      id: 2,
      name: 'Web Performance',
      description: 'Obsessed with Core Web Vitals and optimization techniques'
    },
    {
      id: 3,
      name: 'Design System',
      description: 'Building scalable component libraries and design tokens'
    },
    {
      id: 4,
      name: 'AI & ML',
      description: 'Exploring LLMs and their applications in web development'
    },
  ]
  return (
    <div className='bg-card border-2 border-primary/30 grid grid-cols-2 p-16 gap-y-8 w-[1200px]'>
      {interests.map((item) => (
        <div className='border-l-4 border-accent pl-10 pt-4 py-2 flex flex-col gap-2 h-[90px]'>
          <div className='font-press-start text-xs text-primary'>{item.name}</div>
          <div className='font-orbitron text-muted-foreground'>{item.description}</div>
        </div>
      ))}
    </div>
  )
}

export default Interest
