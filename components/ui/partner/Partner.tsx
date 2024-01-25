import Image from 'next/image'

export const Partner = () => {
	return (
		<section className="flex w-[100%] flex-col items-center justify-center pb-6 pt-14  font-semibold text-neutral-600 md:pt-28">
			<div className=" flex w-full flex-col items-center justify-center md:w-[88%] xl:w-[78%]">
				<div className="flex flex-col items-center justify-center">
					<div className="flex w-full items-center pb-10 text-center">
						{/* <div className="flex flex-col items-center justify-center pb-3">
							<h3 className="pb-4 text-sm md:text-base lg:text-lg">
								GET TO KNOW WHO TRUSTS US
							</h3>
							<h2 className="text-3xl font-bold text-neutral-700 lg:text-4xl xl:text-5xl">
								Our Official
								<span className="text-primary-color">
									{' '}
									Partnerships
								</span>
							</h2>
						</div> */}
						<div className=" hidden lg:invisible">
							<h3 className="text-neutral-700">
								CONOCE QUIEN CONFIA EN NOSOTROS
							</h3>
							<h2 className="text-4xl">
								Nuestros
								<span className="text-primary-color0">
									{' '}
									partnerships oficiales
								</span>
							</h2>
						</div>
					</div>
				</div>

				<div className="flex flex-wrap items-center justify-center gap-8 pb-14 sm:flex-row md:gap-8 lg:flex-nowrap ">
					<Image
						height={120}
						width={600}
						src="/Todos.png"
						alt="partner-logo"
						className="hidden w-[60%] lg:block"
					/>

					<Image
						height={120}
						width={180}
						src="/Bybit.png"
						alt="partner-logo"
						className="h-[42px] w-[120px] lg:hidden"
					/>
					<Image
						height={80}
						width={180}
						src="/prex.png"
						alt="partner-logo"
						className="h-[45px] w-[120px] lg:hidden"
					/>

					<Image
						height={80}
						width={180}
						src="/Damke.png"
						alt="partner-logo"
						className="h-[65px] w-[120px] lg:hidden"
					/>

					<Image
						height={80}
						width={180}
						src="/vincapital.png"
						alt="partner-logo"
						className="h-[100px] w-[120px] lg:hidden "
					/>
				</div>
			</div>
		</section>
	)
}
