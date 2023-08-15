import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { Carousel } from '../../components/ui/carousel/Carousel'

const Apply: NextPage = () => {
  return (
    <Layout title='Apply'>
      <Carousel />
    </Layout>
  )
}

export default Apply
