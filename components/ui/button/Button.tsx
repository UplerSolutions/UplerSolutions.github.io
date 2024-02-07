import React, { ButtonHTMLAttributes, FC } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
	className?: string
}

export const Button: FC<Props> = ({ children, className, ...buttonProps }) => (
	<button
		className={`rounded bg-primary-color px-5 py-2 text-base text-white hover:bg-purple-500 ${className}`}
		{...buttonProps}
	>
		{children}
	</button>
)
