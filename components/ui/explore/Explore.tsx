import { useState, FC } from 'react'
import Pagination from '@mui/material/Pagination'
import { ISoftware } from '@/interface/software'
import CardSoftware from '@/components/ui/cardsoftware/CardSoftware'

interface Props {
	softwares: ISoftware[]
}
export const Explore: FC<Props> = ({ softwares }) => {
	const pageSize = 8
	const totalProducts = softwares?.length
	const totalPages = Math.ceil(totalProducts / pageSize)

	const [currentPage, setCurrentPage] = useState<number>(1)

	const onPageChange = (page: number) => {
		setCurrentPage(page)
	}
	const handlePaginationChange = (
		event: React.ChangeEvent<unknown>,
		page: number
	) => {
		onPageChange(page)
	}

	const startIndex = (currentPage - 1) * pageSize
	const endIndex = startIndex + pageSize
	const displayedProducts: ISoftware[] = softwares?.slice(
		startIndex,
		endIndex
	)

	return (
		<div className="flex flex-col items-center justify-center">
			<ul className="m-auto flex flex-col sm:flex-row w-full flex-wrap items-center justify-center gap-4 md:px-4 md:py-4 md:pb-4 lg:p-0 lg:py-8 2xl:gap-8">
				{displayedProducts.length > 0 ? (
					displayedProducts?.map((product) => (
						<li
							key={product.id}
							className="flex w-[45%] flex-col gap-12 lg:w-[30%] lg:gap-8 xl:w-[20%] "
						>
							<CardSoftware
								id={product.id}
								productName={product.productName}
								lowDescription={product.lowDescription}
								price={product.price}
								created_at={''}
								longDescription={''}
								updated_at={''}
								seller={''}
								directLink={product.directLink}
								imageUrl={product.imageUrl}
								rating={0}
								category={{
									id: '',
									categoryName: ''
								}}
							/>
						</li>
					))
				) : (
					<h3 className="text-neutral-700">
						No Contamos con Softwares Disponibles para esta Categoria
					</h3>
				)}
			</ul>
			<Pagination
				count={totalPages}
				page={currentPage}
				onChange={handlePaginationChange}
				className="pt-10"
			/>
		</div>
	)
}
