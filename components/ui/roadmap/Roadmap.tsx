import React from 'react'
import Image from 'next/image'

export const Roadmap = () => {
	return (
		<div className=" flex w-full items-center justify-center ">
			<div className="w-full bg-gray-50 pb-[180px] pt-20 sm:pb-[120px] md:pb-[140px]  2xl:pt-40">
				<div className="position absolute z-10 w-full">
					<Image
						src="./sky.png"
						alt=""
						width={300}
						height={300}
						className="absolute z-10 hidden h-[1200px] w-full md:flex"
					/>
				</div>
				<Image
					src="./phonesky.png"
					alt=""
					width={300}
					height={300}
					className="absolute z-10 flex h-[1170px] w-full sm:h-[1110px] md:hidden"
				/>
				<div className="flex items-center justify-center  text-center text-[32px] font-bold md:text-left md:text-3xl xl:text-5xl">
					<p className="z-30 w-[300px] text-center text-[35px] md:w-[100%] md:text-3xl xl:text-5xl">
						<span className="text-neutral-600 ">
							Travel trough our
						</span>

						<span className="text-primary-color "> roadmap</span>
					</p>
				</div>
				<div className="flex w-full items-center justify-center pt-20 md:pt-32">
					<Image
						src="./ballons.png"
						alt=""
						width={640}
						height={875}
						className="z-30 hidden w-[] md:flex"
					/>
				</div>
				<div className="flex w-full items-center justify-center">
					<Image
						src="./phoneballons.png"
						alt=""
						width={366}
						height={700}
						className="z-30 flex md:hidden"
					/>
				</div>
			</div>
		</div>
	)
}

export default Roadmap
