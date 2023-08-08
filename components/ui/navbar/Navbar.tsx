import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='flex flex-col items-center justify-between p-4 ${inter.className}'>
      <div className='flex z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex pt-10 pb-60'>
        <Link className='' href='/'>
          <img
            className=' w-[200px] md:w-64 min-w-full'
            src='/latamplixlogo.png'
            alt='Latamplix Logo'
          />
        </Link>
        <div className='text-lg'>
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
