import Link from 'next/link'
import { FC } from 'react'

interface Props {
	totalPages: number
	currentPage: number
	onPageChange: (page: number) => void
}

const Pagination: FC<Props> = ({ totalPages, currentPage, onPageChange }) => {
	return (
		<nav aria-label="Pagination " className="flex flex-row gap-4  pt-10">
			{Array.from({ length: totalPages }, (_, index) => (
				<Link
					href={{
						pathname: '/dashboard/software-subscriptions',
						query: { page: Number(index + 1) }
					}}
					key={index}
					className={` cursor-pointer rounded-xl px-4 py-2 text-center text-lg  ${
						currentPage === index + 1
							? ' bg-violet-400 text-white '
							: 'bg-white text-primary-color hover:bg-violet-400 hover:text-white'
					}`}
					onClick={() => onPageChange(index + 1)}
				>
					{index + 1}
				</Link>
			))}
		</nav>
	)
}

export default Pagination
