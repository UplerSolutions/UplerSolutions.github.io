import { FC } from 'react'
import { Step } from './Step'

interface Props {
	activeStep: number
}

const steps = [
	'Personal Information',
	'Company Information',
	'Company Features'
]

export const Stepper: FC<Props> = ({ activeStep }) => {
	return (
		<ol className="flex w-full items-center text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
			{steps.map((step, index) => (
				<Step
					key={step}
					isActive={activeStep == index}
					isCompleted={activeStep > index}
					order={
						index === 0
							? 'first'
							: index === steps.length - 1
							  ? 'last'
							  : 'middle'
					}
				>
					{step}
				</Step>
			))}
		</ol>
	)
}
