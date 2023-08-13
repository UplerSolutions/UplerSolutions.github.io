import { Layout } from '@/components/layout/Layout'
import { CardPlan } from '@/components/ui/plan'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { data } from '../../public/plans'
import { IPlan } from '@/components/interface/plan'
import { Card } from '@/components/ui/card'

const PlanPage: NextPage = () => {
  const router = useRouter()
  const [plan, setPlan] = useState<IPlan | any>()
  const {
    query: { name }
  } = router

  // const planFilter = data.planes.filter((plan) => {
  //    plan.name === name ?? plan
  // })
  // const dataFilter = data.companias.filter((compania) => {
  //    compania.name === name ? compania : "";
  // })

  // useEffect(() => {
  //   if (planFilter) {
  //     setPlan(planFilter!)
  //   } else {
  //     setPlan(dataFilter!)
  //   }
  // }, [name])

  return (
    <Layout title='Plan'>
      <Card title={name} />
    </Layout>
  )
}

export default PlanPage
