import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import Signin from '../signin/Signin'

export const Navbar = () => {
  return (
    <nav className='px-2 mb-10 flex flex-col items-center justify-between w-full bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] fixed z-50 h-[80px]'>
      <div className='flex z-10 w-full items-center justify-between font-mono text-sm pt-4 pb-4 md:w-[90%] xl:w-[80%] text-neutral-600'>
        <Link className='' href='/'>
          <Image
            className=' w-[150px] md:w-40 min-w-full'
            src='/uplerlogo.png'
            alt='global Logo'
            width={100}
            height={100}
          />
        </Link>
        <div className='hidden text-lg lg:w-auto lg:flex gap-9'>
          <Link className='group relative inline-block ' href='/software'>
            SOFTWARE
            <span className='ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full'></span>
          </Link>
          <Link className='group relative inline-block ' href='/#plans'>
            BUNDLES
            <span className='ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full'></span>
          </Link>
          <Link className=' group relative inline-block ' href='/apply'>
            BECOME OUR PARTNER
            <span className='ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full'></span>
          </Link>
        </div>
        <div className='flex gap-3'>
          <Signin />
        </div>
      </div>
    </nav>
  )
}
