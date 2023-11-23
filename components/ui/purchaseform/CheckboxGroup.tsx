import React, { useState } from 'react'
import Checkbox from './Checkbox'
import { ISoftware } from '@/interface/software'

interface CheckboxGroupProps {
	options: ISoftware[] | undefined
	limit: number
	selectedOptions: string[]
	onChange: (value: string) => void
	currentPage: number // Add current page as a prop
	totalProducts: number
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
	options,
	limit,
	selectedOptions,
	onChange,
	currentPage,
	totalProducts // Receive totalProducts as a prop
}) => {
	const startIndex = (currentPage - 1) * 6 // Display 6 products per page
	const endIndex = Math.min(startIndex + 6, totalProducts) // Display up to 6 products or fewer on the last page

	const visibleOptions = options?.slice(startIndex, endIndex) || []

	return (
		<div className=" text-dark flex w-[100%] flex-row  flex-wrap  items-center   justify-center rounded-xl pt-8 text-center md:grid md:grid-cols-2 md:gap-4 xl:grid-cols-3 2xl:grid-rows-2">
			{visibleOptions.map((product, index) => (
				<Checkbox
					key={product.id}
					position={index}
					description={product.lowDescription}
					value={product.id}
					label={''}
					price={product.price}
					isChecked={selectedOptions.includes(product.id)}
					onChange={onChange}
				/>
			))}
		</div>
	)
}
