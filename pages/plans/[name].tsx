import { Layout } from '@/components/layout/Layout'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { data } from '@/data/plans'
import { IPlan } from '@/interface/plan'
import PurchaseForm from '@/components/ui/purchaseform/PurchaseForm'

const PlanPage: NextPage = () => {
	const router = useRouter()
	const { name } = router.query
	const [plan, setPlan] = useState<IPlan | null>(null)

	useEffect(() => {
		if (typeof name === 'string') {
			const planFilter = data.find((plan) => plan.name === name)
			if (planFilter) {
				setPlan(planFilter)
			}
		}
	}, [name])

	return <Layout title="Plan">{plan && <PurchaseForm plan={plan} />}</Layout>
}

export default PlanPage
