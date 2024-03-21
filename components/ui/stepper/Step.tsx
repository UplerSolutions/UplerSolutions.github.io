import { FC } from 'react'
import { StepIndicator } from './StepIndicator'
import { CompletedIcon } from '../icons'

interface Props {
	children: React.ReactNode
	isActive: boolean
	isCompleted: boolean
	order?: 'first' | 'middle' | 'last'
	index: number
}

export const Step: FC<Props> = ({
	children,
	isActive,
	isCompleted,
	order,
	index
}) => {
	const color = isCompleted || isActive ? '#3b82f6' : '#9ca3af'

	return order === 'first' ? (
		<li
			className="after:border-1 flex items-center text-blue-600 after:mx-6 after:hidden after:h-1 after:w-12 after:border-b after:border-gray-200 dark:text-blue-500 dark:after:border-gray-700 sm:after:content-['']  xl:after:mx-10"
			style={{ color }}
		>
			{isCompleted ? (
				<CompletedIcon />
			) : (
				<StepIndicator color={color}>{index + 1}</StepIndicator>
			)}
			<span className="flex items-center gap-1 after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 lg:after:hidden">
				{children
					?.toString()
					.split(' ')
					.map((word) => <span key={word}>{word}</span>)}
			</span>
		</li>
	) : order === 'middle' ? (
		<li
			className="after:border-1 flex items-center after:mx-6 after:hidden after:h-1 after:w-12 after:border-b after:border-gray-200 after:content-[''] dark:after:border-gray-700  xl:after:mx-10"
			style={{ color }}
		>
			{isCompleted ? (
				<CompletedIcon />
			) : (
				<StepIndicator color={color}>{index + 1}</StepIndicator>
			)}
			<span className="flex items-center gap-1 after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 lg:after:hidden">
				{children
					?.toString()
					.split(' ')
					.map((word) => <span key={word}>{word}</span>)}
			</span>
		</li>
	) : (
		<li className="flex items-center" style={{ color }}>
			{isCompleted ? (
				<CompletedIcon className="h-5 w-5" />
			) : (
				<StepIndicator color={color}>{index + 1}</StepIndicator>
			)}
			<span className="flex items-center gap-1">
				{children
					?.toString()
					.split(' ')
					.map((word) => <span key={word}>{word}</span>)}
			</span>
		</li>
	)
}
