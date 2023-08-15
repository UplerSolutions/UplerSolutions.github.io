import { Layout } from '@/components/layout/Layout'
import { CardPlan } from '@/components/ui/plan'
import type { NextPage } from 'next'
import { Carousel } from '../../components/ui/carousel/Carousel'

const Plans: NextPage = () => {
  return (
    <Layout title='Plans'>
      <div className='bg-gradient-to-r from-[#fde9fc] to-[#fffbe0]'>
        <CardPlan />
        <Carousel />
      </div>
    </Layout>
  )
}

export default Plans
