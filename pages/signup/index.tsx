import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { Signup } from '@/components/ui/signup/Signup'

const SignUp: NextPage = () => {
  return (
    <main title='Upler - Register'>
      <Signup />
    </main>
  )
}

export default SignUp
