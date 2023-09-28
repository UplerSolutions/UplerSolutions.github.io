import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/utils/config'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout/Layout'
import { Contributions } from '@/components/ui/contributions'
import { useRouter } from 'next/router'
import { CardPlan } from '@/components/ui/plan'
import { Benefits } from '@/components/ui/benefits'
import { contributions } from '@/data/contribution'
import { Upler } from '@/components/ui/upler/Upler'
import { Partner } from '@/components/ui/partner/Partner'
import { ISoftware } from '@/interface/software'
import { getSoftwares } from './../service/software/software-service'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

interface Props {
  softwares: ISoftware[]
}

const Home: NextPage<Props> = ({ softwares }) => {
  const router = useRouter()

  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : SITE_URL

  return (
    <Layout title='Upler '>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name='description' content={SITE_DESCRIPTION} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='relative flex flex-col place-items-center bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] text-neutral-700 pt-24 lg:pt-48 pb-7'>
        <div className='text-[32px] text-center font-bold md:text-5xl lg:text-7xl'>
          <h3 className='md:pb-4'>Your Ultimate</h3>
          <span className='text-primary-color text-[35px] md:text-5xl lg:text-7xl'>
            Subscription
          </span>
        </div>
        <p className='pb-10 pt-6 lg:p-10 text-center w-11/12'>
          Gain accesss to hundreds of software tools. All in one single
          subscription.
        </p>
        <Link href='#plans' scroll={false} className='scroll-smooth'>
          <button className=' bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'>
            Find Your Bundle
          </button>
        </Link>
      </div>
      <main className=' pb-6 flex-wrap md:flex-nowrap md:flex justify-center items-center lg:pb-10 bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] text-neutral-700'>
        <div className='flex flex-wrap gap-3 md-gap-0 w-full items-center justify-around md:justify-center md:flex-nowrap py-4 md:w-4/5 lg:w-[74%] rounded-[40px] bg- md:bg-white md:bg-opacity-[0.5] '>
          {contributions.map((contribution) => (
            <Contributions key={contribution.id} count={contribution} />
          ))}
        </div>
      </main>
      <Upler />
      <Benefits />
      <div className='bg-gradient-to-t from-[#ffcefb] to-[#fffbdf]' id='plans'>
        <CardPlan />
        <Partner />
      </div>
    </Layout>
  )
}

export default Home
