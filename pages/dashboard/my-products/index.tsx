import { GetServerSideProps, NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { SideBar } from '@/components/ui/sidebar-dashboard'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { getSoftware } from '@/service/software/software-service'
import { ISoftware } from '@/interface/software'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	software: ISoftware
}

const MyProducts: NextPage<Props> = ({ software }) => {
	return (
		<Layout title="Upler - Dashboard">
			<div className="h-auto w-full bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] pt-24">
				<div className="flex w-full flex-col justify-center pb-64  text-neutral-600  sm:flex-row xl:gap-5">
					<SideBar />
					<div className=" flex w-full flex-col p-2 pt-5 md:p-4">
						<div className="mb-20 flex w-full flex-col items-center justify-center rounded-xl bg-slate-50 py-6 font-semibold lg:py-8 xl:py-10">
							<div className="mb-8 flex w-[95%] flex-col items-start rounded-xl  bg-[#bbbbbb1f] p-4 text-sm lg:p-8 lg:text-base">
								<div className="mb-8 flex w-full items-center  justify-between  border-b-2 border-black py-3">
									<h1 className="text-center  text-2xl font-bold">
										Mis Productos
									</h1>
								</div>
								<div className="flex w-full  flex-wrap items-center justify-center gap-5 md:justify-start ">
									<div className="w-max-[20.5rem]">
										<div className=" flex w-full  flex-col justify-between rounded-xl bg-white text-neutral-950 max-md:pt-2 md:p-4 md:pb-1 md:text-center lg:h-auto xl:w-auto  ">
											<div className="flex w-full items-center justify-center rounded-xl">
												<AiOutlinePlusSquare
													size={100}
												/>
											</div>
											<Link
												href={'/createProduct'}
												className="group relative rounded-xl border-2 border-primary-color bg-primary-color  delay-100 px-5  py-2 text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color "
											>
												Agregar un producto
											</Link>
										</div>
									</div>
									{/* <div className="w-max-[20rem]">
										<div className=" flex w-full  flex-col justify-between rounded-xl bg-white text-neutral-950 max-md:pt-2 md:p-4 md:pb-1 md:text-center lg:h-auto xl:w-auto  ">
											<div className="group/item w-full">
												<div className="relative flex w-full items-center justify-center rounded-xl">
													<Image
														src={
															'/' +
															software.imageUrl
														}
														alt=""
														width={200}
														height={200}
														className=" md-w-full flex items-center justify-center md:mt-4"
													/>
												</div>
												<div className="w-full py-4 lg:px-0 ">
													<div className=" group/item flex flex-1 flex-col items-center justify-center gap-1 md:items-start md:justify-start">
														<h2 className="text-2xl">
															{
																software.productName
															}
														</h2>
													</div>
												</div>
											</div>
											<Link
												href={
													'/software/' + software.id
												}
												className="w-full  rounded-xl bg-primary-color py-2 text-center text-lg font-semibold text-white transition hover:border hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100"
											>
												Ver mi producto
											</Link>
										</div>
									</div> */}
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

export default MyProducts

export const getServerSideProps: GetServerSideProps = async () => {
	const software = await getSoftware('8d8f5745-7512-41f9-8112-876f783fc867')
	return {
		props: { software }
	}
}
