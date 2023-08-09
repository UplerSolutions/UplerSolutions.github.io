import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='flex flex-col items-center justify-evenly w-full'>
      <div className='flex z-10 w-full items-center justify-evenly font-mono text-sm lg:flex pt-10 pb-10 lg:pb-60'>
        <Link className='' href='/'>
          <img
            className=' w-[200px] md:w-64 min-w-full'
            src='/latamplixlogo.png'
            alt='Latamplix Logo'
          />
        </Link>
        <div className='w-0 invisible text-lg lg:visible lg:w-auto'>
          <Link className='p-6' href='/aboutUs'>
            Nosotros
          </Link>
          <Link className='p-6' href='/startups'>
            Startups
          </Link>
          <Link className='p-6' href='/companyEvents'>
            Eventos
          </Link>
          <Link className='p-6' href='/apply'>
            Postulate
          </Link>
        </div>
        <div>
          <ConnectButton />
        </div>
      </div>
    </nav>
  )
}
