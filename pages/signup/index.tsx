import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { Register } from '@/components/ui/register/Register'

const Signup: NextPage = () => {
  return (
    <main title='Upler - Register'>
      <Register />
    </main>
  )
}

export default Signup
