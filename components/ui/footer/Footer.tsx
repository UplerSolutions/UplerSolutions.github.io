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

export const Footer = () => {
  return (
    <footer className='w-full bg-neutral-600 flex flex-col-reverse items-center justify-evenly h-auto pb-20 pt-10 lg:flex-row lg:h-[350px] gap-6 lg:gap-0 lg:items-start'>
      <div className='flex flex-col gap-2'>
        <Image src='/whitelogo.png' alt='' className='w-[200px]' />
        <h3 className='text-md pt-6 pb-2'>
          Dándole a todos acceso a la <br />
          inversión en startups.
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
        <h1 className='font-bold text-lg pb-6'>ATENCIÓN AL CLIENTE</h1>
        <span>Centro de ayuda</span>
        <span>Transparencia y seguridad</span>
        <span>Términos y condiciones</span>
        <span>Política de privacidad</span>
        <span>Política de cookies</span>
      </div>

      <div className='flex flex-col gap-2 pt-4'>
        <h1 className='font-bold text-lg pb-6'>SOBRE NOSOTROS</h1>
        <span>Nosotros</span>
        <span>Nuestra acta</span>
        <span>Prensa</span>
        <span>Empleos</span>
      </div>

      <div className='flex flex-col lg:text-right lg:items-end pr-3 gap-2 pt-4'>
        <h1 className='font-bold text-lg pb-6'>DÓNDE ESTAMOS</h1>
        <span>Lorem ipsum sit amet No. 18,</span>
        <span>Buenos Aires, Argentina</span>
        <span>10000</span>
        <div></div>
        <div className='flex pt-8'>
          <button className='bg-white text-black w-[85px] text-left mr-4 pl-2 items-center flex'>
            Español &nbsp; <FaGreaterThan className=' text-[10px]' />
          </button>
          <button className='bg-white text-black w-20 text-left pl-2 flex items-center'>
            USD &nbsp; &nbsp;
            <FaGreaterThan className=' text-[10px]' />
          </button>
        </div>
      </div>
    </footer>
  )
}
