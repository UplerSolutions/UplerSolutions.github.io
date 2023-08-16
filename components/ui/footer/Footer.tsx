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
import { Footermobile } from '@/components/ui/footermobile/Footermobile'

export const Footer = () => {
  return (
    <div>
      <footer className='hidden md:flex w-full bg-neutral-600 flex-col-reverse text-white items-center justify-evenly h-auto pb-20 pt-10 lg:flex-row lg:h-[350px] gap-6 lg:gap-0 lg:items-start'>
        <div className='flex flex-col gap-2'>
          <Image height={150} width={150} src='/whitelogo.png' alt='' className='w-[200px]' />
          <h3 className='text-md pt-6 pb-2'>
            Providing everyone access to <br />
            startup investment.
          </h3>
          <div className='flex gap-6 text-2xl'>
            <Link href='https://discord.com/' target=' blank'>
              <FaDiscord />
            </Link>
            <Link href='https://www.instagram.com/latamplix/' target=' blank'>
              <FaInstagram />
            </Link>
            <Link
              href='https://www.linkedin.com/company/latamplix/about/'
              target=' blank'
            >
              <FaLinkedin />
            </Link>
            <Link href='https://youtube.com' target=' blank'>
              <FaYoutube />
            </Link>
            <Link href='https://twitter.com/latamplix' target=' blank'>
              <FaTwitter />
            </Link>
          </div>
          <div className='pt-4 flex'>
            <span className=''>Upler © 2023</span>
          </div>
        </div>

        <div className='flex flex-col gap-2 pt-4'>
          <h1 className='font-bold text-lg pb-6'>CUSTOMER CARE</h1>
          <span>Help Center</span>
          <span>Transparency and Security</span>
          <span>Terms and Conditions</span>
          <span>Privacy Policy</span>
          <span>Cookies Policy</span>
        </div>

        <div className='flex flex-col gap-2 pt-4'>
          <h1 className='font-bold text-lg pb-6'>ABOUT US</h1>
          <span>About Us</span>
          <span>Our Charter</span>
          <span>Press</span>
          <span>Careers</span>
        </div>

        <div className='flex flex-col lg:text-right lg:items-end pr-3 gap-2 pt-4'>
          <h1 className='font-bold text-lg pb-6'>WHERE WE ARE</h1>
          <span>Lorem ipsum sit amet No. 18,</span>
          <span>Buenos Aires, Argentina</span>
          <span>10000</span>
          <div></div>
          <div className='flex pt-8'>
            <button className='bg-white text-black w-[85px] text-left mr-4 pl-2 items-center flex'>
              English &nbsp; <FaGreaterThan className=' text-[10px]' />
            </button>
            <button className='bg-white text-black w-20 text-left pl-2 flex items-center'>
              USD &nbsp; &nbsp;
              <FaGreaterThan className=' text-[10px]' />
            </button>
          </div>
        </div>
      </footer>
      <Footermobile />
    </div>
  )
}

