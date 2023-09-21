import React, { useState } from 'react'
import { data } from '../../../data/benefits'
import Image from 'next/image'

export const Benefits = () => {
  const [benefits, setBenefits] = useState(data)

  return (
    <div className='flex flex-row w-[100%] pb-8 2xl:py-20 md:mb-0 items-center justify-center bg-zinc-100 text-center }'>
      <div className='flex flex-col  px-8 w-[90%] md:w-[75%] items-center text-center bg-zinc-50 rounded-3xl lg:pt-5 pb-5'>
        <div className='flex max-w-fit h-fit text-center'>
          <h2 className='py-8 text-3xl md:ml-12 lg:ml-0 lg:px-0 md:text:5xl lg:text-6xl md:pb-4 lg:pb-10 font-bold text-neutral-700 '>
            Why customers choose Upler?
          </h2>
        </div>
        <div className=' 2xl:grid 2xl:grid-cols-3 md:grid md:grid-cols-2 text-center w-[100%] flex flex-col gap-7'>
          {benefits.map((benefit) => (
            <div
              className='grid grid-rows-2  align-center  justify-items-center  xl:m-6 lg:p-8 items-end md:items-start'
              key={benefit.title}
            >
              <div>
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={95}
                  height={95}
                />
              </div>
              <div className='flex flex-col gap-3 md:gap-1'>
                <h4 className=' text-2xl md:text-[32px] text-black pb-2'>
                  {benefit.title}
                </h4>
                <p className='text-neutral-700 text-lg'>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
