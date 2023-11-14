import { Layout } from '@/components/layout/Layout'
import { Roadmap } from '@/components/ui/roadmap/Roadmap'
import type { NextPage } from 'next'

const roadmap: NextPage = () => {
  return (
    <Layout title={'Upler - Roadmap'}>
      <Roadmap />
    </Layout>
  )
}

export default roadmap
