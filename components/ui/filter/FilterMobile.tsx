import { ICategory } from '@/interface/category'
import { Rating, Slider } from '@mui/material'
import Box from '@mui/material/Box'
import React, { FC, useState } from 'react'
import { BsSliders } from 'react-icons/bs'

function valuetext(value: number) {
	return `${value}°C`
}
const minDistance = 10

interface Props {
	categories: ICategory[]
	onClickFilterByCategory: (categoryName: string) => void
	handleRouterPush: () => void
	handleRouterClear: () => void
	handleChange: (
		event: Event,
		newValue: number | number[],
		activeThumb: number
	) => void
	value1: number[]
}

const FilterMobile: FC<Props> = ({
	categories,
	handleRouterPush,
	handleRouterClear,
	onClickFilterByCategory,
	handleChange,
	value1
}) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(!isOpen)
	}
	const [value, setValue] = useState<number | null>(2)

	return (
		<div className="relative z-20 lg:hidden">
			{isOpen && (
				<div className="z-20 shadow-sm shadow-[#5c5c5c]">
					<nav className="absolute h-max max-h-[600px] w-full rounded-md bg-[#f5e4ff] p-4 pt-10 shadow-sm shadow-[#5c5c5c]">
						<div className="mx-auto  mb-60 grid text-black lg:w-[200px]">
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
									<div className="flex flex-col">
										{categories.map((category) => (
											<div
												key={category.id}
												className="flex gap-2"
												onClick={() =>
													onClickFilterByCategory(
														category.categoryName
													)
												}
											>
												<input
													type="radio"
													name="category"
													className="accent-primary-color"
												/>
												<p>{category.categoryName}</p>
											</div>
										))}
									</div>
								</details>
							</div>
							<hr className="h-[2px] bg-primary-color" />
							<div className="py-5">
								<details className="group">
									<summary className="flex cursor-pointer list-none items-center justify-between font-medium">
										<span>Valoracióm</span>
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
										color="secondary"
									/>
								</Box>
							</div>

							<div className="flex w-[100%] flex-row justify-evenly">
								<button
									className="mt-6 h-12 w-48 rounded-xl bg-primary-color font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100"
									type="submit"
									onClick={handleRouterPush}
								>
									{' '}
									Buscar
								</button>
								<button
									className="mt-6 h-12  w-48 rounded-xl bg-primary-color font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100"
									type="submit"
									onClick={handleRouterClear}
								>
									{' '}
									Limpiar Filtros
								</button>
							</div>
						</div>
					</nav>
				</div>
			)}
			<div className="flex items-center justify-center">
				<button
					onClick={handleClick}
					className={`flex w-full flex-col items-center justify-center rounded-md shadow-sm ${
						isOpen ? '' : '' // we can add styles when is open
					}`}
				>
					<div className=" flex h-[40px] w-full items-center gap-3 rounded pl-3 font-medium text-neutral-600">
						<BsSliders className="z-0 scale-[1.5]" /> FILTER
					</div>
				</button>
			</div>
		</div>
	)
}
export default FilterMobile
