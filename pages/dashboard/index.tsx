import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { Login } from '@/components/ui/login/Login'
import { Navbar } from '../../components/ui/navbar/Navbar'
import Image from 'next/image'
import { Panel } from '@/components/ui/panel/Panel'
import { useSession } from "next-auth/react";

const Dashboard: NextPage = () => {
  const { data: session, status } = useSession();
  return (
    <Layout title='Upler - Dashboard'>
      <main className='pt-24 h-[90vh] bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] w-full'>
        {/* <Panel /> */}
        <pre>
          <div className='text-black'>{JSON.stringify(session, null, 2)}</div>
        </pre>
      </main>
    </Layout>
  )
}

export default Dashboard
