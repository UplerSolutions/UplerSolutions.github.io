import { FC } from 'react'

interface Props {
	totalPages: number
	currentPage: number
	onPageChange: (page: number) => void
}

const Pagination: FC<Props> = ({ totalPages, currentPage, onPageChange }) => {
	return (
		<nav
			aria-label="Pagination "
			className="flex flex-row gap-4  pt-10"
		>
			{Array.from({ length: totalPages }, (_, index) => (
				<button
					key={index}
					className={` cursor-pointer rounded-2xl p-4 text-center text-lg ${
						currentPage === index + 1
							? ' bg-violet-500 '
							: 'bg-white text-primary-color hover:bg-violet-400 hover:text-white'
					}`}
					onClick={() => onPageChange(index + 1)}
				>
					{index + 1}
				</button>
			))}
		</nav>
	)
}

export default Pagination
