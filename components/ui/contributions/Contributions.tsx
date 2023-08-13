import React from 'react'
import { FaBeer } from 'react-icons/fa'
export const Contributions = () => {
  return (
    <main className='hidden pb-6 sm:flex justify-center items-center lg:pb-10 bg-gradient-to-r from-[#FFAAF8] to-[#FFF6AE] text-neutral-700'>
      <div className=' flex justify-center items-center mt-10 w-4/5 lg:w-[74%] border rounded-[40px] bg-white bg-opacity-50 '>
        <div className='flex flex-col justify-center items-center h-20 w-full'>
          <span className=' text-3xl pt-2 pb-2 text-purple-500 leading-5'>
            {0}
          </span>
          <span className='text-xl'>Planes Disponibles</span>
        </div>
        <div className='flex flex-col  justify-center items-center h-20 w-full'>
          <span className=' text-3xl pt-2 pb-2 text-purple-500 leading-5'>
            U$D {0}
          </span>
          <span className='text-xl'>Destinados a creadores</span>
        </div>
        <div className='flex flex-col justify-center items-center h-20 w-full'>
          <span className=' text-3xl pt-2 pb-2 text-purple-500 leading-5'>
            {0}
          </span>
          <span className='text-xl'>Colaboraciones</span>
        </div>
      </div>
    </main>
  )
}
