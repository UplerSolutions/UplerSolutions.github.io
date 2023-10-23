import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

interface Props {
  duration: string
  price: number | undefined
}

const Period: FC<Props> = ({ price, duration }) => {
  const { register, formState: errors } = useFormContext()

  return (
    <div className='flex flex-col py-8 px-14 sm:px-0 sm:p-8 bg-white rounded-xl items-center text-center w-[100%] md:w-[30%]'>
      <div className='flex flex-col items-center'>
        <label htmlFor='period' className='w-48'>
          <input
            {...register('period', {
              required: 'This input is required'
            })}
            type='radio'
            value={duration}
            name='period'
            className='hover:text-primary-color scale-[2] text-primary-color accent-primary-color w-48'
          />
        </label>
        <h1 className='font-semibold text-3xl text-neutral-700'>{duration}</h1>
        <div className='flex text-neutral-600 items-center pt-10'>
          <span className='text-primary-color font-semibold text-7xl'>$</span>
          <h3 className='text-primary-color text-7xl md:text-7xl lg:text-7xl font-bold'>
            {price}
          </h3>
          <span className='font-semibold'>USD</span>
        </div>
      </div>
    </div>
  )
}

export default Period
