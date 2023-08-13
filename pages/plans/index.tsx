import { Layout } from '@/components/layout/Layout'
import { CardPlan } from '@/components/ui/plan'
import type { NextPage } from 'next'

const Plans: NextPage = () => {
  return (
    <Layout title='Plans'>
      <CardPlan />
    </Layout>
  )
}

export default Plans
