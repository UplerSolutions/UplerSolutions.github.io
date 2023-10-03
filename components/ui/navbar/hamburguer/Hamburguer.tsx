import React, { useState } from 'react'
import Signin from '../../signin/Signin'
import Link from 'next/link'
import { PiRocket, PiClipboard } from 'react-icons/pi'
import { BiPackage } from 'react-icons/bi'
import { AiOutlineHome } from 'react-icons/ai'

export const Hamburguer = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='relative md:hidden'>
      {isOpen && (
        <div>
          <nav className='bg-white absolute top-[-2.2rem] right-[-0.5rem] h-screen w-64 p-4'>
            <ul className='flex flex-col gap-4 pt-16'>
              <li>
                <Link
                  className='flex flex-row  text-center items-center gap-2'
                  href='/'
                >
                  <AiOutlineHome />
                  <span className='text-md'>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  className='flex flex-row  text-center items-center gap-2'
                  href='/software'
                >
                  <PiRocket />
                  <span className=' text-md'>Software</span>
                </Link>
              </li>
              <li>
                <Link
                  className='flex flex-row text-center items-center gap-2'
                  href='#plans'
                >
                  <BiPackage />
                  <span className=' text-md'>Plans</span>
                </Link>
              </li>
              <li className='flex'>
                <Link
                  className='flex text-center items-center gap-2'
                  href='/apply'
                >
                  <PiClipboard />
                  <span className=' text-md'>Partner</span>
                </Link>
              </li>
            </ul>
            <div className='absolute bottom-10 right-10'>
              <Signin />
            </div>
          </nav>
        </div>
      )}
      <button
        onClick={handleClick}
        className={`flex flex-col justify-center items-center ${
          isOpen ? '' : '' // we can add styles when is open
        }`}
      >
        <span
          className={`bg-primary-color block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
        ></span>
        <span
          className={`bg-primary-color block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
        ></span>
        <span
          className={`bg-primary-color block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
        ></span>
      </button>
    </div>
  )
}
