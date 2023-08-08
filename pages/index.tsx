import Image from 'next/image'
import Head from 'next/head'
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/utils/config'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout/Layout'
import { CustomButton } from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const origin =
    typeof window !== 'undefined' && window.location.origin
      ? window.location.origin
      : SITE_URL

  return (
    <Layout>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name='description' content={SITE_DESCRIPTION} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <div className='relative flex flex-col place-items-center'>
        <h1 className=' text-4xl text-center font-bold md:text-5xl lg:text-7xl '>
          Se el <span className=' text-purple-400'>sueño</span> que quieres{' '}
          <br />
          ver en el <span className=' text-purple-400'>mundo.</span>
        </h1>
        <p className='p-10'>
          Impulsando startups innovadoras a traves de la inversion colaborativa
          y tokenizacion.
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
      <main className='flex justify-center items-center pb-10'>
        <div className=' flex justify-center items-center mt-10 w-3/5 pt-10'>
          <div className='flex flex-col justify-center items-center h-20 border shadow-md w-full'>
            <span className=' text-lg font-bold text-purple-500 leading-5'>
              {0}
            </span>
            <span className=''>Proyectos</span>
          </div>
          <div className='flex flex-col justify-center items-center h-20 border shadow-md w-full'>
            <span className=' text-lg font-bold text-purple-500 leading-5'>
              U$D {0}
            </span>
            <span className=''>Destinados a creadores</span>
          </div>
          <div className='flex flex-col justify-center items-center h-20 border shadow-md w-full'>
            <span className=' text-lg font-bold text-purple-500 leading-5'>
              {0}
            </span>
            <span className=''>Contribuciones</span>
          </div>
        </div>
      </main>
    </Layout>
  )
}
