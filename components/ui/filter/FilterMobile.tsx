import { ICategory } from '@/interface/category'
import { Rating, Slider } from '@mui/material'
import Box from '@mui/material/Box'
import React, { FC, useState } from 'react'
import { BsSliders } from 'react-icons/bs'

function valuetext(value: number) {
  return `${value}°C`
}
const minDistance = 10

interface Props {
  categories: ICategory[]
  onClickFilterByCategory: (categoryName: string) => void
  handleRouterPush: () => void
  handleRouterClear: () => void
  handleChange: (event: Event, newValue: number | number[], activeThumb: number) => void;
  value1: number[]
}

const FilterMobile: FC<Props> = ({ categories, handleRouterPush, handleRouterClear, onClickFilterByCategory, handleChange, value1 }) => {


  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const [value, setValue] = useState<number | null>(2)

  return (
    <div className='relative lg:hidden z-20'>
      {isOpen && (
        <div className='z-20 shadow-sm shadow-[#5c5c5c]'>
          <nav className='bg-[#f5e4ff] absolute pt-10 h-max max-h-[600px] w-full p-4 rounded-md shadow-sm shadow-[#5c5c5c]'>
            <div className='grid  lg:w-[200px] mx-auto text-black mb-60'>
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
                    color='secondary'
                  />
                </Box>


              </div>

              <div className='flex flex-row w-[100%] justify-evenly'>
                  <button className='bg-primary-color mt-6 h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color' type='submit' onClick={handleRouterPush}> Search</button>
                  <button className='bg-primary-color mt-6  h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color' type='submit' onClick={handleRouterClear}> Clear Filters</button>
                </div>
            </div>
          </nav>
        </div>
      )}
      <div className='flex justify-center items-center'>
        <button
          onClick={handleClick}
          className={`flex flex-col justify-center items-center w-full rounded-md shadow-sm ${isOpen ? '' : '' // we can add styles when is open
            }`}
        >
          <div className=' flex text-neutral-600 items-center pl-3 font-medium gap-3 rounded w-full h-[40px]'>
            <BsSliders className='scale-[1.5] z-0' /> FILTER
          </div>
        </button>
      </div>
    </div>
  )
}
export default FilterMobile 