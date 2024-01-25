import { FC } from 'react'

interface Props {
	color: string
	children: React.ReactNode
}

export const StepIndicator: FC<Props> = ({ color, children }) => (
	<span
		className="me-2 aspect-square rounded-full px-2 text-sm leading-[1.6] text-white"
		style={{
			backgroundColor: color
		}}
	>
		{children}
	</span>
)
