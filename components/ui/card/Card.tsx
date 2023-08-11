import Link from 'next/link'
import { CustomButton } from '@/components/layout'
import React from 'react'

export const Card = () => {
  return (
    <Link
      href=''
      className='flex flex-col-reverse lg-flex-row items-center justify-center py-8'
    >
      <div className='w-[90%] border rounded-xl flex flex-col-reverse lg:flex-row justify-between lg:items-center bg-white text-neutral-950 lg:w-3/5 lg:h-[450px]'>
        <div className='p-4 items-center text-center flex flex-col lg:text-left lg:items-start lg:ml-10'>
          <div>
            <h2 className='text-3xl lg:text-5xl pb-6'>Proyecto</h2>
            <p className=' lg:w-96'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus quam asperiores assumenda eius odit, tempora
              nostrum quaerat laborum.
            </p>
          </div>
          <div className=''>
            <CustomButton
              className='w-auto bg-purple-500 h-12 lg:w-[300px]'
              text={'Patrocina este proyecto'}
              type={'blue'}
              handleClick={function () {
                throw alert('aun no hay proyectos para patrocinar')
              }}
            />
          </div>
        </div>
        <div className='relative p-6 bg-purple-600 w-full h-full rounded-xl items-center flex justify-center'>
          <img src='/isotipo.png' alt='' />
        </div>
      </div>
    </Link>
  )
}
