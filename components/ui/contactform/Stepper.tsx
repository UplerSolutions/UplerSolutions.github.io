import React, { useState } from 'react'
import { Stepper } from '../stepper'
import CustomForm from './CustomForm'

export default function HorizontalLinearStepper() {
	const [activeStep, setActiveStep] = useState(0)

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	return (
		<div className="flex w-full max-w-[1000px] flex-col">
			<Stepper activeStep={activeStep} />

			<CustomForm
				activeStep={activeStep}
				setActiveStep={setActiveStep}
				handleBack={handleBack}
				handleNext={handleNext}
			/>
		</div>
	)
}
