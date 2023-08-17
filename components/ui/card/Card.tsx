import React, { FC } from 'react'
import { CheckboxGroup } from './CheckboxGroup'
import { IPlan } from '@/components/interface/plan'

interface Props {
  plan?: undefined | IPlan
}

export const Card: FC<Props> = ({ plan }) => {
  const options = [
    { value: 'Software IA', label: 'Software IA' },
    { value: 'JI', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    // Add more options here
  ];
  return (
    <>
      <section className='flex flex-col justify-center  items-center w-full pt-20 bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] '>
        <div className='rounded-xl flex flex-row p-6 sm:py-16 sm:pl-16 bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] text-neutral-700 lg:w-[75%] lg:h-[350px]'>
          <div className='flex flex-col gap-10'>
            <div className='items-center flex-col sm:flex-row flex md:justify-between gap-4 text-center sm:gap-0 sm:text-left'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold '>
                ¡Almost There! Finish order
              </h1>
            </div>
            <div>
              <h2 className='text-xl'>
                Bundle choosen:
                <span className='text-primary-color font-semibold'> {plan?.name}</span>
              </h2>
            </div>
          </div>
        </div>
        <div className='bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] mt-20 py-8 px-12 mb-8 rounded-xl lg:w-[75%] w-[90%]'>
          <div className='text-2xl md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold w-full'>
            <h2 className='md:pb-10 pl-6 pt-6 text-neutral-600'>
              1. Choose a Period
            </h2>
          </div>
          <div className='flex gap-10 pt-20 flex-wrap items-center justify-center'>
            <div className='flex flex-col w-[350px] h-[350px] bg-white rounded-xl items-center text-center'>
              <div className='flex flex-col items-center'>

                <label htmlFor="period">
                  <input
                    type='radio'
                    name='period'
                    className='ml-[-200px] sm:ml-0 sm:mr-[280px] scale-[2] accent-primary-color'
                  />
                </label>

                <h1 className='font-semibold text-3xl text-neutral-700'>
                  1 MONTH
                </h1>
                <div className='flex text-neutral-600 items-center pt-10'>
                  <span className='text-primary-color font-semibold text-xl'>$</span>
                  <h3 className='text-primary-color text-7xl font-bold'>{plan?.price}</h3>
                  <span className='font-semibold'>USD</span>
                </div>
                {/* <h3 className='p-10 text-neutral-600 text-center'>
                El plan se renueva a <br /> $55 USD/mes el 17/09/2023
              </h3> */}
              </div>
            </div>
            <div className='flex flex-col w-[350px] h-[350px] bg-white rounded-xl items-center text-center'>
              <div className='flex flex-col items-center'>
                <label htmlFor="period">
                  <input
                    type='radio'
                    name='period'
                    className='ml-[-200px] sm:ml-0 sm:mr-[280px] scale-[2] accent-primary-color'
                  />
                </label>

                <h1 className='font-semibold text-3xl text-neutral-700'>
                  3 MONTHS
                </h1>
                <div className='flex text-neutral-600 items-center pt-10'>
                  <span className='text-primary-color font-semibold text-xl'>$</span>
                  <h3 className='text-primary-color text-7xl font-bold'>{plan?.price * 3 }</h3>
                  <span className='font-semibold'>USD</span>
                </div>
                {/* <h3 className='p-10 text-neutral-600 text-center'>
                El plan se renueva a <br /> $55 USD/mes el 17/09/2023
              </h3> */}
              </div>
            </div>
            <div className='flex flex-col w-[350px] h-[350px] bg-white rounded-xl items-center text-center'>
              <div className='flex flex-col items-center'>
                <label htmlFor="period">
                  <input
                    type='radio'
                    name='period'
                    className='ml-[-200px] sm:ml-0 sm:mr-[280px] scale-[2] accent-primary-color'
                  />
                </label>
                <h1 className='font-semibold text-3xl text-neutral-700'>
                  12 MONTHS
                </h1>
                <div className='flex text-neutral-600 items-center pt-10'>
                  <span className='text-primary-color font-semibold text-xl'>$</span>
                  <h3 className='text-primary-color text-7xl font-bold'>{plan?.price * 12 }</h3>
                  <span className='font-semibold'>USD</span>
                </div>
                {/* <h3 className='p-10 text-neutral-600 text-center'>
                El plan se renueva a <br /> $55 USD/mes el 17/09/2023
              </h3> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col justify-center  items-center w-full pt-20 bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] '>
        <div className='bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] mt-20 py-8 px-12 mb-8 rounded-xl lg:w-[75%] w-[90%]'>
          <div className='text-2xl md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold w-full'>
            <h2 className='md:pb-10 pl-6 pt-6 text-neutral-600'>
              2. Select your preferred tools
            </h2>
          </div>
          <div className='flex gap-10 pt-20 flex-wrap items-center justify-center'>
            <div className='flex flex-col w-[350px] h-[350px] text-black rounded-xl items-center text-center'>
              <CheckboxGroup options={options} limit={2} />
            </div>
          </div>
        </div>

      </section>
    </>

  )
}
