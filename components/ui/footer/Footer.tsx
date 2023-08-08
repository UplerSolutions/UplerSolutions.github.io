import { Layout } from '@/components/layout/Layout'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='bg-neutral-600 flex justify-evenly h-[350px] pt-10'>
      <div className='flex flex-col'>
        <h1 className='font-bold text-lg pb-6'>ACERCA DE NOSOTROS</h1>
        <span>Nosotros</span>
        <span>Nuestra acta</span>
        <span>Prensa</span>
        <span>Empleos</span>
        <div className='pt-16 flex'>
          <img src='/whiteisotipo.png' alt='' className='w-[35px]' />
          <span className=' pl-3'>Latamplix © 2023</span>
        </div>
      </div>
      <div className='flex flex-col'>
        <h1 className='font-bold text-lg pb-6'>ATENCION AL CLIENTE</h1>
        <span>Centro de ayuda</span>
        <span>Reglas</span>
        <span>Recursos para creadores</span>
        <span>Recursos de marca</span>
      </div>
      <div className='flex flex-col invisible'>
        <h1 className='font-bold text-lg'>DONDE ESTAMOS</h1>
        <span>Lorem ipsum sit amet No. 18,</span>
        <span>Buenos Aires, Argentina</span>
        <span>10000</span>
        <div></div>
        <div className='flex'>
          <button>Español &gt;</button>
          <button>USD &gt;</button>
        </div>
      </div>
      <div className='flex flex-col'>
        <h1 className='font-bold text-lg pb-6'>DONDE ESTAMOS</h1>
        <span>Lorem ipsum sit amet No. 18,</span>
        <span>Buenos Aires, Argentina</span>
        <span>10000</span>
        <div></div>
        <div className='flex pt-8'>
          <button className='bg-white text-black w-20 text-left mr-4 pl-2'>
            Español
          </button>
          <button className='bg-white text-black w-20 text-left pl-2'>
            USD
          </button>
        </div>
      </div>
    </footer>
  )
}
