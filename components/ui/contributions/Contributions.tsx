import React from 'react'
import { FaBeer } from 'react-icons/fa'
export const Contributions = () => {
  return (
    <main className=' pb-6 md:flex md:flex-nowrap justify-center items-center lg:pb-10 bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] text-neutral-700'>
      <div className='flex-wrap gap-3 md-gap-0 w-full items-center justify-center md:flex-nowrap flex justify-center items-center py-4 md:w-4/5 lg:w-[74%] border rounded-[40px] bg- md:bg-white md:bg-opacity-[0.5] '>
        <div className='flex flex-col justify-center items-center h-20 w-[170px] text-center md:w-full'>
          <span className=' text-3xl pt-2 pb-2 text-primary-color leading-5'>
            {10+"K+"}
          </span>
          <span className='text-xl'>Available Software</span>
        </div>
        <div className='flex flex-col  justify-center items-center h-20 w-[170px] text-center md:w-full'>
          <span className=' text-3xl pt-2 pb-2 text-primary-color leading-5'>
          {32+"K+"}
          </span>
          <span className='text-xl'>Subscribers</span>
        </div>
        <div className='flex flex-col justify-center items-center h-20 w-[170px] text-center md:w-full'>
          <span className=' text-3xl pt-2 pb-2 text-primary-color leading-5'>
            {"$23k+"}
          </span>
          <span className='text-xl'>In Profits for Partners</span>
        </div>
        <div className='flex flex-col justify-center items-center h-20 w-[170px] text-center md:w-full'>
        <span className=' text-3xl pt-2 pb-2 text-primary-color leading-5'>
            {"$23k+"}
          </span>
          <span className='text-xl'>Total Saved by Users</span>
        </div>
      </div>
    </main>
  )
}
