import { FC } from 'react'
import Image from 'next/image'
import { useFormContext } from 'react-hook-form'

interface CheckboxProps {
	value: string
	position: number
	price: number
	icon?: string
	label: string
	isChecked: boolean
	description: string
	onChange: (value: string) => void
}

const Checkbox: FC<CheckboxProps> = ({
	value,
	position,
	label,
	isChecked,
	onChange,
	price,
	description,
	icon
}) => {
	const { register, formState: errors } = useFormContext()

	return isChecked ? (
		<div className="mb-10 flex h-[40vh] w-full flex-col items-center gap-10 rounded-xl border-2 border-primary-color bg-white p-6 text-center 2xl:h-[35vh]">
			<div>
				<label htmlFor={`checkbox-${value}`}>
					<input
						{...register(`products`)}
						className="h-8 w-8 text-primary-color accent-primary-color hover:text-primary-color focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						type="checkbox"
						value={value}
						checked={isChecked}
						onChange={() => onChange(value)}
						id={`checkbox-${value}`}
					/>
					{label}
				</label>
				<Image
					className="w-[150px] min-w-full md:w-40"
					src="/uplerlogo.png"
					alt="global Logo"
					width={100}
					height={100}
				/>
			</div>
			<div>
				<h2 className="pb-5 text-2xl">{label}</h2>
				<p>{description}</p>
				<span>{price}</span>
			</div>
		</div>
	) : (
		<div className="mb-10 flex h-[40vh] w-full flex-col items-center gap-10 rounded-xl border-2 bg-white p-6 text-center 2xl:h-[35vh] ">
			<div>
				<label htmlFor={`checkbox-${value}`}>
					<input
						{...register('products')}
						className="h-8 w-8 accent-primary-color"
						type="checkbox"
						value={value}
						checked={isChecked}
						onChange={() => onChange(value)}
						id={`checkbox-${value}`}
					/>
					{label}
				</label>
				<Image
					className="w-[150px] min-w-full md:w-40"
					src="/uplerlogo.png"
					alt="global Logo"
					width={100}
					height={100}
				/>
			</div>
			<div>
				<h2 className="pb-5 text-2xl">{label}</h2>
				<p>{description}</p>
				<span>{price}</span>
			</div>
		</div>
	)
}

export default Checkbox
