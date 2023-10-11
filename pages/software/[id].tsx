import { GetServerSideProps, NextPage } from 'next'
import React from 'react'
import { ISoftware } from '@/interface/software'
import { Layout } from '@/components/layout/Layout'
import { getSoftware } from '@/service/software/software-service'

interface Props {
  software: ISoftware
}

const Software: NextPage<Props> = ({ software }) => {
  return (
    <Layout title='Upler - Software'>
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
