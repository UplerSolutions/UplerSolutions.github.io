import { ChangeEvent, FC, FormEvent, useState } from 'react'

import { Button } from '@/components/ui/button'

import PersonalData from './PersonalData'

import CompanyData from './CompanyData'
import CompanyFeatures from './CompanyFeatures'
import { Confirmation } from './Confirmation'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { contactForm } from '@/rules'

interface Props {
	activeStep: number
	setActiveStep: (step: number) => void

	handleBack: () => void
	handleNext: () => void
}

export interface DefaultValues {
	name: string
	lastname: string
	email: string
	position: string

	companyName: string
	website: string

	productName: string
	productDescription: string
	productCategory: string
}

const defaultValues: DefaultValues = {
	name: '',
	lastname: '',
	email: '',
	position: '',
	companyName: '',
	website: '',
	productName: '',
	productDescription: '',
	productCategory: ''
}

const CustomForm: FC<Props> = ({
	activeStep,
	setActiveStep,
	handleBack,
	handleNext
}) => {
	const methods = useForm({
		resolver: yupResolver(contactForm),
		reValidateMode: 'onChange',
		defaultValues: defaultValues
	})
	const handleOnSubmit = async (info: DefaultValues) => {
		const post = await fetch(
			process.env.NEXT_PUBLIC_BACKEND_URL + '/createContact',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(info)
			}
		)
		console.log(await post.json())
	}

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={methods.handleSubmit(handleOnSubmit)}
				className="mt-4 flex w-full flex-col rounded-md p-8 text-black shadow-form"
			>
				{activeStep === 0 && <PersonalData handleNext={handleNext} />}

				{activeStep === 1 && <CompanyData handleNext={handleNext} />}

				{activeStep === 2 && (
					<CompanyFeatures handleNext={handleNext} />
				)}

				{activeStep === 3 && (
					<Confirmation setActiveStep={setActiveStep} />
				)}
			</form>

			<footer className="mt-4 flex justify-between">
				{activeStep !== 0 && (
					<Button type="button" onClick={handleBack}>
						ATRAS
					</Button>
				)}
			</footer>
		</FormProvider>
	)
}

export default CustomForm
