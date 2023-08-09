import React from 'react'

export const Partner = () => {
  return (
    <div className='flex items-center justify-center flex-col pb-6 pt-6'>
      <div className='flex flex-col text-left m-auto lg:w-[75%]'>
        <div className='text-center flex items-center lg:text-left pb-10 w-full'>
          <div className='flex flex-col'>
            <h3 className='pb-4'>CONOCÉ QUIÉN CONFÍA EN NOSOTROS</h3>
            <h2 className='text-4xl'>
              Nuestros
              <span className='text-purple-500'> partnerships oficiales</span>
            </h2>
          </div>
          <div className=' hidden lg:invisible'>
            <h3 className=''>CONOCE QUIEN CONFIA EN NOSOTROS</h3>
            <h2 className='text-4xl'>
              Nuestros
              <span className='text-purple-500'> partnerships oficiales</span>
            </h2>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-center sm:flex-row lg:w-[80%]'>
        <img
          src='./isotipo.png'
          alt=''
          className='p-8 flew-wrap w-28 md:w-[180px] md:flex-wrap lg:w-[250px]'
        />
        <img
          src='./isotipo.png'
          alt=''
          className='p-8 flew-wrap w-28 md:w-[180px] md:flex-wrap lg:w-[250px]'
        />
        <img
          src='./isotipo.png'
          alt=''
          className='p-8 flew-wrap w-28 md:w-[180px] md:flex-wrap lg:w-[250px]'
        />
        <img
          src='./isotipo.png'
          alt=''
          className='p-8 flew-wrap w-28 md:w-[180px] md:flex-wrap lg:w-[250px]'
        />
        <img
          src='./isotipo.png'
          alt=''
          className='p-8 flew-wrap w-28 md:w-[180px] md:flex-wrap lg:w-[250px]'
        />
        <img
          src='./isotipo.png'
          alt=''
          className='p-8 flew-wrap w-28 md:w-[180px] md:flex-wrap lg:w-[250px]'
        />
      </div>
    </div>
  )
}
