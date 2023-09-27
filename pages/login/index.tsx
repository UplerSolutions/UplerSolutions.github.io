import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { Login } from '@/components/ui/login/Login'

const LogIn: NextPage = () => {
  return (
    <main title='Upler - Login'>
      <Login />
    </main>
  )
}

export default LogIn
