import type { NextPage } from 'next'
import Head from 'next/head'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/utils/config'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout/Layout'
import { Contributions } from '@/components/ui/contributions'
import { useRouter } from 'next/router'
import { CardPlan } from '@/components/ui/plan'
import { Globalplix } from '@/components/ui/globalplix'
import { Benefits } from '@/components/ui/benefits'
import { contributions } from '@/pages/api/contribution'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  const router = useRouter()

  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : SITE_URL

  const handleClick = () => {
    // Perform the redirect
    router.push('/plans') // Replace 'destination-page' with the actual URL
  }

  return (
    <Layout title='Home'>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name='description' content={SITE_DESCRIPTION} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='relative flex flex-col place-items-center bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] text-neutral-700 lg:pt-28 pb-7'>
        <div className='text-[32px] text-center font-bold md:text-5xl lg:text-7xl'>
          <h3 className='md:pb-4'>Your Ultimate</h3>
          <span className='text-primary-color text-[35px] md:text-5xl lg:text-7xl'>
            subscription
          </span>
        </div>
        <p className='pb-10 pt-6 lg:p-10 text-center w-11/12'>
          Gain accesss to hundreds of software tools. All in one single
          subscription.
        </p>
        <button
          className=' bg-primary-color h-12 w-48 rounded-xl text-white font-semibold hover:bg-fuchsia-200 hover:text-primary-color transition hover:delay-100 hover:border-2 hover:border-primary-color'
          onClick={handleClick}
        >
          Find Your Bundle
        </button>
      </div>
      <main className=' pb-6 flex-wrap md:flex-nowrap md:flex justify-center items-center lg:pb-10 bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] text-neutral-700'>
        <div className='flex flex-wrap gap-3 md-gap-0 w-full items-center justify-center md:flex-nowrap py-4 md:w-4/5 lg:w-[74%] rounded-[40px] bg- md:bg-white md:bg-opacity-[0.5] '>
          {contributions.map((contribution) => (
            <Contributions key={contribution.id} count={contribution} />
          ))}
        </div>
      </main>
      <Globalplix />
      <Benefits />
      <div className='bg-gradient-to-t from-[#ffcefb] to-[#fffbdf]'>
        <CardPlan />
      </div>
    </Layout>
  )
}
export default Home
