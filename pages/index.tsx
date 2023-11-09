'use client' // For Next JS 13 app router

import React from 'react'

import dynamic from 'next/dynamic'
import Head from 'next/head'
import { SITE_NAME, SITE_DESCRIPTION } from '@/utils/config'
import { Layout } from '@/components/layout/Layout'
import { Contributions } from '@/components/ui/contributions'
import { CardPlan } from '@/components/ui/plan'
import { Benefits } from '@/components/ui/benefits'
import { Upler } from '@/components/ui/upler/Upler'
import { Partner } from '@/components/ui/partner/Partner'
import { MarketCarousel } from '@/components/ui/marketcarousel/MarketCarousel'
import { useEffect, useState } from 'react'
import { getSoftwares } from '../service/software/software-service'
import { ISoftware } from '@/interface/software'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import Script from 'next/script'
const ScrollCarousel = dynamic(
  () => import('@/components/ui/marketcarousel/MarketCarousel'),
  { ssr: false }
)

export default function Home({ softwareData }: { softwareData: ISoftware[] }) {
  const { data: session } = useSession()

  return (
    <Layout title='Upler '>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name='description' content={SITE_DESCRIPTION} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

      </Head>
      <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 pt-24 lg:pt-48 w-full bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] xl:pb-18 2xl:pb-20'>
        <div className='w-[80%] lg:w-[40%] lg:ml-[7%] relative  flex flex-col items-center place-items-center lg:items-start lg:place-items-start  text-neutral-700  pb-7'>
          <div className='text-[40px] text-center md:text-left font-bold md:text-5xl xl:text-6xl 2xl:text-7xl'>
            <h3 className='md:pb-4 '>Your Ultimate</h3>
            <span className='text-primary-color text-[35px] md:text-5xl xl:text-6xl 2xl:text-7xl'>
              Subscription.
            </span>
          </div>
          <p className='pb-10 pt-6 text-center lg:text-left lg:w-[50%]'>
            Gain access to hundreds of software tools. All in one single
            subscription.
          </p>
          <Link href='/software' scroll={false} className='scroll-smooth'>
            <button className='bg-primary-color  h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'>
              Find Your Software
            </button>
          </Link>
        </div>
        <div className='w-full lg:w-[60%] flex items-center justify-center flex-col relative overflow-hidden pb-10 lg:pr-[7%]'>
          <ScrollCarousel software={softwareData} category={undefined} />
          <div className=' text-primary-color flex justify-center lg:justify-end lg:items-end w-full pt-2 font-semibold'>
            <Link href={'/software'}>View all</Link>
          </div>
        </div>
      </div>

      {/*       CONTRIBUTIONS BANNER
      <main className=' pb-6 flex-wrap md:flex-nowrap md:flex justify-center items-center lg:pb-10 bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] text-neutral-700'>
        <div className='flex flex-wrap gap-3 md-gap-0 w-full items-center justify-around md:justify-center md:flex-nowrap py-4 md:w-4/5 lg:w-[74%] rounded-[40px] bg- md:bg-white md:bg-opacity-[0.5] '>
          {contributions.map((contribution) => (
            <Contributions key={contribution.id} count={contribution} />
          ))}
        </div>
      </main>
       */}
      <Upler />
      <Benefits />
      <div className='bg-gradient-to-t to-[#ffcefb] from-[#fffbdf]' id='plans'>
        <CardPlan />
        <Partner />
      </div>

    </Layout>
  )
}
export async function getServerSideProps() {
  let softwareData: ISoftware[] = []
  try {
    softwareData = await getSoftwares()
  } catch (error) {
    console.error('Error fetching software data:', error)
  }

  return {
    props: {
      softwareData
    }
  }
}
