import type { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { Panel } from '@/components/ui/panel/Panel'
import { useSession } from 'next-auth/react'
import { SideBar } from '@/components/ui/sidebar-dashboard'

const Dashboard: NextPage = () => {
	const { data: session, status } = useSession()

	return (
		<Layout title="Upler - Dashboard">
			<div className=" w-full bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] pt-24">
				<div className="flex  h-full w-full flex-col justify-center  text-neutral-600  sm:flex-row xl:gap-5">
					<SideBar />
					<div className="flex w-full flex-col p-2 pt-5 md:p-4">
						<div className="mb-20 flex w-full flex-col items-center justify-center rounded-xl bg-slate-50 py-6 font-semibold lg:py-8 xl:py-10">
							<div className="mb-8 flex w-[95%] flex-col items-start gap-10 rounded-xl bg-[#bbbbbb1f] p-4  text-sm lg:p-8 lg:text-base">
								<div className="w-full ">
									<div className="mb-4 flex w-full items-center   justify-between border-b-2 border-black py-3">
										<h1 className="text-center  text-2xl font-semibold">
											Mis Consumos
										</h1>
									</div>
									<div className="grid w-full grid-cols-6 grid-rows-2 gap-10">
										<div className="col-start-1 col-end-5 h-[100px] border  border-red-400">
											1
										</div>
										<div className="col-start-5 col-end-7 h-[100px]  border  border-red-400">
											2
										</div>
										<div className="col-start-1 col-end-3 row-start-2 h-[100px]  border  border-red-400">
											3
										</div>
										<div className="col-start-3 col-end-7 row-start-2 h-[100px]  border  border-red-400">
											4
										</div>
									</div>
								</div>
								<div className="w-full ">
									<div className="mb-4 flex w-full items-center   justify-between border-b-2 border-black py-3">
										<h1 className="text-center  text-2xl font-semibold">
											Mis Ganancias
										</h1>
									</div>
									<div className="grid w-full grid-cols-6 grid-rows-2 gap-10">
										<div className="col-start-1 col-end-5 h-[100px] border  border-red-400">
											1
										</div>
										<div className="col-start-5 col-end-7 h-[100px]  border  border-red-400">
											2
										</div>
										<div className="col-start-1 col-end-3 row-start-2 h-[100px]  border  border-red-400">
											3
										</div>
										<div className="col-start-3 col-end-7 row-start-2 h-[100px]  border  border-red-400">
											4
										</div>
									</div>
								</div>
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

export default Dashboard
