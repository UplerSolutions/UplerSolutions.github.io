import Link from 'next/link'
import { CustomButton } from '@/components/ui/custombutton'
import React, { FC } from 'react'
import { FaCheck } from 'react-icons/fa'
import { GoShieldCheck } from 'react-icons/go'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'

interface Props {
  title?: string | undefined | string[]
}

export const Card: FC<Props> = ({ title }) => {
  return (
    <section className='flex flex-col justify-center  items-center w-full pt-20 bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] '>
      <div className='rounded-xl flex flex-row p-6 sm:py-16 sm:pl-16 bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] text-neutral-700 lg:w-[75%] lg:h-[350px]'>
        <div className='flex flex-col gap-10'>
          <div className='items-center flex-col sm:flex-row flex md:justify-between gap-4 text-center sm:gap-0 sm:text-left'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold '>
              ¡Ya casi lo logras! Completa tu pedido
            </h1>
            <div className='mr-6 sm:mr-0 flex flex-row-reverse sm:flex-row items-center xl:ml-20 '>
              <VerifiedUserOutlinedIcon className='text-purple-500 scale-[2] md:mr-4' />
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
      <div className='bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] mt-20 py-8 px-12 mb-8 rounded-xl lg:w-[75%] w-[90%]'>
        <div className='text-2xl md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold w-full'>
          <h2 className='md:pb-10 pl-6 pt-6 text-neutral-600'>
            1. Elige un período
          </h2>
        </div>
        <div className='flex gap-10 pt-20 flex-wrap items-center justify-center'>
          <div className='flex flex-col w-[350px] h-[350px] bg-white rounded-xl items-center text-center'>
            <div className='flex flex-col items-center'>
              <span className='bg-purple-200 text-purple-500 px-4'>
                AHORRA 68%
              </span>
              <input
                type='checkbox'
                className='ml-[-200px] sm:ml-0 sm:mr-[280px] scale-[2] accent-purple-500'
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
                className='ml-[-200px] sm:ml-0 sm:mr-[280px] scale-[2] accent-purple-500'
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
                className='ml-[-200px] sm:ml-0  sm:mr-[280px] scale-[2] accent-purple-500'
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
      </div>
    </section>
  )
}
