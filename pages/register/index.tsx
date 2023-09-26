import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { Register } from '@/components/ui/register/Register'

const Signup: NextPage = () => {
  return (
    <Layout title='Upler - Register'>
      <Register />
    </Layout>
  )
}

export default Signup
