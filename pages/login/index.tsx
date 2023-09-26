import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { Login } from '@/components/ui/login/Login'

const LogIn: NextPage = () => {
  return (
    <Layout title='Upler - Login'>
      <Login />
    </Layout>
  )
}

export default LogIn
