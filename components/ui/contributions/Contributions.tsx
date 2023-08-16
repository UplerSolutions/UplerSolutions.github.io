import React from 'react'
import { FaBeer } from 'react-icons/fa'
export const Contributions = () => {
  return (
    <main className='hidden pb-6 sm:flex justify-center items-center lg:pb-10 bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] text-neutral-700'>
      <div className=' flex justify-center items-center mt-10 w-4/5 lg:w-[74%] border rounded-[40px] bg-white bg-opacity-50 '>
        <div className='flex flex-col justify-center items-center h-20 w-full'>
          <span className=' text-3xl pt-2 pb-2 text-primary-color leading-5'>
            {10+"K+"}
          </span>
          <span className='text-xl'>Available Software</span>
        </div>
        <div className='flex flex-col  justify-center items-center h-20 w-full'>
          <span className=' text-3xl pt-2 pb-2 text-primary-color leading-5'>
          {32+"K+"}
          </span>
          <span className='text-xl'>Subscribers</span>
        </div>
        <div className='flex flex-col justify-center items-center h-20 w-full'>
          <span className=' text-3xl pt-2 pb-2 text-primary-color leading-5'>
            {"$23k+"}
          </span>
          <span className='text-xl'>In Profits for Partners</span>
        </div>
        <div className='flex flex-col justify-center items-center h-20 w-full'>
        <span className=' text-3xl pt-2 pb-2 text-primary-color leading-5'>
            {"$23k+"}
          </span>
          <span className='text-xl'>Total Saved by Users</span>
        </div>
      </div>
    </main>
  )
}
