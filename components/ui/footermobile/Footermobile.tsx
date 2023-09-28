import React from 'react'
import Link from 'next/link'
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGreaterThan,
  FaTwitter
} from 'react-icons/fa'
import Image from 'next/image'

export const Footermobile = () => {
  return (
    <footer className='w-full bg-neutral-600 flex flex-col items-center justify-center text-white h-auto pb-36 pt-10 gap-6 md:hidden'>
      <div className='flex flex-col w-[100%] px-[50px] gap-8'>
        <div className='flex flex-col gap-2 '>
          <Image
            height={80}
            width={180}
            src='/whitelogo.png'
            alt=''
            className=''
          />
          <h3 className='text-md pt-6 pb-2'>
            Everything you need for your profession in a single subscription.
          </h3>
        </div>

        <div className='flex justify-start gap-6 items-center pt-4 w-[110%] sm:w-full'>
          <Link className='group relative inline-block ' href='/software'>
            Software
            <span className='ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-neutral-400 transition-all duration-500 group-hover:w-[65px]'></span>
          </Link>
          <Link className=' group relative inline-block ' href='/plans'>
            Bundles
            <span className='ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-neutral-400 transition-all duration-500 group-hover:w-[60px]'></span>
          </Link>
          <Link
            className=' group relative inline-block text-center'
            href='/apply'
          >
            Become Our Partner
            <span className='ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-neutral-400 transition-all duration-500 group-hover:w-full'></span>
          </Link>
        </div>

        <div className='flex flex-col pr-3 gap-2 pt-4'>
          <h1 className='font-semibold text-lg pb-3'>Recognized by</h1>
          <Image
            height={150}
            width={300}
            src='/microsoft.png'
            alt=''
            className='w-[300px]'
          />
        </div>

        <div className='flex flex-col gap-2 py-4 '>
          <h1 className='font-semibold text-lg pb-3'>Contact Us</h1>
          <span>upler.official@gmail.com</span>
        </div>
        <hr className='pt-6' />
        <div className='flex items-center justify-between'>
          <div className='flex'>
            <span className=''>Upler © 2023</span>
          </div>
          <div className='flex gap-3 text-2xl'>
            <Link href='https://discord.com/' target=' blank'>
              <FaDiscord className=' hover:scale-[1.05] hover:text-neutral-300' />
            </Link>
            <Link href='https://www.instagram.com/upler.ok/' target=' blank'>
              <FaInstagram className=' hover:scale-[1.05] hover:text-neutral-300' />
            </Link>
            <Link
              href='https://www.linkedin.com/company/upler/'
              target=' blank'
            >
              <FaLinkedin className=' hover:scale-[1.05] hover:text-neutral-300' />
            </Link>
            <Link href='https://youtube.com' target=' blank'>
              <FaYoutube className=' hover:scale-[1.05] hover:text-neutral-300' />
            </Link>
            <Link href='https://twitter.com/UplerOfficial' target=' blank'>
              <FaTwitter className=' hover:scale-[1.05] hover:text-neutral-300' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
