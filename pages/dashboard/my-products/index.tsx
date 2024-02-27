import { GetServerSideProps, NextPage } from 'next'
import { Layout } from '@/components/layout/Layout'
import { SideBar } from '@/components/ui/sidebar-dashboard'
import { AiOutlinePlusSquare } from 'react-icons/ai'
import { getSoftware } from '@/service/software/software-service'
import { ISoftware } from '@/interface/software'
import Image from 'next/image'
interface Props {
	software: ISoftware
}

const Benefits: NextPage<Props> = ({ software }) => {
	return (
		<Layout title="Upler - Dashboard">
			<div className=" w-full bg-gradient-to-r from-[#fde9fc] to-[#fffbe0] pt-24">
				<div className="flex w-full justify-center pb-64  text-neutral-600 xl:gap-5">
					<SideBar />
					<div className=" flex  w-full flex-col p-8">
						<div className="flex w-full flex-col items-center justify-center rounded-xl bg-purple-500 py-6 font-semibold lg:py-8 xl:py-10">
							<div className="flex w-[95%] flex-col items-start rounded-xl bg-purple-300 p-4 text-sm lg:p-8 lg:text-base">
								<div className="mb-4 flex w-full items-center   justify-between border-b-2 border-black py-3">
									<h1 className="text-center  text-2xl font-semibold">
										Mis Productos
									</h1>
								</div>
								<div className="flex w-full gap-5 sm:flex-col sm:items-center md:flex-row">
									<div className="h-auto w-1/5 rounded-md bg-[#dfe5ee] ">
										<div className="flex flex-col items-center gap-6 py-4 ">
											<h3 className="text-lg font-bold">
												Agregar nuevo producto{}
											</h3>
											<button>
												<AiOutlinePlusSquare className="h-20 w-20" />
											</button>
										</div>
									</div>
									<div className="h-auto w-1/5 rounded-md bg-[#dfe5ee]  ">
										<div className="flex flex-col items-center gap-6 py-4 ">
											<h3 className="text-lg font-bold">
												{software.productName}
											</h3>
											<Image
												src={software.imageUrl}
												alt=""
												width={250}
												height={250}
											/>
										</div>
									</div>
									<div className="h-auto w-1/5 rounded-md bg-[#dfe5ee]  ">
										<div className="flex flex-col items-center gap-6 py-4 ">
											<h3 className="text-lg font-bold">
												{software.productName}
											</h3>
											<Image
												src={software.imageUrl}
												alt=""
												width={250}
												height={250}
											/>
										</div>
									</div>
									<div className="h-auto w-1/5 rounded-md bg-[#dfe5ee]  ">
										<div className="flex flex-col items-center gap-6 py-4 ">
											<h3 className="text-lg font-bold">
												{software.productName}
											</h3>
											<Image
												src={software.imageUrl}
												alt=""
												width={250}
												height={250}
											/>
										</div>
									</div>
									<div className="h-auto w-1/5 rounded-md bg-[#dfe5ee]  ">
										<div className="flex flex-col items-center gap-6 py-4 ">
											<h3 className="text-lg font-bold">
												{software.productName}
											</h3>
											<Image
												src={software.imageUrl}
												alt=""
												width={250}
												height={250}
											/>
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

export default Benefits
export const getServerSideProps: GetServerSideProps = async ({
	req,
	res,
	params,
	query
}) => {
	const software = await getSoftware('8d8f5745-7512-41f9-8112-876f783fc867')
	return {
		props: { software }
	}
}
