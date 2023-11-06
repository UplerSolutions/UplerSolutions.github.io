import React, { FC, useState } from 'react'
import { Rating, Slider } from '@mui/material'
import Box from '@mui/material/Box'
import { ICategory } from '@/interface/category'
import { useRouter } from 'next/router'



interface Props {
  categories: ICategory[]
  onClickFilterByCategory: (categoryName: string) => void
  handleChange: (event: Event,newValue: number | number[],activeThumb: number) => void;
  value1: number[]
}

function valuetext(value: number) {
  return `${value}°C`
}
const Filter: FC<Props> = ({ categories, onClickFilterByCategory, handleChange, value1}) => {

  //price

  //rating

  const [value, setValue] = useState<number | null>(2)
  return (
    <div className='grid lg:w-[300px] pl-[3rem] mx-auto text-black mb-6'>
      <h2 className='text-lg font-semibold'>Filter By</h2>

      <div className='py-5'>
        <details className='group'>
          <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
            <span className='pb-3'>Category</span>
            <span className='transition group-open:rotate-180'>
              <svg
                fill='none'
                height='24'
                shape-rendering='geometricPrecision'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='1.5'
                viewBox='0 0 24 24'
                width='24'
              >
                <path d='M6 9l6 6 6-6'></path>
              </svg>
            </span>
          </summary>
          <div className='flex flex-col'>
            {categories.map(category => (
              <div key={category.id} className='flex gap-2' onClick={() => onClickFilterByCategory(category.categoryName)}>
                <input type='radio' name="category" className='accent-primary-color' />
                <p>{category.categoryName}</p>
              </div>
            ))}
          </div>
        </details>
      </div>
      <hr className='h-[2px] bg-primary-color' />
      <div className='py-5'>
        <details className='group'>
          <summary className='flex justify-between items-center font-medium cursor-pointer list-none'>
            <span>Ratings</span>
            <span className='transition group-open:rotate-180'>
              <svg
                fill='none'
                height='24'
                shape-rendering='geometricPrecision'
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='1.5'
                viewBox='0 0 24 24'
                width='24'
              >
                <path d='M6 9l6 6 6-6'></path>
              </svg>
            </span>
          </summary>
          <Rating
            className='text-primary-color'
            name='simple-controlled'
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue)
            }}
          />
        </details>
      </div>
      <hr className='h-[2px] bg-primary-color' />
      <div className='pt-3'>
        <div className=''>
          <span className='font-medium'>Price</span>
          <span className='transition group-open:rotate-180'>
            <svg
              fill='none'
              height='24'
              shape-rendering='geometricPrecision'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='1.5'
              viewBox='0 0 24 24'
              width='24'
            ></svg>
          </span>
        </div>

        <Box>
          <Slider
            getAriaLabel={() => 'Minimum distance'}
            value={value1}
            onChange={handleChange}
            valueLabelDisplay='auto'
            getAriaValueText={valuetext}
            disableSwap
            max={1000}
            color='secondary'
          />

        </Box>
      </div>
    </div>
  )
}
export default Filter