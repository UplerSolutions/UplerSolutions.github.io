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
          <Image height={150} width={150} src='/whitelogo.png' alt='' className='' />
          <h3 className='text-md pt-1 pb-2'>
            Providing everyone access to
            startup investment.
          </h3>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-lg pb-6'>CUSTOMER CARE</h1>
          <span>Help Center</span>
          <span>Transparency and Security</span>
          <span>Terms and Conditions</span>
          <span>Privacy Policy</span>
          <span>Cookies Policy</span>
        </div>

        <div className='flex flex-col gap-2'>
          <h1 className='font-bold text-lg pb-6'>ABOUT US</h1>
          <span>About Us</span>
          <span>Our Charter</span>
          <span>Press</span>
          <span>Careers</span>
        </div>

        <div className='flex flex-col lg:text-right lg:items-end pr-3 gap-2'>
          <h1 className='font-bold text-lg pb-6'>LOCATION</h1>
          <span>Lorem ipsum sit amet No. 18,</span>
          <span>Buenos Aires, Argentina</span>
          <span>10000</span>
        </div>
        <div className='flex items-center justify-between pt-6'>        
          <div className='flex'>
            <span className=''>Upler © 2023</span>
          </div>
          <div className='flex gap-3 text-2xl'>
            <Link href='https://discord.com/'>
              <FaDiscord />
            </Link>
            <Link href='https://www.instagram.com/latamplix/'>
              <FaInstagram />
            </Link>
            <Link href='https://www.linkedin.com/company/latamplix/about/'>
              <FaLinkedin />
            </Link>
            <Link href='https://youtube.com'>
              <FaYoutube />
            </Link>
            <Link href='https://twitter.com/latamplix'>
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

