import React, { useRef } from 'react'
import Link from 'next/link'
import {
  FaDiscord,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTwitter
} from 'react-icons/fa'
import Image from 'next/image'
import { Footermobile } from '@/components/ui/footermobile/Footermobile'

export const Footer = () => {
  const partnerRef = useRef<HTMLAnchorElement>(null)

  const scrollToPartner = () => {
    if (partnerRef.current !== null) {
      partnerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  return (
    <div className='flex items-center justify-center flex-col bg-neutral-600 font-semibold w-[100%]'>
      <footer className='hidden md:flex lg:w-[97%] xl:w-[90%] 2xl:w-[100%] bg-neutral-600 flex-col-reverse text-white items-center justify-evenly h-auto pb-20 pt-10 md:flex-row lg:h-[350px] gap-6 lg:gap-0 md:items-start '>
        <div className='flex flex-col gap-2'>
          <Image
            height={150}
            width={150}
            src='/whitelogo.png'
            alt=''
            className='w-[200px]'
          />
          <h3 className='text-md pt-6 pb-2 w-52'>
            Everything you need for your profession in a single subscription.
          </h3>
          <div className='pt-4 flex'>
            <span className=''>Upler © 2023</span>
          </div>
        </div>

        <div className='flex flex-col gap-10 pt-4'>
          <Link
            className='group relative inline-block '
            href='/software'
            onClick={scrollToPartner}
            ref={partnerRef}
          >
            Software
            <span className='ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-neutral-400 transition-all duration-500 group-hover:w-[62px]'></span>
          </Link>
          <Link
            className=' group relative inline-block '
            href='#plans'
            onClick={scrollToPartner}
            ref={partnerRef}
          >
            Bundles
            <span className='ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-neutral-400 transition-all duration-500 group-hover:w-[57px]'></span>
          </Link>
          <Link
            className=' group relative inline-block '
            href='/apply'
            onClick={scrollToPartner}
            ref={partnerRef}
          >
            Become Our Partner
            <span className='ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-neutral-400 transition-all duration-500 group-hover:w-full'></span>
          </Link>
        </div>
        <div className='flex flex-col '>
          <div className='flex flex-col gap-2 py-4 '>
            <h1 className='font-semibold text-lg pb-3'>Contact Us</h1>
            <span>upler.official@gmail.com</span>
          </div>
          <div>
            <h1 className='font-semibold text-lg py-3 '> Follow Us</h1>
            <div className='flex gap-6 text-2xl'>
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
      </footer>
      <Footermobile />
    </div>
  )
}
