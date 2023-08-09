import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import Link from 'next/link'

const AboutUs: NextPage = () => {
  return (
    <Layout title='About Us'>
      <h1 className=' text-center text-6xl'>Nosotros</h1>
    </Layout>
  )
}

export default AboutUs
