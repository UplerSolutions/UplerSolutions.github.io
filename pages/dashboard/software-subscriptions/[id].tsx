import { GetServerSideProps, NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { SideBar } from '@/components/ui/sidebar-dashboard'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

interface Subcription {
	id: number
	software: string
	startDate: string
	endDate: string
	price: number
	active: boolean
}

interface Props {
	subscriptions: Subcription[]
}

const SoftwareSuscription: NextPage<Props> = () => {
	const subscription: Subcription = {
		id: 1,
		software: 'Kepla',
		startDate: '10-03-2024',
		endDate: '10-04-2024',
		price: 10.0,
		active: true
	}

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
										Suscripción - {subscription.software}
									</h1>
								</div>
								<div className=" flex w-full   flex-col gap-3">
									<div className="flex flex-col gap-4 bg-[#e2e2e284] px-2 py-4">
										<p className="text-lg font-semibold">
											Inicio {subscription.startDate}
										</p>

										<p className="text-lg font-semibold">
											Vencimineto {subscription.endDate}
										</p>
										<p className="text-lg font-semibold">
											Precio {subscription.price}
										</p>

										<p className="text-lg font-semibold">
											Suscripción esta activa:{' '}
											{subscription.active === true
												? 'Si'
												: 'No'}
										</p>
									</div>
									<div>
										{subscription.active === true ? (
											<button className="scroll-smooth rounded-xl bg-primary-color p-3 text-center font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100 ">
												Cancelar
											</button>
										) : (
											<button className="scroll-smooth rounded-xl bg-primary-color p-3 text-center font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100 ">
												Renovar
											</button>
										)}
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

export const getServerSideProps: GetServerSideProps = async () => {
	return {
		props: {
			subcription: {
				id: 1,
				software: 'Kepla',
				startDate: '10-03-2024',
				endDate: '10-04-2024',
				price: 10.0,
				active: true
			}
		}
	}
}
