import { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { SideBar } from '@/components/ui/sidebar-dashboard'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const SoftwareSuscription: NextPage = () => {
	return (
		<Layout title="Upler - Dashboard">
			<div className="h-[90vh] w-full bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] pt-24">
				<div className="flex w-full justify-center pb-64  text-neutral-600 xl:gap-5">
					<SideBar />
					<div className="flex w-full flex-col p-2 pt-5 md:p-4">
						<div className="flex h-[75vh] w-full flex-col items-center justify-center rounded-xl bg-slate-50 py-6 font-semibold lg:py-8 xl:py-10">
							<div className="flex h-full w-[95%] flex-col items-start rounded-xl bg-[#bbbbbb1f] p-4 text-sm lg:p-8 lg:text-base">
								<div className="mb-4 flex w-full items-center   justify-between border-b-2 border-black py-3">
									<h1 className="text-center  text-2xl font-semibold">
										Actual
									</h1>
								</div>
								<div className=" flex w-full flex-col  gap-3">
									<div className="flex flex-col gap-3 rounded-xl bg-[#dfe5ee] px-2 py-4 sm:w-full sm:flex-row sm:items-center sm:justify-between md:py-4 lg:px-6">
										<div>Paquete</div>
										<div>Email</div>
										<div className="flex flex-col justify-around gap-3 sm:w-[35%] sm:flex-row sm:items-center xl:gap-6 2xl:gap-0">
											<div>Inicio</div>
											<div>Fin</div>
										</div>
									</div>
									<div className="flex flex-col gap-3 rounded-xl bg-[#e2e2e284] px-2 py-4 sm:w-full sm:flex-row sm:items-center sm:justify-between lg:px-6">
										<div className="flex flex-row items-center justify-start gap-2 md:justify-between lg:w-[8%]">
											<input
												type="checkbox"
												className="accent-primary-color"
											/>
											<button className="flex rounded-3xl bg-primary-color px-2 py-2 md:px-3 md:py-3"></button>
											<div>Experto</div>
										</div>
										<div className="lg:w-[8%]">
											example@gmail.com
										</div>
										<div className="flex flex-col justify-around gap-3 sm:w-[35%] sm:flex-row sm:items-center xl:gap-6 2xl:gap-0">
											<div>20/09/2023</div>
											<div>20/09/2024</div>
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

export default SoftwareSuscription
