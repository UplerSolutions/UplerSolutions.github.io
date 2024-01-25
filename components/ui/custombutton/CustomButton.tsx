import React from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

type btnType = 'blue' | 'red' | 'grey'

interface Props {
	text: string
	type: btnType
	className?: string
	submit?: boolean
	disabled?: boolean
	handleClick: () => any
}

export const CustomButton = (props: Props) => {
	return (
		<button
			className={`mt-8 w-full rounded-3xl px-4 py-2 text-lg font-semibold text-white ${inter.className
				} ${props.type === 'blue'
					? 'bg-[#3898FF]'
					: props.type === 'red'
						? 'bg-[#ff3838]'
						: 'bg-slate-500'
				} ${props.className}`}
			onClick={() => props.handleClick()}
			type={`${props.submit ? 'submit' : 'button'}`}
			disabled={props.disabled ? props.disabled : false}
		>
			{props.text}
		</button>
	)
}
