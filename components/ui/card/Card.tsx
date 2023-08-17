import React, { FC } from 'react'
import { CheckboxGroup } from './CheckboxGroup'
import { IPlan } from '@/components/interface/plan'
import {} from "react-icons/"
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
interface Props {
  plan?: undefined | IPlan
}

export const Card: FC<Props> = ({ plan }) => {
  const options = [
    { value: 'option1', label: 'Option 1', description: "Description of the software" },
    { value: 'option2', label: 'Option 2', description: "Description of the software" },
    { value: 'option3', label: 'Option 3', description: "Description of the software" },
    { value: 'option4', label: 'Option 4', description: "Description of the software" },
    { value: 'option5', label: 'Option 5', description: "Description of the software" },
    { value: 'option6', label: 'Option 6', description: "Description of the software" },
    // Add more options here
  ];
  return (
    <>
      <section className='flex flex-col justify-center items-center w-full pt-20 bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] '>
        <div className='rounded-xl flex flex-row p-6 sm:py-16 sm:pl-16 bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] text-neutral-700 lg:w-[75%] lg:h-[350px]'>
          <div className='flex flex-col gap-10'>
            <div className='items-center flex-col sm:flex-row flex  gap-4 text-center sm:gap-0 sm:text-left md:gap-[150px]'>
              <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold '>
                ¡Almost There! Finish order
              </h1>
              <div className='flex gap-6'>
                <VerifiedUserOutlinedIcon className='text-primary-color scale-[1.8]'/>
                <span>30 días de garantía de devolución del dinero</span>
              </div>

            </div>
            <div>
              <h2 className='text-xl'>
                Bundle choosen:
                <span className='text-primary-color font-semibold'> {plan?.name}</span>
              </h2>
            </div>
          </div>
        </div>
        <div className='bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] mt-20   py-8 px-12 mb-8 rounded-xl lg:w-[75%] w-[90%]'>
          <div className='text-2xl md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold w-full'>
            <h2 className='md:pb-10 pl-6 pt-6 text-neutral-600'>
              1. Choose a Period
            </h2>
          </div>
          <div className='flex gap-10 pt-6 flex-wrap md:flex-nowrap items-center justify-center'>
            <div className='flex flex-col py-8 px-14 sm:px-0 sm:p-8 bg-white rounded-xl items-center text-center md:w-[30%]'>
              <div className='flex flex-col items-center'>
              <label htmlFor="period">
                  <input
                    type='radio'
                    name='period'
                    className='ml-[-150px] sm:ml-0 md:mr-[100px] lg:mr-[160px] xl:mr-[220px] 2xl:mr-[280px] scale-[2] accent-primary-color'
                  />
                </label>
                <h1 className='font-semibold text-3xl text-neutral-700'>
                  1 MONTH
                </h1>
                <div className='flex text-neutral-600 items-center pt-10'>
                  <span className='text-primary-color font-semibold text-xl'>$</span>
                  <h3 className='text-primary-color text-3xl md:text-5xl lg:text-7xl font-semibold'>{plan?.price}</h3>
                  <span className='font-semibold'>USD</span>
                </div>
                {/* <h3 className='p-10 text-neutral-600 text-center'>
                El plan se renueva a <br /> $55 USD/mes el 17/09/2023
              </h3> */}
              </div>
            </div>
            <div className='flex flex-col py-8 px-14 sm:px-0 sm:p-8 bg-white rounded-xl items-center text-center md:w-[30%]'>
              <div className='flex flex-col items-center'>
              <label htmlFor="period">
                  <input
                    type='radio'
                    name='period'
                    className='ml-[-200px] sm:ml-0 md:mr-[100px] lg:mr-[160px] xl:mr-[220px] 2xl:mr-[280px] scale-[2] accent-primary-color'
                  />
                </label>

                <h1 className='font-semibold text-3xl text-neutral-700'>
                  3 MONTHS
                </h1>
                <div className='flex text-neutral-600 items-center pt-10'>
                  <span className='text-primary-color font-semibold text-xl'>$</span>
                  <h3 className='text-primary-color text-7xl font-bold'>{plan?.price * 3}</h3>
                  <span className='font-semibold'>USD</span>
                </div>

              </div>
            </div>
            <div className='flex flex-col py-8 px-14 sm:px-0 sm:p-8 bg-white rounded-xl items-center text-center md:w-[30%]'>
              <div className='flex flex-col items-center'>
                <label htmlFor="period">
                  <input
                    type='radio'
                    name='period'
                    className='ml-[-200px] sm:ml-0 md:mr-[100px] lg:mr-[160px] xl:mr-[220px] 2xl:mr-[280px] scale-[2] accent-primary-color'
                  />
                </label>
                <h1 className='font-semibold text-3xl text-neutral-700'>
                  12 MONTHS
                </h1>
                <div className='flex text-neutral-600 items-center pt-10'>
                  <span className='text-primary-color font-semibold text-xl'>$</span>
                  <h3 className='text-primary-color text-7xl font-bold'>{plan?.price * 12}</h3>
                  <span className='font-semibold'>USD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='flex flex-col justify-center  items-center w-full bg-gradient-to-r from-[#fde9fc] to-[#fffbe0]'>
        <div className='rounded-xl flex flex-col p-6 sm:py-16 sm:pl-16 bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] text-neutral-700 lg:w-[75%]  '>
          <div className='text-2xl md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold w-full'>
            <h2 className='md:pb-10 md:pl-6 text-neutral-600'>
              2. Select your preferred tools
            </h2>
          </div>
          <div className='text-center'>
            <CheckboxGroup options={options} limit={plan?.id!} />
          </div>
        </div>

      </section>
      <section className='flex flex-col justify-center  items-center w-full bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] '>
        <div className='text-center md:text-start bg-gradient-to-r from-[#fff5ff] to-[#fffdf0] mt-10 py-8 px-12 mb-8 rounded-xl lg:w-[75%] w-[90%]'>
          <div className='flex-col md:flex-row text-2xl md:text-[28px] lg:text-[32px] xl:text-[36px] font-bold w-full flex items-center justify-between gap-6'>
            <h2 className='md:pb-8 md:pl-6 pt-6 text-neutral-600'>
              3. Proceed to secure payment
            </h2>
            <button className=' text-lg bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'>
              Connect Wallet
            </button>
          </div>
          <div className='flex flex-col md:pl-14'>
            <div className='gap-10 hidden md:flex'>
              <span> <VerifiedUserOutlinedIcon className='text-primary-color scale-[1.8]'/></span><p className='w-[150px]'>30-day money-back guarantee</p>
              <span> <VerifiedUserOutlinedIcon className='text-primary-color scale-[1.8]'/></span><p className='w-[150px]'>Encrypted and secure payments</p>
            </div>
            <div>
              <h4 className='pt-6'>By completing the purchase, you agree to our Terms of Service and confirm that you have read our Privacy Policy. You can cancel recurring payments anytime.</h4>
            </div>
            <span className='font-semibold pb-8 pt-10'>Need assistance? Check out our FAQs.</span>
          </div>
        </div>
      </section>
    </>

  )
}
