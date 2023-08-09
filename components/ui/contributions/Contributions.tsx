import React from 'react'
import { FaBeer } from 'react-icons/fa'
export const Contributions = () => {
  return (
    <main className='pb-6 flex justify-center items-center lg:pb-10'>
      <div className=' flex justify-center items-center mt-10 w-4/5 lg:w-[75%] border rounded-[40px]'>
        <div className='flex flex-col justify-center items-center h-20 w-full'>
          <span className=' text-xl pt-2 pb-2 font-bold text-purple-500 leading-5'>
            {0}
          </span>
          <span className=''>Proyectos</span>
        </div>
        <div className='flex flex-col pt-2 pb-2 justify-center items-center h-20 w-full'>
          <span className=' text-xl font-bold text-purple-500 leading-5'>
            U$D {0}
          </span>
          <span className=''>Destinados a creadores</span>
        </div>
        <div className='flex flex-col pt-2 pb-2 justify-center items-center h-20 w-full'>
          <span className=' text-xl font-bold text-purple-500 leading-5'>
            {0}
          </span>
          <span className=''>Contribuciones</span>
        </div>
      </div>
    </main>
  )
}
