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
		<div className="flex w-[97%] flex-col lg:w-[60%] ">
			<Stepper activeStep={activeStep} />

			<CustomForm
				activeStep={activeStep}
				handleBack={handleBack}
				handleNext={handleNext}
			/>
		</div>
	)
}
