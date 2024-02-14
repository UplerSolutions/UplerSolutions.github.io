import  { FC, useState } from 'react'
import { Rating, Slider } from '@mui/material'
import Box from '@mui/material/Box'
import { ICategory } from '@/interface/category'
import { useRouter } from 'next/router'

interface Props {
	categories: ICategory[]
	onClickFilterByCategory: (categoryName: string) => void
	handleChange: (
		event: Event,
		newValue: number | number[],
		activeThumb: number
	) => void
	value1: number[]
}

function valuetext(value: number) {
	return `${value}°C`
}

const Filter: FC<Props> = ({
	categories,
	onClickFilterByCategory,
	handleChange,
	value1
}) => {
	const router = useRouter()

	const handleCategoryClick = (categoryName: string) => {
		onClickFilterByCategory(categoryName)
		router.push({
			pathname: '/software', // Replace with your actual route
			query: {
				categoryName: categoryName
			}
		})
	}
	//price

	//rating

	const [value, setValue] = useState<number | null>(2)
	return (
		<div className="mx-auto mb-6 grid text-black lg:w-[300px] lg:pl-[3rem]">
			<h2 className="text-lg font-semibold">Filtrar Por</h2>

			<div className="py-5">
				<details className="group">
					<summary className="flex cursor-pointer list-none items-center justify-between font-medium">
						<span className="pb-3">Categoría</span>
						<span className="transition group-open:rotate-180">
							<svg
								fill="none"
								height="24"
								shape-rendering="geometricPrecision"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								viewBox="0 0 24 24"
								width="24"
							>
								<path d="M6 9l6 6 6-6"></path>
							</svg>
						</span>
					</summary>
					<div className="flex flex-col gap-1">
						{categories.map((category) => (
							<div
								key={category.id}
								className="flex gap-2"
								onClick={() =>
									handleCategoryClick(category.categoryName)
								} // Updated click handler
							>
								<p className="cursor-pointer text-neutral-600 hover:text-neutral-800">
									{category.categoryName}
								</p>
							</div>
						))}
					</div>
				</details>
			</div>

			<hr className="h-[2px] bg-primary-color" />
			<div className="py-5">
				<details className="group">
					<summary className="flex cursor-pointer list-none items-center justify-between font-medium">
						<span>Valoración</span>
						<span className="transition group-open:rotate-180">
							<svg
								fill="none"
								height="24"
								shape-rendering="geometricPrecision"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.5"
								viewBox="0 0 24 24"
								width="24"
							>
								<path d="M6 9l6 6 6-6"></path>
							</svg>
						</span>
					</summary>
					<Rating
						className="text-primary-color"
						name="simple-controlled"
						value={value}
						onChange={(event, newValue) => {
							setValue(newValue)
						}}
					/>
				</details>
			</div>
			<hr className="h-[2px] bg-primary-color" />

			<div className="pt-3">
				<div className="">
					<span className="font-medium">Precio</span>
					<span className="transition group-open:rotate-180">
						<svg
							fill="none"
							height="24"
							shape-rendering="geometricPrecision"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							viewBox="0 0 24 24"
							width="24"
						></svg>
					</span>
				</div>
				<Box>
					<Slider
						getAriaLabel={() => 'Minimum distance'}
						value={value1}
						onChange={handleChange}
						valueLabelDisplay="auto"
						getAriaValueText={valuetext}
						disableSwap
						max={1000}
						color="secondary"
					/>
				</Box>
			</div>
		</div>
	)
}
export default Filter
