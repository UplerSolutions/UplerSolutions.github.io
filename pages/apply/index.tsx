import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import Stepper from '@/components/ui/contactform/Stepper'

const Apply: NextPage = () => {
	return (
		<Layout title="Upler - Apply">
			<div className="flex h-[800px] items-center justify-center bg-purple-50 px-8 lg:h-[100vh]">
				<Stepper />
			</div>
		</Layout>
	)
}

export default Apply
