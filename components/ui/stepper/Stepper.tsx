import { FC } from 'react'
import { Step } from './Step'

interface Props {
	activeStep: number
}

const steps = [
	'Información Personal',
	'Información de la Compania',
	'Características del Producto',
	'Confirmación'
]

export const Stepper: FC<Props> = ({ activeStep }) => {
	return (
		<ol className="flex w-full flex-col flex-wrap justify-normal gap-2 text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:flex-row sm:items-center sm:text-base lg:justify-between">
			{steps.map((step, index) => (
				<Step
					key={step}
					isActive={activeStep == index}
					isCompleted={activeStep > index}
					index={index}
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
