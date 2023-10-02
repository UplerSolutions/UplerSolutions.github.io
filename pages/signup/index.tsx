import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { Signup } from '@/components/ui/signup/Signup'
import { Navbar } from '@/components/ui/navbar'

const SignUp: NextPage = () => {
  return (
    <main
      title='Upler - Register'
      className='bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] w-full'
    >
      <Signup />
    </main>
  )
}

export default SignUp
