import type { NextPage } from 'next'
import Head from 'next/head'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/utils/config'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout/Layout'
import { Contributions } from '@/components/ui/contributions'
import { useRouter } from 'next/router'
import { CardPlan } from '@/components/ui/plan'
import { Globalplix } from '@/components/ui/globalplix'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  const router = useRouter()

  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : SITE_URL

  const handleClick = () => {
    // Perform the redirect
    router.push('/startups') // Replace 'destination-page' with the actual URL
  }

  return (
    <Layout title='Home'>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name='description' content={SITE_DESCRIPTION} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='relative flex flex-col place-items-center bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] text-neutral-700 pt-28 pb-7'>
        <div className='text-[32px] text-center font-bold md:text-5xl lg:text-7xl'>
          <h3 className='md:pb-4'>Tu suscripción</h3>
          <span className=' text-purple-400 text-[35px] md:text-5xl lg:text-7xl'>
            definitiva.
          </span>
        </div>
        <p className='pb-10 pt-6 lg:p-10 text-center w-11/12'>
          Consigue cientos de softwares para tu carrera profesional. Todo en una
          sola suscripción.
        </p>
        <button
          className=' bg-purple-600 h-12 w-48 rounded-xl text-white font-semibold hover:bg-purple-200 hover:text-purple-500 transition hover:delay-100 hover:border-2 hover:border-purple-600'
          onClick={handleClick}
        >
          Encontra Tu Plan
        </button>
      </div>
      <Contributions />
      <Globalplix />
      <div className='bg-gradient-to-t from-[#ffcefb] to-[#fffbdf]'>
        <CardPlan />
      </div>
    </Layout>
  )
}
export default Home
