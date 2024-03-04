import { NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { Panel } from '@/components/ui/panel/Panel'
import { SideBar } from '@/components/ui/sidebar-dashboard'
import { useState } from 'react'
import { EditIcon } from '@/components/ui/icons'

const Settings: NextPage = () => {
	const [isInputEnabled1, setIsInputEnabled1] = useState(true)
	const [isInputEnabled2, setIsInputEnabled2] = useState(true)
	const [isInputEnabled3, setIsInputEnabled3] = useState(true)

	const toggleInputEnabled1 = (e: any) => {
		e.preventDefault()
		setIsInputEnabled1((prevEnabled) => !prevEnabled)
	}
	const toggleInputEnabled2 = (e: any) => {
		e.preventDefault()
		setIsInputEnabled2((prevEnabled) => !prevEnabled)
	}
	const toggleInputEnabled3 = (e: any) => {
		e.preventDefault()
		setIsInputEnabled3((prevEnabled) => !prevEnabled)
	}
	return (
		<Layout title="Upler - Dashboard">
			<div className="h-auto w-full bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] pt-24">
				<div className="flex  h-full w-full flex-col justify-center  text-neutral-600 sm:flex-row xl:gap-5">
					<SideBar />
					<div className=" flex w-full flex-col p-2 pt-5 md:p-4">
						<div className=" mb-20 flex w-full flex-col items-center justify-center rounded-xl bg-slate-50 py-6 pt-5 font-semibold lg:py-8 xl:py-10">
							<div className="flex  w-[95%] flex-col items-start rounded-xl bg-[#bbbbbb1f] p-4 text-sm lg:p-8 lg:text-base">
								<div className="mb-4 flex w-full items-center justify-between border-b-2 border-black py-3">
									<h1 className="text-center  text-2xl font-semibold">
										Configuración
									</h1>
								</div>
								<div className=" flex w-full flex-col gap-3">
									<div className="flex w-full flex-col gap-3 px-2 py-4 ">
										<h3 className=" text-xl font-semibold">
											Usuario
										</h3>
										<form className="flex w-2/5 flex-col gap-7">
											<div className="flex items-end gap-5 ">
												<div className="flex flex-col gap-2">
													<label
														htmlFor="name"
														className="text-lg"
													>
														Nombre
													</label>
													<input
														disabled={
															isInputEnabled1
														}
														type="text"
														name="name"
													/>
												</div>
												<button
													onClick={
														toggleInputEnabled1
													}
												>
													<EditIcon className="mt-1 h-7 w-7" />
												</button>
											</div>
											<div className="flex items-end gap-5 ">
												<div className="flex flex-col gap-2">
													<label
														htmlFor="lastname"
														className="text-lg"
													>
														Apellido
													</label>
													<input
														disabled={
															isInputEnabled2
														}
														type="text"
														name="lastname"
														id=""
														value=""
													/>
												</div>
												<button
													onClick={
														toggleInputEnabled2
													}
												>
													<EditIcon className="mt-1 h-7 w-7" />
												</button>
											</div>
											<div className="flex items-end gap-5 ">
												<div className="flex flex-col gap-2">
													<label
														htmlFor="email"
														className="text-lg"
													>
														Email
													</label>
													<input
														disabled={
															isInputEnabled3
														}
														type="text"
														name="email"
														id=""
														value=""
													/>
												</div>
												<button
													onClick={
														toggleInputEnabled3
													}
												>
													<EditIcon className="mt-1 h-7 w-7" />
												</button>
											</div>
										</form>
									</div>
									<div className="flex w-full flex-col gap-3 px-2 py-4 ">
										<h3 className=" text-xl font-semibold">
											Metodos de pago
										</h3>
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

export default Settings
