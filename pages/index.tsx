import Image from 'next/image'
import type { NextPage } from 'next'
import Head from 'next/head'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/utils/config'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout/Layout'
import { CustomButton } from '@/components/layout'
import { Partner } from '@/components/ui/partner'
import { Contributions } from '@/components/ui/contributions'
// import { Carousel } from "@/components/ui/carousel"

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () => {
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : SITE_URL

  return (
    <Layout title='Home'>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name='description' content={SITE_DESCRIPTION} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <div className='relative flex flex-col place-items-center w-full'>
        <h1 className=' text-4xl text-center font-bold md:text-5xl lg:text-7xl '>
          Se el <span className=' text-purple-400'>sueño</span> que quieres{' '}
          <br />
          ver en el <span className=' text-purple-400'>mundo.</span>
        </h1>
        <p className='pb-10 pt-6 lg:p-10 text-center'>
          Impulsa startups innovadoras a través de la inversión colaborativa y
          la tokenización.
        </p>
        <CustomButton
          className=' bg-purple-500 h-14 w-48'
          text={'invierte ahora'}
          type={'blue'}
          handleClick={function () {
            throw alert('aun no hay proyectos para invertir')
          }}
        />
      </div>
      <Contributions />
      {/* <Carousel /> */}
      <Partner />
    </Layout>
  )
}
export default Home
