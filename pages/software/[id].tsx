import { GetServerSideProps, NextPage } from 'next'
import React, { useState } from 'react'
import { ISoftware } from '@/interface/software'
import { Layout } from '@/components/layout/Layout'
import { getSoftware } from '@/service/software/software-service'
import { HiArrowLongRight, HiOutlineShoppingCart } from 'react-icons/hi2'
import { MdOutlineCancel } from 'react-icons/md'
import Link from 'next/link'

interface Props {
  software: ISoftware
}
interface Props {
  id: string
  image?: string
  productName: string
  price: number
  description: string
}

const Software: NextPage<Props> = ({ software }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Layout title='Upler - Software'>
      {isOpen && (
        <div className='flex flex-col justify-between'>
          <nav className=' bg-purple-50 right-0 h-[100vh] md:w-[500px] z-50 px-3 fixed '>
            <div className='text-red pt-8 flex justify-center'>
              <a onClick={handleClick} className='cursor-pointer'>
                <HiArrowLongRight className=' text-4xl text-black absolute left-6' />
              </a>
              <HiOutlineShoppingCart className=' text-4xl text-primary-color' />{' '}
              <p className=' text-lg text-neutral-600 pl-2'> 1 </p>
            </div>
            <div className='flex pt-10 items-start h-[10vh] '>
              <div className='relative px-6 w-1/5 h-[10vh] bg-primary-color rounded-xl '></div>
              <div className='w-full px-6 rounded-md '>
                <div className='flex flex-col items-start gap-1'>
                  <h2 className='text-xl  text-neutral-600  font-semibold'>
                    {software.productName}
                  </h2>
                  <p className='text-primary-color text-xl  font-semibold flex gap-6 '>
                    ${software.price}
                  </p>
                </div>
              </div>
              <a onClick={handleClick} className='cursor-pointer'>
                <MdOutlineCancel className=' text-4xl text-primary-color' />
              </a>
            </div>
            <div className=' pt-16 '>
              <hr className='h-[2px] bg-primary-color' />
            </div>

            <div className='absolute bottom-1 w-full pr-6 flex flex-col gap-2'>
              <p className='text-primary-color text-xl font-semibold flex items-center justify-between pl-2 pr-6 pb-2'>
                <p>Subtotal </p>
                <p>${software.price}</p>
              </p>

              <button
                onClick={handleClick}
                type='submit'
                className=' text-lg bg-primary-color h-12 w-full rounded-sm text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'
              >
                Finalize Purchase
              </button>
              <button
                onClick={handleClick}
                type='submit'
                className=' text-lg bg-primary-color h-12 w-full rounded-sm text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'
              >
                Keep Buying
              </button>
            </div>
          </nav>
        </div>
      )}
      <div className='flex flex-col md:flex-row items-center md:items-start  justify-center pt-28  bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] h-[90vh] md:gap-8 pb-10'>
        <div className='border w-[90%] md:w-[30%] flex flex-col  bg-white text-neutral-950 rounded-xl mt-9'>
          <div className='relative p-6 w-full h-[30vh] md:h-[50vh] bg-primary-color rounded-xl '></div>
        </div>
        <div className='w-full md:w-[30%] h-[70vh] p-6 rounded-md'>
          <div className='flex flex-col flex-1 gap-1'>
            <h2 className='text-xl md:text-2xl lg:text-3xl text-neutral-600 py-3 font-semibold'>
              {software.productName}
            </h2>
            <p className='text-primary-color text-xl md:text-2xl lg:text-3xl font-semibold flex gap-6 items-center'>
              ${software.price}
              <button
                onClick={handleClick}
                type='submit'
                className=' text-lg bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'
              >
                Buy now
              </button>
            </p>
          </div>

          <h1 className='text-xl md:text-2xl lg:text-3xl text-neutral-600 py-3 font-semibold'>
            Description
          </h1>
          <p className='text-neutral-500'>{software.description}</p>
        </div>
      </div>
    </Layout>
  )
}

export default Software

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  params,
  query
}) => {
  const id: string = typeof params?.id === 'string' ? params.id : ''

  const software = await getSoftware(id)

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  return {
    props: {
      software
    }
  }
}
