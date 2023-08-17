import React from 'react'
import Link from 'next/link'
import { PiRocket,PiClipboard } from 'react-icons/pi'
import { BiPackage } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'

export const Navbarmobile = () => {
  return (
    <nav className='flex items-center justify-center w-full h-[40px]'>
      <div className='flex z-10 w-full text-lg items-center justify-center font-mono lg:hidden bg-neutral-100 text-neutral-700 pt-3 pb-3 gap-3 fixed bottom-0 h-[50px]'>
        <Link className='flex flex-col w-1/6 text-center items-center' href='/'>
          <AiOutlineHome />
          <span className=' text-xs'>Home</span>
        </Link>
        <Link
          className='flex flex-col w-1/6 text-center items-center'
          href='/software'
        >
          <PiRocket />
          <span className=' text-xs'>Software</span>
        </Link>
        <Link
          className='flex flex-col w-1/6 text-center items-center'
          href='/plans'
        >
          <BiPackage />
          <span className=' text-xs'>Plans</span>
        </Link>
        <Link
          className='flex flex-col w-1/6 text-center items-center'
          href='/apply'
        >
          <PiClipboard />
          <span className=' text-xs'>Partner</span>
        </Link>
      </div>
    </nav>
  )
}
