import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { Login } from '@/components/ui/login/Login'
import { Navbar } from '../../components/ui/navbar/Navbar'
import Image from 'next/image'
import { Panel } from '@/components/ui/panel/Panel'

const panel: NextPage = () => {
  return (
    <Layout title='Upler - Panel'>
      <main className='pt-40 h-[90vh] bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] w-full'>
        <Panel />
      </main>
    </Layout>
  )
}

export default panel
