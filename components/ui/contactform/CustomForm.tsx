import React, { FC, useState } from 'react'

import { Button } from '@/components/ui/button'

import PersonalData from './PersonalData'

import CompanyData from './CompanyData'
import CompanyFeatures from './CompanyFeatures'

interface Props {
	activeStep: number

	handleBack: () => void
	handleNext: () => void
}

interface DefaultValues {
	customer: {
		name: string
		lastname: string
		email: string
	}
	company: {
		type: string
		sector: string
		name: string
		website: string
		email: string
		address: string
	}
	card: {
		number: string
		cvc: string
		expDate: string
		nameOnCard: string
	}
	order: {
		name: string
		image: string
		price: number
	}
}

const defaultValues: DefaultValues = {
	customer: {
		name: '',
		lastname: '',
		email: ''
	},
	company: {
		type: '',
		sector: '',
		name: '',
		website: '',
		email: '',
		address: ''
	},

	card: {
		number: '',
		cvc: '',
		expDate: '',
		nameOnCard: ''
	},
	order: {
		name: '',
		image: '',
		price: 0
	}
}

const CustomForm: FC<Props> = ({ activeStep, handleBack, handleNext }) => {
	const [info, setinfo] = useState(defaultValues)

	const handlerCustomer = (data: typeof defaultValues.customer) => {
		setinfo({
			...info,
			customer: { ...data }
		})
		handleNext()
	}
	const handlerAddress = (data: typeof defaultValues.company) => {
		setinfo({
			...info,
			company: { ...data }
		})
		handleNext()
	}

	const handlerCard = (data: typeof defaultValues.card) => {
		setinfo({
			...info,
			card: { ...data }
		})

		// onSubmit puede ir aca
	}

	return (
		<section className="mt-4 flex w-full flex-col rounded-md p-8 text-black shadow-form">
			<div>
				{activeStep === 0 && (
					<PersonalData handlerCustomer={handlerCustomer} />
				)}

				{activeStep === 1 && (
					<CompanyData handlerAddress={handlerAddress} />
				)}
				{activeStep === 2 && (
					<CompanyFeatures handlerAddress={handlerAddress} />
				)}
			</div>

			<footer className="mt-4 flex justify-between">
				{activeStep !== 0 && (
					<Button type="button" onClick={handleBack}>
						ATRAS
					</Button>
				)}

				{activeStep === 2 && (
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
