import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import { FormProvider, useForm } from 'react-hook-form'
import { ContactForm } from './ContactForm'
import CustomForm from './CustomForm'

const steps = [
  'Personal Information',
  'Company Information',
  'Company Features'
]

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <div className='flex flex-col w-[97%] lg:w-[60%] '>
      <Stepper activeStep={activeStep} className='accent-primary-color'>
        {steps.map((label) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          )
        })}
      </Stepper>

      <CustomForm
        activeStep={activeStep}
        handleBack={handleBack}
        handleNext={handleNext}
      />
    </div>
  )
}
