import { Layout } from '@/components/layout/Layout'
import Link from 'next/link'
import type { NextPage } from 'next'
import { Roadmap } from '@/components/ui/roadmap/Roadmap'
import { Team } from '@/components/ui/team/Team'

const Aboutus: NextPage = () => {
  return (
    <Layout title={'Upler - About Us'}>
      <Team />
      <Roadmap />
    </Layout>
  )
}

export default Aboutus
