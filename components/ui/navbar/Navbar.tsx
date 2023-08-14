import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ConnectButtom } from '@/components/ui/connectbuttom/ConnectButtom'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className='px-2 flex flex-col items-center justify-between w-full bg-gradient-to-r from-[#ffcffc] to-[#fff7c4]'>
      <div className='flex z-10 w-full items-center justify-between font-mono text-sm pt-10 pb-10 lg:w-[75%] text-neutral-600'>
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
          <Link className='group relative inline-block ' href='/startups'>
            Startups
            <span className='ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-purple-400 transition-all duration-500 group-hover:w-full'></span>
          </Link>
          <Link className=' group relative inline-block ' href='/plans'>
            Planes
            <span className='ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-purple-400 transition-all duration-500 group-hover:w-full'></span>
          </Link>
          <Link className=' group relative inline-block ' href='/apply'>
            Postulate
            <span className='ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-purple-400 transition-all duration-500 group-hover:w-full'></span>
          </Link>
        </div>
        <div>
          <ConnectButtom />
        </div>
      </div>
    </nav>
  )
}
