import React, { FC } from 'react'
import { CheckboxGroup } from './CheckboxGroup'
import { IPlan } from '@/interface/plan'
import { GoShieldCheck } from 'react-icons/go'
import { FaCheck } from 'react-icons/fa'
import { RxLockClosed } from 'react-icons/rx'
import CreditCard from '../creditcard/CreditCard'
interface Props {
  plan?: undefined | IPlan
}

export const Card: FC<Props> = ({ plan }) => {
  const options = [
    {
      value: 'option1',
      label: 'Option 1',
      description: 'Description of the software'
    },
    {
      value: 'option2',
      label: 'Option 2',
      description: 'Description of the software'
    },
    {
      value: 'option3',
      label: 'Option 3',
      description: 'Description of the software'
    },
    {
      value: 'option4',
      label: 'Option 4',
      description: 'Description of the software'
    },
    {
      value: 'option5',
      label: 'Option 5',
      description: 'Description of the software'
    },
    {
      value: 'option6',
      label: 'Option 6',
      description: 'Description of the software'
    }
    // Add more options here
  ]

  return (
    <>
      <section className='pt-32 flex flex-col justify-center items-center w-full bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] '>
        <div className='first-letter:rounded-xl flex flex-row p-6 sm:py-10 sm:pl-16 bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] text-neutral-700 lg:w-[75%] '>
          <div className='flex flex-col gap-10'>
            <div className='items-center flex-col sm:flex-row flex  gap-4 text-center sm:gap-0 sm:text-left md:gap-[150px]'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold '>
                ¡Almost There! Finish order
              </h1>
              <div className='flex gap-6 items-center'>
                <GoShieldCheck className='text-primary-color scale-[1.8]' />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
            <div>
              <h2 className='text-xl'>
                Bundle choosen:
                <span className='text-primary-color font-semibold'>
                  {' '}
                  {plan?.name}
                </span>
              </h2>
              <div className='flex gap-5'>
                <div className='flex'>
                  <h2>This Bundles includes :</h2>
                  <div className='pl-5'>
                    {plan?.benefits.map((benefit) => (
                      <div className='flex gap-4 pt-2' key={benefit}>
                        <FaCheck className='text-primary-color ' />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] mt-8   py-8 px-12 mb-8 rounded-xl lg:w-[75%] w-[90%]'>
          <div className='text-2xl md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold w-full'>
            <h2 className='md:pb-10 pl-6 pt-6 text-neutral-600'>
              1. Choose a Period
            </h2>
          </div>
          <div className='flex gap-10 pt-6 flex-wrap md:flex-nowrap items-center justify-center'>
            <div className='flex flex-col py-8 px-14 sm:px-0 sm:p-8 bg-white rounded-xl items-center text-center w-[100%] md:w-[30%]'>
              <div className='flex flex-col items-center'>
                <label htmlFor='period'>
                  <input
                    type='radio'
                    name='period'
                    className='hover:text-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ml-[-150px] sm:ml-0 md:mr-[100px] lg:mr-[160px] xl:mr-[220px] 2xl:mr-[280px] scale-[2] text-primary-color accent-primary-color'
                  />
                </label>
                <h1 className='font-semibold text-3xl text-neutral-700'>
                  1 MONTH
                </h1>
                <div className='flex text-neutral-600 items-center pt-10'>
                  <span className='text-primary-color font-semibold text-7xl'>
                    $
                  </span>
                  <h3 className='text-primary-color text-7xl md:text-7xl lg:text-7xl font-bold'>
                    {plan?.price}
                  </h3>
                  <span className='font-semibold'>USD</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col py-8 px-14 sm:px-0 sm:p-8 bg-white rounded-xl items-center text-center w-[100%] md:w-[30%]'>
              <div className='flex flex-col items-center'>
                <label htmlFor='period'>
                  <input
                    type='radio'
                    name='period'
                    className='hover:text-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ml-[-200px] sm:ml-0 md:mr-[100px] lg:mr-[160px] xl:mr-[220px] 2xl:mr-[280px] scale-[2] accent-primary-color text-primary-color'
                  />
                </label>

                <h1 className='font-semibold text-3xl text-neutral-700'>
                  3 MONTHS
                </h1>
                <div className='flex text-neutral-600 items-center pt-10'>
                  <span className='text-primary-color font-semibold text-xl'>
                    $
                  </span>
                  <h3 className='text-primary-color text-7xl font-bold'>
                    {plan?.price ? plan.price * 3 : 'No hay precio disponible'}
                  </h3>
                  <span className='font-semibold'>USD</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col py-8 px-14 sm:px-0 sm:p-8 bg-white rounded-xl items-center text-center w-[100%] md:w-[30%]'>
              <div className='flex flex-col items-center'>
                <label htmlFor='period'>
                  <input
                    type='radio'
                    name='period'
                    className='hover:text-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-primary-color ml-[-200px] sm:ml-0 md:mr-[100px] lg:mr-[160px] xl:mr-[220px] 2xl:mr-[280px] scale-[2] accent-primary-color'
                  />
                </label>
                <h1 className='font-semibold text-3xl text-neutral-700'>
                  12 MONTHS
                </h1>
                <div className='flex text-neutral-600 items-center pt-10'>
                  <span className='text-primary-color font-semibold text-xl'>
                    $
                  </span>
                  <h3 className='text-primary-color text-7xl font-bold'>
                    {plan?.price ? plan.price * 12 : 'No hay precio disponible'}
                  </h3>
                  <span className='font-semibold'>USD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col justify-center  items-center w-full bg-gradient-to-r from-[#fde9fc] to-[#fffbe0]'>
        <div className='rounded-xl flex flex-col p-6 sm:py-16 sm:pl-16 bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] text-neutral-700 w-[90%] lg:w-[75%]'>
          <div className='text-2xl md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold w-full'>
            <h2 className='md:pb-10 md:pl-6 text-neutral-600'>
              2. Select your preferred tools
            </h2>
          </div>
          <div className='text-center '>
            <CheckboxGroup options={options} limit={plan?.id!} />
          </div>
        </div>
      </section>
      <section className='flex flex-col justify-center  items-center w-full bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] '>
        <div className='flex flex-col justify-center items-center xl:items-start text-center xl:text-start bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] mt-10 py-8 px-12 mb-8 rounded-xl lg:w-[75%] w-[90%] '>
          <div className='flex-col xl:flex-row text-2xl md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold w-full flex items-center justify-between gap-6'>
            <h2 className='md:pb-8 md:pl-6 pt-6 text-neutral-600'>
              3. Proceed to secure payment
            </h2>
          </div>
          <div className='flex flex-col md:pl-[3.2rem]'>
            <div className='gap-6 hidden xl:flex items-center'>
              <span>
                <GoShieldCheck className='text-primary-color scale-[1.8]' />
              </span>
              <p className='w-[150px] text-neutral-700'>
                30-day money-back guarantee
              </p>
              <div className='pl-7 flex items-center gap-6'>
                <span>
                  <RxLockClosed className='text-primary-color scale-[1.8]' />
                </span>
                <p className='w-[150px] text-neutral-700'>
                  Encrypted and secure payments
                </p>
              </div>
            </div>
            <div>
              <h4 className='pt-6 text-neutral-700'>
                By completing the purchase, you agree to our Terms of Service
                and confirm that you have read our Privacy Policy. You can
                cancel recurring payments anytime.
              </h4>
            </div>
            <span className='font-semibold pb-8 pt-10 text-neutral-700'>
              Need assistance? Check out our FAQs.
            </span>
          </div>
          <CreditCard />
          <div className='xl:pl-[3.2rem]'>
            <button className=' text-lg bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'>
              Buy now
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
