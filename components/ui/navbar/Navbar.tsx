import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ConnectButtom } from '@/components/ui/connectbuttom/ConnectButtom'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='px-2 flex flex-col items-center justify-between w-full bg-gradient-to-r from-[#FFAAF8] to-[#FFF6AE]'>
      <div className='flex z-10 w-full items-center justify-between font-mono text-sm pt-10 pb-10 lg:pb-32 lg:w-[75%] text-neutral-600'>
        <Link className='' href='/'>
          <img
            className=' w-[150px] md:w-40 min-w-full'
            src='/uplerlogo.png'
            alt='global Logo'
          />
        </Link>
        <div className='hidden text-lg  lg:block lg:w-auto'>
          <Link className='p-6' href='/startups'>
            Startups
          </Link>
          <Link className='p-6' href='/plans'>
            Planes
          </Link>
          <Link className='p-6' href='/apply'>
            Postulate
          </Link>
        </div>
        <div>
          <ConnectButtom />
        </div>
      </div>
    </nav>
  )
}
