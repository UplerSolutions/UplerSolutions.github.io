import { useRef, useState } from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { SearchBar } from '@/components/ui/searchbar'

import { Layout } from '@/components/layout/Layout'
import { Explore } from '@/components/ui/explore/Explore'
import Filter from '@/components/ui/filter/Filter'

import { ISoftware } from '@/interface/software'
import { ICategory } from '@/interface/category'
import {
	getSoftwareByName,
	getSoftwares,
	getSoftwaresByCategory
} from '@/service/software/software-service'
import { getCategories } from '@/service/categories/categories-service'

interface Props {
	softwares: ISoftware[]
	categories: ICategory[]
}

const minDistance = 10

const Softwares: NextPage<Props> = ({ softwares, categories }) => {
	const router = useRouter()

	const [categoryFilter, setCategoryFilter] = useState<string>()
	//price
	const [value1, setValue1] = useState<number[]>([0, 1000])

	const onClickFilterByCategory = (categoryName: string) => {
		setCategoryFilter(categoryName)
	}

	const handleRouterPush = () => {
		router.push({
			query: {
				categoryName: categoryFilter ? categoryFilter : ''
			}
		})
	}

	const handleRouterClear = () => {
		router.push({
			query: {}
		})
		setCategoryFilter('')
	}

	const handleChange = (
		event: Event,
		newValue: number | number[],
		activeThumb: number
	) => {
		if (!Array.isArray(newValue)) {
			return
		}

		if (activeThumb === 0) {
			setValue1([
				Math.min(newValue[0], value1[1] - minDistance),
				value1[1]
			])
		} else {
			setValue1([
				value1[0],
				Math.max(newValue[1], value1[0] + minDistance)
			])
		}
	}

	const [open, setOpen] = useState(false)
	const anchorEl = useRef<HTMLDivElement>(null)

	return (
		<Layout title="Upler - Softwares">
			<div className="flex flex-col items-center justify-center bg-gradient-to-r  from-[#fde9fc] to-[#fffbe0] pt-20">
				<div className="flex flex-col items-center gap-8 pb-4 text-center">
					<h1 className="pt-12 text-center text-[32px] font-bold text-neutral-700 md:text-5xl lg:text-6xl">
						Softwares
					</h1>
					<p className="w-[90%] text-xl text-neutral-700">
						Explorá nuestra colección y encontra tu solución
					</p>
				</div>

				<div className=" flex w-full flex-col justify-center gap-6 md:w-[90%]">
					<div className="m-auto w-[82%] max-w-sm xl:w-[100%]">
						<p className="py-2 text-center"></p>
						<div className="flex flex-col gap-6" ref={anchorEl}>
							<SearchBar
								onSubmit={async (searchTerm: string) => {
									router.push({
										query: {
											search: searchTerm
										}
									})
								}}
							/>
						</div>
						<div className="w-full pt-6 lg:hidden">
							<Filter
								handleChange={handleChange}
								value1={value1}
								onClickFilterByCategory={
									onClickFilterByCategory
								}
								categories={categories}
							/>
						</div>

						<div className=" mt-4 flex w-full justify-center lg:hidden">
							<button
								className="rounded-xl bg-primary-color px-5 py-2 font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100"
								type="submit"
								onClick={handleRouterClear}
							>
								Limpiar Filtros{' '}
							</button>
						</div>
					</div>
				</div>
			</div>

			<section className="flex w-full  bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] md:pb-20">
				<div className="hidden flex-col  items-center justify-start pl-4 pt-20 lg:flex">
					<Filter
						handleChange={handleChange}
						value1={value1}
						onClickFilterByCategory={onClickFilterByCategory}
						categories={categories}
					/>

					<div className="flex w-full items-center justify-center gap-2 pl-[2.8rem]">
						<button
							className="h-12  w-[80%]  rounded-xl bg-primary-color font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100"
							type="submit"
							onClick={handleRouterClear}
						>
							Limpiar Filtros{' '}
						</button>
					</div>
				</div>
				<div className="flex w-full flex-col items-center justify-center pb-20 pt-10">
					<Explore softwares={softwares} />
				</div>
			</section>
		</Layout>
	)
}

export default Softwares

export const getServerSideProps: GetServerSideProps = async ({
	req,
	res,
	params,
	query
}) => {
	let softwares: ISoftware[] = []
	const { search, categoryName }: any = query
	if (search) {
		const name: string = typeof search === 'string' ? search : ''
		softwares = await getSoftwareByName(name)
	} else if (categoryName) {
		softwares = await getSoftwaresByCategory(categoryName)
	} else {
		softwares = await getSoftwares()
	}

	const categories = await getCategories()

	res.setHeader(
		'Cache-Control',
		'public, s-maxage=10, stale-while-revalidate=59'
	)

	return {
		props: { softwares, categories }
	}
}
