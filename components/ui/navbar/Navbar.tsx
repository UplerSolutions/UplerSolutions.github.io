import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ConnectButtom } from '@/components/ui/connectbuttom/ConnectButtom'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='flex flex-col items-center justify-evenly w-full'>
      <div className='flex z-10 w-full items-center justify-evenly font-mono text-sm pt-10 pb-10 lg:pb-32'>
        <Link className='' href='/'>
          <img
            className=' w-[200px] md:w-64 min-w-full'
            src='/latamplixlogo.png'
            alt='Latamplix Logo'
          />
        </Link>
        <div className='hidden text-lg  lg:block lg:w-auto pr-12'>
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
          <ConnectButtom />
        </div>
      </div>
    </nav>
  )
}
