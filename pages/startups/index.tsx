import { Layout } from '@/components/layout/Layout'
import type { NextPage } from 'next'
import { Explore } from '@/components/ui/explore'
// import { SearchBar } from '@/components/ui/searchbar'

const Startups: NextPage = () => {
  return (
    <Layout title='Start Ups'>
      <h1 className=' text-center text-5xl'>Explora</h1>
      {/* <SearchBar /> */}
      {/* <Explore /> */}
    </Layout>
  )
}

export default Startups
