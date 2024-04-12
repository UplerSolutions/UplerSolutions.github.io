import { ButtonHTMLAttributes, FC } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
	className?: string
	disable?: boolean
}

export const Button: FC<Props> = ({
	children,
	className,
	disable,
	...buttonProps
}) => (
	<button
		className={`rounded bg-primary-color px-5 py-2 text-base text-white hover:bg-purple-500 ${className}`}
		{...buttonProps}
		disabled={disable}
	>
		{children}
	</button>
)
