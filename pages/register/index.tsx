import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { Navbar } from '@/components/ui/navbar'
import { Signup } from '@/components/ui/signup/SignUp'

const Register: NextPage = () => {
  return (
    <main
      title='Upler - Register'
      className='bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] w-full'
    >
      <Signup />
    </main>
  )
}

export default Register
