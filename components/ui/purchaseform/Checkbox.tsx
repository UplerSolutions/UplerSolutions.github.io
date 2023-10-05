import React, { FC } from 'react'
import Image from 'next/image'
import { useFormContext } from 'react-hook-form'

interface CheckboxProps {
  value: string
  position: number
  price: number
  icon?: string
  label: string
  isChecked: boolean
  description: string
  onChange: (value: string) => void
}

const Checkbox: FC<CheckboxProps> = ({
  value,
  position,
  label,
  isChecked,
  onChange,
  price,
  description,
  icon
}) => {
  const { register, formState: errors } = useFormContext()

  return isChecked ? (
    <div className='h-[33vh] border-2 border-primary-color flex flex-col w-full bg-white rounded-xl p-6 gap-10 mb-10 items-center text-center'>
      <div>
        <label htmlFor={`checkbox-${value}`}>
          <input
            {...register(`products`)}
            className='h-8 w-8 accent-primary-color text-primary-color hover:text-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            type='checkbox'
            value={value}
            checked={isChecked}
            onChange={() => onChange(value)}
            id={`checkbox-${value}`}
          />
          {label}
        </label>
        <Image
          className='w-[150px] md:w-40 min-w-full'
          src='/uplerlogo.png'
          alt='global Logo'
          width={100}
          height={100}
        />
      </div>
      <div>
        <h2 className='text-2xl pb-5'>{label}</h2>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </div>
  ) : (
    <div className='h-[40vh] 2xl:h-[33vh] border-2 flex flex-col w-full bg-white rounded-xl p-6 gap-10 mb-10 items-center text-center '>
      <div>
        <label htmlFor={`checkbox-${value}`}>
          <input
            {...register('products')}
            className='h-8 w-8 accent-primary-color'
            type='checkbox'
            value={value}
            checked={isChecked}
            onChange={() => onChange(value)}
            id={`checkbox-${value}`}
          />
          {label}
        </label>
        <Image
          className='w-[150px] md:w-40 min-w-full'
          src='/uplerlogo.png'
          alt='global Logo'
          width={100}
          height={100}
        />
      </div>
      <div>
        <h2 className='text-2xl pb-5'>{label}</h2>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </div>
  )
}

export default Checkbox
