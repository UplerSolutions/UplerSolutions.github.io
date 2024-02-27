import { FC, useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

import PersonalData from './PersonalData'

import CompanyData from './CompanyData'
import CompanyFeatures from './CompanyFeatures'
import { Confirmation } from './Confirmation'

interface Props {
	activeStep: number
	setActiveStep: (step: number) => void

	handleBack: () => void
	handleNext: () => void
}

export interface DefaultValues {
	customerInfo: {
		name: string
		lastname: string
		email: string
		position: string
	}
	companyInfo: {
		name: string
		website: string
	}
	productFeatures: {
		name: string
		description: string
		category: string
	}
}

const defaultValues: DefaultValues = {
	customerInfo: {
		name: '',
		lastname: '',
		email: '',
		position: ''
	},
	companyInfo: {
		name: '',
		website: '',
	},
	productFeatures: {
		name: '',
		description: '',
		category: ''
	}
}

const CustomForm: FC<Props> = ({
	activeStep,
	setActiveStep,
	handleBack,
	handleNext
}) => {
	const [info, setInfo] = useState(defaultValues)

	const handlerCustomer = (data: typeof defaultValues.customerInfo) => {
		setInfo({
			...info,
			customerInfo: { ...data }
		})
		handleNext()
	}
	const handlerCompany = (data: typeof defaultValues.companyInfo) => {
		setInfo({
			...info,
			companyInfo: { ...data }
		})
		handleNext()
	}

	const handlerProduct = (data: typeof defaultValues.productFeatures) => {
		setInfo({
			...info,
			productFeatures: { ...data }
		})
		handleNext()
	}

	useEffect(() => {
		console.log(info)
	}, [info])

	return (
		<section className="mt-4 flex w-full flex-col rounded-md p-8 text-black shadow-form">
			<div>
				{activeStep === 0 && (
					<PersonalData handlerCustomer={handlerCustomer} info={info} />
				)}

				{activeStep === 1 && (
					<CompanyData handlerCompany={handlerCompany} info={info} />
				)}

				{activeStep === 2 && (
					<CompanyFeatures handlerProduct={handlerProduct} info={info} />
				)}

				{activeStep === 3 && (
					<Confirmation info={info} setActiveStep={setActiveStep}  />
				)}
			</div>

			<footer className="mt-4 flex justify-between">
				{activeStep !== 0 && (
					<Button type="button" onClick={handleBack}>
						ATRAS
					</Button>
				)}

				{activeStep === 3 && (
					<Button
						type="submit"
						className="bg-primary-color text-white hover:bg-purple-500"
					>
						ENVIAR
					</Button>
				)}
			</footer>
		</section>
	)
}

export default CustomForm
