import React from 'react'
import Link from 'next/link'
import { PiRocket, PiClipboard } from 'react-icons/pi'
import { BiPackage } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'

export const Navbarmobile = () => {
  return (
    <nav className='flex lg:hidden items-center justify-center w-full '>
      <div className='text-[#b96fe7] flex z-10 w-full text-lg items-center justify-center font-mono lg:hidden bg-[#fae3ff] pt-3 pb-3 gap-3 fixed bottom-0 h-[45px]'>
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
          href='#plans'
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
