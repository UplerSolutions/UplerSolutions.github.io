import { Layout } from '@/components/layout/Layout'
import { CardPlan } from '@/components/ui/plan'
import type { NextPage } from 'next'

const Plans: NextPage = () => {
  return (
    <Layout title='Plans'>
      <div className='bg-gradient-to-r from-[#FFAAF8] to-[#FFF6AE]'>
        <CardPlan />
      </div>
    </Layout>
  )
}

export default Plans
