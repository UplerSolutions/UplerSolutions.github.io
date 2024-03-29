import  { useState } from 'react'
import { data } from '@/data/benefits'
import Image from 'next/image'

export const Benefits = () => {
	const [benefits, setBenefits] = useState(data)

	return (
		<div className=" flex w-[100%] flex-row items-center justify-center bg-zinc-100 pb-8 text-center md:mb-0 2xl:py-20">
			<div className="flex w-[90%]  flex-col items-center rounded-3xl bg-zinc-50 px-8 pb-5 text-center md:w-[75%] lg:pt-5">
				<div className="flex h-fit max-w-fit text-center">
					<h2 className="py-8 text-3xl font-bold text-neutral-700 md:ml-12 md:pb-16 md:text-5xl lg:ml-0 lg:px-0 lg:pb-24 2xl:text-6xl ">
						¿Por qué los clientes eligen Upler?
					</h2>
				</div>
				<div className=" flex w-[100%] flex-col gap-7 text-center md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 2xl:gap-4">
					{benefits.map((benefit) => (
						<div
							className="align-center grid  grid-rows-2  items-end  justify-items-center  md:items-center lg:items-start 2xl:m-6"
							key={benefit.title}
						>
							<div>
								<Image
									src={benefit.icon}
									alt={benefit.title}
									width={95}
									height={95}
								/>
							</div>
							<div className="flex flex-col gap-3 md:gap-1">
								<h4 className=" pb-2 text-2xl text-black md:text-[32px]">
									{benefit.title}
								</h4>
								<p className="text-lg text-neutral-700">
									{benefit.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
