import React from 'react'

export const Globalplix = () => {
  return (
    <div className='flex h-[660px] flex-row lg:h-[700px] xl:h-[750px] pt-20 justify-center bg-zinc-100 text-center'>
      <div className='flex flex-col md:flex-row lg:w-[75%] xl:ml-[85px]'>
        <div className='relative md:absolute flex flex-col'>
          <h2 className='md:ml-12 lg:ml-0 lg:px-0 text-[32px] md:text:5xl lg:text-6xl md:pb-4 lg:pb-10 font-semibold text-neutral-700 md:text-left'>
            ¿Qué es Upler?
          </h2>
          <p className='px-6 md:ml-8 md:w-[50%] lg:w-[500px] lg:px-0 lg:ml-0 text-neutral-700 text-xl md:text-left'>
            Globalplix es una suscripción todo en uno que ofrece una alta
            variedad de paquetes de softwares para los distintos profesionales.
            Soluciona la exhaustiva búsqueda y la gestión de pago de las
            distintas licencias.
          </p>
        </div>
        <div className='relative '>
          <h1 className='md:h-[40px]  xl:ml-0 xl:h-auto'></h1>
          <img src='/box.png' alt='' className='lg:ml-[75px]' />
        </div>
      </div>
    </div>
  )
}
