import { FC, useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'
import PersonalData from './PersonalData'
import { useRouter } from 'next/router'
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
	// const { handleSubmit, getValues, getFieldState, formState } = useFormContext();

	const router = useRouter()

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
		<Box sx={{ width: '100%', alignSelf: 'center', marginTop: '1rem' }}>
			<Paper
				elevation={8}
				sx={{
					p: '32px',
					display: 'flex',
					flexDirection: 'column',
					gap: 3
				}}
			>
				<div>
					{activeStep === 0 && (
						<PersonalData
							handleNext={handleNext}
							handlerCustomer={handlerCustomer}
						/>
					)}

					{activeStep === 1 && (
						<CompanyData
							handleNext={handleNext}
							handlerAddress={handlerAddress}
						/>
					)}
					{activeStep === 2 && (
						<CompanyFeatures
							handleNext={handleNext}
							handlerAddress={handlerAddress}
						/>
					)}

					<Box sx={{ display: 'flex', flexDirection: 'row' }}>
						{activeStep === 1 && (
							<div className="flex w-full justify-start">
								<Button
									onClick={handleBack}
									className="text-primary-color hover:bg-white"
								>
									Back
								</Button>
							</div>
						)}
					</Box>

					<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
						{activeStep === 2 && (
							<div className="flex w-full justify-between">
								<Button
									onClick={handleBack}
									className="text-primary-color hover:bg-white"
								>
									Back
								</Button>
								<Button
									type="submit"
									className="bg-primary-color text-white hover:bg-purple-500"
								>
									Send
								</Button>
							</div>
						)}
					</Box>
				</div>
			</Paper>
		</Box>
	)
}

export default CustomForm
