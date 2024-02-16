import { FC } from 'react'

interface IconProps {
	className?: string
}

export const EditIcon: FC<IconProps> = ({ className = 'h-6 w-6' }) => (
	<svg
		className={`me-2.5 ${className}`}
		xmlns="http://www.w3.org/2000/svg"
		width="44"
		height="44"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="#2c3e50"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path stroke="none" d="M0 0h24v24H0z" fill="none" />
		<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
		<path d="M13.5 6.5l4 4" />
	</svg>
)
