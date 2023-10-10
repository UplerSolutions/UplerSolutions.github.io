import * as React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Rating, Slider } from '@mui/material'
import Box from '@mui/material/Box'

function valuetext(value: number) {
  return `${value}°C`
}
const minDistance = 10
export default function Filter() {
  const [value1, setValue1] = React.useState<number[]>([20, 37])
  const [value, setValue] = React.useState<number | null>(2)

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]])
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)])
    }
  }

  const [value2, setValue2] = React.useState<number[]>([20, 37])

  const handleChange2 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance)
        setValue2([clamped, clamped + minDistance])
      } else {
        const clamped = Math.max(newValue[1], minDistance)
        setValue2([clamped - minDistance, clamped])
      }
    } else {
      setValue2(newValue as number[])
    }
  }

  return (
    <div className='grid  lg:w-[200px] mx-auto text-black mb-60'>
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
            <div className='flex gap-2'>
              <input type='checkbox' className='accent-primary-color' />
              <p>Developer</p>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' className='accent-primary-color' />
              <p>Design</p>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' className='accent-primary-color' />
              <p>AI</p>
            </div>
            <div className='flex gap-2'>
              <input type='checkbox' className='accent-primary-color' />
              <p>Trading</p>
            </div>
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
            onChange={handleChange1}
            valueLabelDisplay='auto'
            getAriaValueText={valuetext}
            disableSwap
            color='secondary'
          />
        </Box>
      </div>
    </div>
  )
}
