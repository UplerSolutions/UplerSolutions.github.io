import Image from 'next/image'
import { Inter } from 'next/font/google'
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
          <Link className='group relative inline-block ' href='/software'>
            SOFTWARE
            <span className='ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full'></span>
          </Link>
          <Link className=' group relative inline-block ' href='/plans'>
            BUNDLES
            <span className='ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full'></span>
          </Link>
          <Link className=' group relative inline-block ' href='/apply'>
            BECOME OUR PARTNER
            <span className='ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full'></span>
          </Link>
        </div>
        <div className='flex gap-3'>
          <Link className='' href='/login'>
            <button className='group relative inline-block overflow-hidden rounded-xl border border-fuchsia-100 bg-fuchsia-200 px-2 lg:px-6 py-3 text-sm font-semibold text-primary-color hover:text-primary-color focus:outline-none focus:ring active:bg-primary-color active:text-white'>
              <span className='ease absolute left-0 top-0 h-0 w-0 border-t-2 border-primary-color transition-all duration-500 group-hover:w-full'></span>
              <span className='ease absolute right-0 top-0 h-0 w-0 border-r-2 border-primary-color transition-all duration-500 group-hover:h-full'></span>
              <span className='ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full'></span>
              <span className='ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-primary-color transition-all duration-500 group-hover:h-full'></span>
              Login
            </button>
          </Link>

          <Link className='' href='/signup'>
            <button className='group relative px-2 lg:px-6 bg-primary-color h-11 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'>
              Signup
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
