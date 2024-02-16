// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Mousewheel, Keyboard, Pagination } from 'swiper/modules'
// Import Swiper styles
import { FaCheck } from 'react-icons/fa'
import { useState } from 'react'
import { data } from '@/data/plans'
import { IPlan } from '@/interface/plan'
import Image from 'next/image'

const ComingSoonMessage = () => {
	return (
		<div className="flex w-[100%] items-center justify-center">
			<div className="absolute top-0 z-[1000] m-auto  flex h-full w-[80%] items-center justify-center rounded-3xl bg-neutral-700 bg-opacity-80 text-white duration-300">
				<Image
					src="./comingsoon.png"
					alt="coming soon"
					width={200}
					height={200}
					className="w-full "
				></Image>
			</div>
		</div>
	)
}

export const Carousel = () => {
	const [plans, setPlans] = useState(data)
	const [hoveredPlan, setHoveredPlan] = useState('')

	const handleHover = (planName: string) => {
		setHoveredPlan(planName)
	}

	const handleLeave = () => {
		setHoveredPlan('')
	}

	return (
		<section className="w-full max-w-[100%] md:hidden">
			<div className="m-auto w-full max-w-[100%] py-6 ">
				<h1 className="text-center text-3xl font-bold text-neutral-700 lg:p-8 lg:text-5xl">
					Un Paquete Para Cada 
					<span className="text-[#b06eca]"> Necesidad </span>
				</h1>

				<Swiper
					//style={{
					//'--swiper-pagination-color': '#b06eca',
					//'--swiper-navigation-color': '#b06eca',
					//'--swiper-navigation-position': 'absolute',
					//'--swiper-pagination-bullet-size': '14px'
					//}}
					cssMode={true}
					navigation={true}
					pagination={true}
					mousewheel={true}
					keyboard={true}
					modules={[Navigation, Pagination, Mousewheel, Keyboard]}
					className="mySwiper "
				>
					{plans.map((plan: IPlan) => (
						<SwiperSlide key={plan.name} className="w-full">
							<ul className="flex flex-wrap items-center justify-center gap-5 pt-10 2xl:gap-14">
								<li
									key={plan.name}
									className="relative flex  w-full cursor-not-allowed  justify-center transition duration-300"
									onMouseEnter={() => handleHover(plan.name)}
									onMouseLeave={handleLeave}
								>
									<div className="flex h-full w-[80%] cursor-not-allowed flex-col items-center justify-center rounded-3xl border-2 bg-white  pt-8 text-neutral-700 hover:border-2 hover:border-gray-600">
										{hoveredPlan === plan.name && (
											<ComingSoonMessage />
										)}
										<div className="relative flex h-full flex-col items-center justify-evenly px-6 pb-4 text-center first-letter:w-full">
											<div className="pb-4">
												<h1 className=" py-4 text-4xl font-bold">
													{plan.name}
												</h1>
												<p>{plan.description}</p>
											</div>
											<h2 className="flex items-center gap-3 py-8 text-5xl font-bold text-primary-color">
												<span className="text-xl">
													$
												</span>
												{plan.price}
												<span className=" text-base font-normal text-neutral-600">
													USD / mes
												</span>
											</h2>
											<button className="h-12 w-48 cursor-not-allowed rounded-xl bg-primary-color font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-100 hover:text-primary-color hover:delay-100">
												Compra el Paquete
											</button>
										</div>
										<div className="flex flex-1 flex-col px-6">
											<div>
												<hr className="border-o mb-6 h-[2px] rounded bg-neutral-400" />
												<h2 className="text-xl font-semibold">
													{plan.name} Paquete Incluye
												</h2>
												<ul className="pb-6">
													{plan.benefits.map(
														(benefits) => (
															<li
																key={benefits}
																className="flex items-center py-3 text-neutral-500 "
															>
																<FaCheck className="text-primary-color" />
																<span className="pl-3">
																	{benefits}
																</span>
															</li>
														)
													)}
												</ul>
												<hr className=" border-o mx-1 my-1 h-[2px] rounded bg-neutral-400" />
												<h2 className="text-xl font-semibold">
													Beneficios
												</h2>
											</div>

											<div className="flex w-[35%] items-center justify-between pb-10 pt-4">
												<Image
													src="https://i0.wp.com/unaaldia.hispasec.com/wp-content/uploads/2020/02/adobe-logo.jpg?fit=840%2C473&ssl=1"
													alt={''}
													width={100}
													height={70}
												/>
												<Image
													src="https://estaticos-cdn.elperiodico.com/clip/ec639019-0fde-42e1-ba01-9598859c2d28_alta-libre-aspect-ratio_default_0.jpg"
													alt={''}
													width={100}
													height={70}
												/>
												<Image
													src="https://www.fathym.com/img/Figma2.png"
													alt={''}
													width={100}
													height={70}
												/>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}
