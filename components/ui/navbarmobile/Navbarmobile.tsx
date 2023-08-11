import Image from 'next/image'
import { Inter } from 'next/font/google'
import React from 'react'
import Link from 'next/link'
import { PiRocket } from 'react-icons/pi'
import { BsCalendar4Week } from 'react-icons/bs'
import { FaRegHeart, FaRegUser } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai'

export const Navbarmobile = () => {
  return (
    <nav className='flex items-center justify-center w-full '>
      <div className='flex z-10 w-full text-lg items-center justify-center font-mono lg:hidden bg-neutral-100 text-neutral-700 pt-3 pb-3 gap-3 fixed bottom-0'>
        <Link className='flex flex-col w-1/6 text-center items-center' href='/'>
          <AiOutlineHome />
          <span className=' text-xs'>Home</span>
        </Link>
        <Link
          className='flex flex-col w-1/6 text-center items-center'
          href='/startups'
        >
          <PiRocket />
          <span className=' text-xs'>Startups</span>
        </Link>
        <Link
          className='flex flex-col w-1/6 text-center items-center'
          href='/companyEvents'
        >
          <BsCalendar4Week />
          <span className=' text-xs'>Eventos</span>
        </Link>
        <Link
          className='flex flex-col w-1/6 text-center items-center'
          href='/apply'
        >
          <FaRegHeart />
          <span className=' text-xs'>Favoritos</span>
        </Link>
        <Link
          className='flex flex-col w-1/6 text-center items-center '
          href='/apply'
        >
          <FaRegUser />
          <span className=' text-xs'>Perfil</span>
        </Link>
      </div>
    </nav>
  )
}
