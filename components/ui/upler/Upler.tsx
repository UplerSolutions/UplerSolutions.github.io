import Image from 'next/image'
import React from 'react'

export const Upler = () => {
	return (
		<div className="flex flex-row justify-center bg-zinc-100 pt-20 text-center md:h-[660px] lg:h-[700px] xl:h-[750px]">
			<div className="flex flex-col items-center md:w-[85%] md:flex-row md:items-start xl:ml-[85px] xl:w-[75%]">
				<div className="relative flex flex-col md:absolute">
					<h2 className="pb-3 text-[32px] font-bold text-neutral-700 md:ml-12 md:pb-4 md:text-left lg:ml-0 lg:px-0 lg:pb-10 lg:text-5xl 2xl:text-6xl">
						What is Upler?
					</h2>
					<p className="px-6 text-xl text-neutral-700 md:ml-8 md:w-[50%] md:text-left lg:ml-0 lg:w-[500px] lg:px-0">
						Tired of hunting for essential career tools? UPLER
						simplifies software management. Access diverse packages,
						unify licenses, and save time while staying compliant.
						Your streamlined solution for software success.
					</p>
				</div>
				<div className="relative hidden pt-[40px] md:block lg:w-[90%] 2xl:w-[1200px]">
					<Image
						height={950}
						width={950}
						src="/boxes.png"
						alt="main-picture"
						className="2xl:[90px] w-full md:ml-9 md:mt-8 lg:ml-[75px] lg:mt-0"
					/>
				</div>
				<div className="relative md:hidden">
					<Image
						height={300}
						width={452}
						src="/boxesmobile.png"
						alt=""
						className="mt-4"
					/>
				</div>
			</div>
		</div>
	)
}
