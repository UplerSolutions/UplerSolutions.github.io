import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

interface Props {
	duration: string
	price: number | undefined
}

const Period: FC<Props> = ({ price, duration }) => {
	const { register, formState: errors } = useFormContext()

	return (
		<div className="flex w-[100%] flex-col items-center rounded-xl bg-white px-14 py-8 text-center sm:p-8 sm:px-0 md:w-[30%]">
			<div className="flex flex-col items-center">
				<label htmlFor="period" className="w-48">
					<input
						{...register('period', {
							required: 'This input is required'
						})}
						type="radio"
						value={duration}
						name="period"
						className="w-48 scale-[2] text-primary-color accent-primary-color hover:text-primary-color"
					/>
				</label>
				<h1 className="text-3xl font-semibold text-neutral-700">
					{duration}
				</h1>
				<div className="flex items-center pt-10 text-neutral-600">
					<span className="text-7xl font-semibold text-primary-color">
						$
					</span>
					<h3 className="text-7xl font-bold text-primary-color md:text-7xl lg:text-7xl">
						{price}
					</h3>
					<span className="font-semibold">USD</span>
				</div>
			</div>
		</div>
	)
}

export default Period
