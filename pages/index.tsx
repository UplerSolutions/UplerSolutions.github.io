import Image from 'next/image'
import type { NextPage } from 'next'
import Head from 'next/head'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/utils/config'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout/Layout'
import { CustomButton } from '@/components/layout'
import { Partner } from '@/components/ui/partner'
import { Contributions } from '@/components/ui/contributions'
import { Carousel } from '@/components/ui/carousel'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/router'

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
      <div className='relative flex flex-col place-items-center'>
        <h1 className=' text-[32px] text-center font-bold md:text-5xl lg:text-7xl '>
          Se el <span className=' text-purple-400'>sueño</span> que quieres{' '}
          <br />
          ver en el <span className=' text-purple-400'>mundo.</span>
        </h1>
        <p className='pb-10 pt-6 lg:p-10 text-center w-11/12'>
          Impulsa startups innovadoras a través de la inversión colaborativa y
          la tokenización.
        </p>
        <button
          className=' bg-purple-500 h-12 w-48 rounded-xl'
          onClick={handleClick}
        >
          Invierte Ahora
        </button>
      </div>
      <Contributions />
      <Carousel />

      <Partner />
    </Layout>
  )
}
export default Home
