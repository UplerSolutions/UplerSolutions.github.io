import { Layout } from '@/components/layout/Layout'
import { CardPlan } from '@/components/ui/plan'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { data } from '../api/plans'
import { IPlan } from '@/interface/plan'
import { Card } from '@/components/ui/card'

const PlanPage: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const [plan, setPlan] = useState<IPlan | null>(null);

  useEffect(() => {
    if (typeof name === 'string') {
      const planFilter = data.planes.find(plan => plan.name === name);
      const dataFilter = data.companias.find(compania => compania.name === name);

      if (planFilter) {
        setPlan(planFilter);
      } else if (dataFilter) {
        setPlan(dataFilter);
      }
    }
  }, [name]);

  return (
    <Layout title='Plan'>
      {plan ? <Card plan={plan} /> : <p>Plan not found.</p>}
    </Layout>
  )
}

export default PlanPage
