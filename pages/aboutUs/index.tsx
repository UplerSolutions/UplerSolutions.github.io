import { Layout } from '@/components/layout/Layout'
import Link from 'next/link'
import type { NextPage } from 'next'
import { Roadmap } from '@/components/ui/roadmap/Roadmap'
import { Team } from '@/components/ui/team/Team'
import Image from 'next/image'
import { IoDiamondOutline } from 'react-icons/io5'
import { PiBinoculars, PiRocketLight } from 'react-icons/pi'

const Aboutus: NextPage = () => {
	return (
		<Layout title={'Upler - About Us'}>
			<div className="xl:pb-18 flex w-full flex-col items-center justify-center gap-8 bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] pt-24 lg:flex-row lg:items-start lg:pt-48 2xl:pb-20">
				<div className="relative flex w-[80%] flex-col  place-items-center items-center pb-7 text-neutral-700 lg:ml-[7%] lg:w-[40%]  lg:place-items-start  lg:items-start">
					<div className="flex text-center text-[32px]  font-bold md:text-3xl lg:text-left xl:text-5xl 2xl:text-6xl">
						<p className="text-[35px] md:text-4xl xl:text-5xl 2xl:text-6xl">
							<span className="">
								{' '}
								Where cutting-edge software meets{' '}
							</span>
							<span className=" text-primary-color ">
								smart savings
							</span>
						</p>
					</div>
					<p className="pb-10 pt-8 text-center font-semibold lg:w-[90%] lg:text-left">
						Your gateway to seamless License Management and
						Unbeatable Deals
					</p>
					<Link
						href="/register"
						scroll={false}
						className="scroll-smooth"
					>
						<button className=" h-12 w-48 rounded-xl bg-primary-color font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100">
							Register now for free
						</button>
					</Link>
				</div>
				<div className="relative hidden w-full flex-col items-center justify-center overflow-hidden pb-10 lg:flex lg:w-[60%] lg:pr-[7%]">
					<Image
						src={'./globo1.png'}
						alt={''}
						width={400}
						height={500}
					/>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center gap-8 bg-purple-50  py-20">
				<div className="flex text-center text-[32px]  font-bold md:text-left md:text-3xl xl:text-5xl ">
					<p className="text-[35px] md:text-3xl xl:text-5xl">
						<span className="text-neutral-600">Explore our</span>
						<span className=" text-primary-color "> services</span>
					</p>
				</div>
				<hr className="left-0 right-0 m-auto mb-20 w-[100px] border-2 border-primary-color bg-primary-color" />
				<div className=" grid w-[80%] grid-cols-1 gap-10 text-center md:grid md:grid-cols-2 lg:grid-cols-4">
					<div className="flex flex-col items-center justify-start gap-8">
						<div className="rounded-xl bg-purple-100 p-12">
							<Image
								src={'./shop.png'}
								width={95}
								height={95}
								alt={''}
							/>
						</div>
						<div className="flex flex-col  items-center md:gap-1">
							<h4 className=" mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
								Trusted Software Marketplace Deals
							</h4>
							<p className="w-[90%] text-neutral-600 ">
								Explore a vast marketplace featuring rigorously
								evaluated software from trusted partners. Our
								platform ensures quality standards, providing
								users with a diverse array of solutions.
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center justify-start gap-8">
						<div className="rounded-xl bg-purple-100 p-8 xl:p-12">
							<Image
								src={'./bundles.png'}
								width={115}
								height={115}
								alt={''}
							/>
						</div>
						<div className="flex flex-col items-center gap-3 md:gap-1">
							<h4 className=" mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
								Tailored Software Bundles
							</h4>
							<p className="w-[90%] text-neutral-600 ">
								Discover cost-efficient bundles tailored to your
								needs, offering a comprehensive range of
								software services for you.
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center justify-start gap-8">
						<div className="rounded-xl bg-purple-100 p-12">
							<Image
								src={'./notebook.png'}
								width={95}
								height={95}
								alt={''}
							/>
						</div>
						<div className="flex flex-col items-center gap-3 md:gap-1">
							<h4 className=" mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
								Streamlined License Management
							</h4>
							<p className="w-[90%] text-neutral-600 ">
								Upler simplifies and streamlines license
								management. Enjoy a unified platform for
								tracking, renewing, and managing all
								subscriptions efficiently.
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center justify-start gap-8">
						<div className="rounded-xl bg-purple-100 p-12">
							<Image
								src={'./uplerinsign.png'}
								width={95}
								height={95}
								alt={''}
							/>
						</div>
						<div className="flex flex-col items-center gap-3 md:gap-1">
							<h4 className=" mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
								Exclusive Benefits through Insignia
							</h4>
							<p className="w-[90%] text-neutral-600 ">
								Access exclusive benefits with partners through
								our Upler Insignia system. Enjoy perks and
								privileges tailored to enhance your digital
								experience.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center justify-center gap-8 bg-purple-100 py-20 md:gap-5 ">
				<div className="flex w-[90%] justify-center text-center text-[32px] font-bold  md:text-left md:text-3xl lg:w-full xl:text-5xl ">
					<p className="text-center text-[35px] md:text-3xl xl:text-5xl">
						<span className="text-neutral-600 ">Know our core</span>

						<span className="text-primary-color "> principles</span>
					</p>
				</div>
				<hr className="left-0 right-0 m-auto w-[100px] border-2 border-primary-color bg-primary-color " />
				<div className=" grid w-[90%] grid-cols-1 gap-6 text-center md:grid md:grid-cols-3 xl:w-[70%]">
					<div className="align-center grid  grid-rows-2  items-end  justify-items-center lg:p-8 xl:m-6 ">
						<div className="scale-[4.5] pb-4 text-primary-color">
							<PiRocketLight />
						</div>
						<div className="flex flex-col items-center gap-3 md:gap-1">
							<h4 className=" mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
								Mission
							</h4>
							<p className="w-[90%] text-neutral-600 ">
								Simplify access and ownership of software,
								empowering individuals and businesses with
								affordable and efficient solutions.
							</p>
						</div>
					</div>

					<div className="align-center grid  grid-rows-2  items-end  justify-items-center lg:p-8 xl:m-6 ">
						<div className="scale-[4.5] pb-4 text-primary-color">
							<PiBinoculars />
						</div>
						<div className="flex flex-col items-center gap-3 md:gap-1">
							<h4 className="mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
								Vision
							</h4>
							<p className="w-[90%] text-neutral-600 ">
								To be the leading platform for the management
								and distribution of software tools,
								revolutionizing how it is accessed and used
								globally.
							</p>
						</div>
					</div>
					<div className="align-center grid  grid-rows-2  items-end  justify-items-center lg:p-8 xl:m-6 ">
						<div className="scale-[4.5] pb-4 text-primary-color">
							<IoDiamondOutline />
						</div>
						<div className="flex flex-col items-center gap-3 md:gap-1">
							<h4 className="mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
								Values
							</h4>
							<p className="w-[90%] text-neutral-600">
								Transparency, commitment to quality,
								collaboration, strategic partnerships, customer
								care and empowerment, affordability and
								efficiency.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Team />
			<Roadmap />
		</Layout>
	)
}

export default Aboutus
