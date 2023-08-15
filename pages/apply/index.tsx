import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import {CustomForm} from '@/components/ui/customform/CustomForm'

const Apply: NextPage = () => {
  return (
    <Layout title='Apply'>
      <CustomForm/>
    </Layout>
  )
}

export default Apply
