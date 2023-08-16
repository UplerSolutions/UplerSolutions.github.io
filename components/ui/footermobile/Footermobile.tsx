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
    <footer className='w-full bg-neutral-600 flex flex-col items-center justify-center text-white h-auto pb-20 pt-10 gap-6 md:hidden'>
      <div className='flex flex-col w-[100%] px-[50px] gap-8'>
      <div className='flex flex-col gap-2 '>
        <Image height={50} width={50} src='/whitelogo.png' alt='' className='w-[150px]' />
        <h3 className='text-md pt-6 pb-2'>
          Dándole a todos acceso a la
          inversión en startups.
        </h3>

      </div>

      <div className='flex flex-col gap-2'>
        <h1 className='font-bold text-lg pb-6'>ATENCIÓN AL CLIENTE</h1>
        <span>Centro de ayuda</span>
        <span>Transparencia y seguridad</span>
        <span>Términos y condiciones</span>
        <span>Política de privacidad</span>
        <span>Política de cookies</span>
      </div>

      <div className='flex flex-col gap-2'>
        <h1 className='font-bold text-lg pb-6'>SOBRE NOSOTROS</h1>
        <span>Nosotros</span>
        <span>Nuestra acta</span>
        <span>Prensa</span>
        <span>Empleos</span>
      </div>

      <div className='flex flex-col lg:text-right lg:items-end pr-3 gap-2'>
        <h1 className='font-bold text-lg pb-6'>LOCATION</h1>
        <span>Lorem ipsum sit amet No. 18,</span>
        <span>Buenos Aires, Argentina</span>
        <span>10000</span>
      </div>
      <div>        
        <div className='pt-4 flex'>
          <span className=''>Upler © 2023</span>
        </div>
        <div className='flex gap-6 text-2xl'>
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
