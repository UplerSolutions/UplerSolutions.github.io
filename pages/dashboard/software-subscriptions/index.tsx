import { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { SideBar } from '@/components/ui/sidebar-dashboard'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import Link from 'next/link'

const SoftwareSuscriptions: NextPage = () => {
	const { data: session } = useSession()
	const router = useRouter()
	const pageSize = 5
	const totalPages = Math.ceil(pageSize)

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

	useEffect(() => {
		if (session && session.user && router.pathname === '/login') {
			router.push('/')
		}
	}, [session, router])

	return (
		<Layout title="Upler - Dashboard">
			<div className="h-auto w-full bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] pt-24">
				<div className="flex  h-full w-full flex-col justify-center pb-64 text-neutral-600  sm:flex-row xl:gap-5">
					<SideBar />
					<div className="flex w-full flex-col p-2 pt-5 md:p-4">
						<div className="mb-20 flex w-full flex-col items-center justify-center rounded-xl bg-slate-50 p-2 py-6 pt-5 font-semibold md:p-4 lg:py-8 xl:py-10">
							<div className="mb-8 flex w-[95%] flex-col items-start rounded-xl bg-[#bbbbbb1f] p-4  text-sm lg:p-8 lg:text-base">
								<div className="mb-8 flex w-full items-center   justify-between border-b-2 border-black py-3">
									<h1 className="text-center  text-2xl font-bold">
										Actual
									</h1>
								</div>
								<div className=" flex w-full   flex-col gap-3">
									<div className="flex flex-col gap-3 rounded-xl bg-slate-300 px-2 py-4 sm:w-full sm:flex-row sm:items-center sm:justify-between md:py-4 lg:px-6">
										<div>Paquete</div>
										<div>Email</div>
										<div className="flex flex-col justify-around gap-3 sm:w-[35%] sm:flex-row sm:items-center xl:gap-6 2xl:gap-0">
											<div>Inicio</div>
											<div>Fin</div>
										</div>
									</div>
									<Link
										href={`software-subscriptions/1`}
										className="flex  flex-col gap-3 rounded-xl bg-[#e2e2e284] px-2 py-4 hover:bg-slate-300 sm:w-full sm:flex-row sm:items-center sm:justify-between lg:px-6"
									>
										<div>Experto</div>
										<div className="lg:w-[8%]">
											example@gmail.com
										</div>
										<div className="flex flex-col justify-around gap-3 sm:w-[35%] sm:flex-row sm:items-center xl:gap-6 2xl:gap-0">
											<div>20/09/2023</div>
											<div>20/09/2024</div>
										</div>
									</Link>
									<Link
										href={`software-subscriptions/1`}
										className="flex cursor-pointer flex-col gap-3 rounded-xl bg-[#e2e2e284] px-2 py-4 hover:bg-slate-300 sm:w-full sm:flex-row sm:items-center sm:justify-between lg:px-6"
									>
										<div>Experto</div>
										<div className="lg:w-[8%]">
											example@gmail.com
										</div>
										<div className="flex flex-col justify-around gap-3 sm:w-[35%] sm:flex-row sm:items-center xl:gap-6 2xl:gap-0">
											<div>20/09/2023</div>
											<div>20/09/2024</div>
										</div>
									</Link>
								</div>
							</div>
							<div className="">
								<Pagination
									count={totalPages}
									page={currentPage}
									onChange={handlePaginationChange}
									className=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*       <pre>
			<div className='text-black pt-24 h-[90vh] bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] w-full'>
			{JSON.stringify(session, null, 2)}
			</div>
		</pre> */}
		</Layout>
	)
}

export default SoftwareSuscriptions
