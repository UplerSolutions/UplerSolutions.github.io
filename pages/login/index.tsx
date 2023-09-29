import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { Login } from '@/components/ui/login/Login'
import { Navbar } from '../../components/ui/navbar/Navbar'

const LogIn: NextPage = () => {
  return (
    <main title='Upler - Login'>
      <Navbar />
      <Login />
    </main>
  )
}

export default LogIn
