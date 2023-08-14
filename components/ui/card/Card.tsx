import Link from 'next/link'
import { CustomButton } from '@/components/ui/custombutton'
import React, { FC } from 'react'
import { FaCheck } from 'react-icons/fa'
import { GoShieldCheck } from 'react-icons/go'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
interface Props {
  title: string | undefined | string[]
}

export const Card: FC<Props> = ({ title }) => {
  return (
    <section className='flex flex-col justify-center  items-center w-full pt-20 bg-[#e9e9e9]'>
      <div className='border rounded-xl flex flex-row p-6 sm:py-16 sm:pl-16 bg-purple-200 text-neutral-700 lg:w-[75%] lg:h-[350px]'>
        <div className='flex flex-col gap-10'>
          <div className='flex-col sm:flex-row flex justify-between gap-4 text-center sm:gap-0 sm:text-left'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold '>
              ¡Ya casi lo logras! Completa tu pedido
            </h1>
            <div className='flex items-center xl:ml-20'>
              <GoShieldCheck className='text-purple-500 text-3xl' />
              <span className='w-[200px]'>
                30 días de garantía de devolución del dinero
              </span>
            </div>
          </div>
          <div>
            <h2 className='text-xl'>
              Plan seleccionado:
              <span className='text-purple-500 font-semibold'> {title}</span>
            </h2>
          </div>
          <div className='flex flex-col sm:flex-row gap-5'>
            <p>este plan incluye:</p>
            <ul>
              <li className='flex items-center gap-3'>
                <FaCheck className='text-purple-500' />3 herramientas esenciales
              </li>
              <li className='flex items-center gap-3'>
                <FaCheck className='text-purple-500' />1 Token Upler para usar
                en Startups
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex gap-10 py-20'>
        <div className='flex flex-col w-[350px] h-[350px] bg-white rounded-xl items-center text-center'>
          <div className='flex flex-col items-center'>
            <span className='bg-purple-200 text-purple-500 px-4'>
              AHORRA 68%
            </span>
            <input
              type='checkbox'
              className='mr-[280px] scale-[2] accent-purple-500'
            />
            <h1 className='font-semibold text-3xl text-neutral-700'>
              12 MESES
            </h1>
            <div className='flex text-neutral-600 items-center pt-10'>
              <span className='text-purple-500 font-semibold text-xl'>$</span>
              <h3 className='text-purple-500 text-7xl font-bold'>55</h3>
              <span className='font-semibold'>USD/mes</span>
            </div>
            <h3 className='p-10 text-neutral-600 text-center'>
              El plan se renueva a <br /> $55 USD/mes el 17/09/2023
            </h3>
          </div>
        </div>
        <div className='flex flex-col w-[350px] h-[350px] bg-white rounded-xl items-center text-center'>
          <div className='flex flex-col items-center'>
            <span className='bg-purple-200 text-purple-500 px-4'>
              AHORRA 68%
            </span>
            <input
              type='checkbox'
              className='mr-[280px] scale-[2] accent-purple-500'
            />
            <h1 className='font-semibold text-3xl text-neutral-700'>
              12 MESES
            </h1>
            <div className='flex text-neutral-600 items-center pt-10'>
              <span className='text-purple-500 font-semibold text-xl'>$</span>
              <h3 className='text-purple-500 text-7xl font-bold'>55</h3>
              <span className='font-semibold'>USD/mes</span>
            </div>
            <h3 className='p-10 text-neutral-600 text-center'>
              El plan se renueva a <br /> $55 USD/mes el 17/09/2023
            </h3>
          </div>
        </div>
        <div className='flex flex-col w-[350px] h-[350px] bg-white rounded-xl items-center text-center'>
          <div className='flex flex-col items-center'>
            <span className='bg-purple-200 text-purple-500 px-4'>
              AHORRA 68%
            </span>
            <input
              type='checkbox'
              className='mr-[280px] scale-[2] accent-purple-500'
            />
            <h1 className='font-semibold text-3xl text-neutral-700'>
              12 MESES
            </h1>
            <div className='flex text-neutral-600 items-center pt-10'>
              <span className='text-purple-500 font-semibold text-xl'>$</span>
              <h3 className='text-purple-500 text-7xl font-bold'>55</h3>
              <span className='font-semibold'>USD/mes</span>
            </div>
            <h3 className='p-10 text-neutral-600 text-center'>
              El plan se renueva a <br /> $55 USD/mes el 17/09/2023
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
