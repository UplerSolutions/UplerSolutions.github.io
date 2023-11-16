import type { NextPage } from 'next'
import { Login } from '@/components/ui/login/Login'

const LogIn: NextPage = () => {
  return (
    <main
      title='Upler - Login'
      className='selection:text-white selection:bg-primary-color'
    >
      <Login />
    </main>
  )
}

export default LogIn
