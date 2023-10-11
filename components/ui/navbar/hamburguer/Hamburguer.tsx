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
          <nav className='bg-[#f5e4ff] absolute top-[-2.2rem] right-[-1rem] h-screen w-64 p-4'>
            <ul className='flex flex-col gap-6 pt-16 text-right items-end'>
              <li>
                <Link
                  className='flex flex-row  text-center items-center gap-2'
                  href='/software'
                >
                  <span className=' text-lg'>Software</span>
                </Link>
              </li>
              <hr className='h-[2px] w-full bg-primary-color' />
              <li>
                <Link
                  className='flex flex-row text-center items-center gap-2'
                  href='/#plans'
                >
                  <span className=' text-lg'>Plans</span>
                </Link>
              </li>
              <hr className='h-[2px] w-full bg-primary-color' />
              <li className=''>
                <Link
                  className='flex text-center items-center gap-2'
                  href='/apply'
                >
                  <span className=' text-lg'>Partner</span>
                </Link>
              </li>
              <hr className='h-[2px] w-full bg-primary-color' />{' '}
              <li>
                <Link
                  className='flex flex-col text-center items-center gap-2'
                  href='/dashboard'
                >
                  <span className='text-lg'>Dashboard</span>
                </Link>
              </li>
              <hr className='h-[2px] w-full bg-primary-color' />
            </ul>
            <div className='absolute top-[85vh] '>
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
