import React from 'react'

export const Roadmap = () => {
  return (
    <div className='bg-purple-100 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 text-center'>
          Roadmap
        </h2>

        <div className='flex justify-center'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {roadmapData.map((item, index) => (
              <div key={index} className='bg-white rounded-lg shadow-md p-6 '>
                <h3 className='text-gray-800 text-xl sm:text-2xl font-semibold mb-4'>
                  {item.title}
                </h3>
                <ul className='list-disc ml-6'>
                  {item.tasks.map((task, taskIndex) => (
                    <li key={taskIndex} className='text-gray-700'>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const roadmapData = [
  {
    title: 'Q4 2023',
    tasks: ['MVP Development']
  },
  {
    title: 'Q1 2024',
    tasks: [
      'Referral System Integration',
      'Packages & Payment Gateway',
      'Functional Marketplace & User Panel',
      'Upler Referral Program'
    ]
  },
  {
    title: 'Q2 2024',
    tasks: ['AI Software Advisory', 'Balance Implementation']
  },
  {
    title: 'Q3 2024',
    tasks: ['Payment Streaming']
  },
  {
    title: 'Q4 2024 - Q4 2025',
    tasks: [
      'Enhancements & Iterations',
      'Market Expansion',
      'Partnerships & Collaborations'
    ]
  }
]

export default Roadmap
