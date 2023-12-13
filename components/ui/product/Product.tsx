import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Image from 'next/image'
import { BsCheck2 } from 'react-icons/bs'
import { IoStarSharp } from 'react-icons/io5'

interface Software {
	longDescription: string
	imageUrl: string
	productName: string
}
export const Product = ({ software }: { software: Software }) => {
	const [value, setValue] = React.useState('overview')

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue)
	}
	return (
		<div className="flex flex-col items-center bg-neutral-50">
			<div className=" w-full md:w-[92%]">
				<Tabs
					value={value}
					onChange={handleChange}
					textColor="secondary"
					indicatorColor="secondary"
					variant="scrollable"
					scrollButtons
					allowScrollButtonsMobile
					aria-label="scrollable force tabs example"
				>
					<Tab value="overview" label="Overview" />
					<Tab value="Features" label="Features" href="#features" />
					<Tab
						value="Questions"
						label="Questions"
						href="#questions"
					/>
					<Tab value="Reviews" label="Reviews" href="#reviews" />
				</Tabs>
			</div>
			<hr className="w-full" />

			<div className="flex">
				<div className="flex flex-col items-center lg:pl-8">
					<div className="w-[87%]">
						<h1 className=" py-10 text-3xl text-neutral-700">
							Overview
						</h1>
						<p className="pb-10 text-neutral-700">
							{software.longDescription}
							<br />
							<br />
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Quos necessitatibus neque quisquam veniam sint
							non commodi veritatis voluptatibus aliquam,
							accusantium magnam harum officiis numquam
							dignissimos facere suscipit totam tenetur
							consequatur! Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Nisi odio, ratione animi facere
							amet, beatae quisquam delectus cum praesentium eius
							recusandae fugit! Alias quidem quis distinctio eos
							voluptas, consequatur ullam. Lorem ipsum dolor sit
							amet consectetur adipisicing elit. Debitis
							reiciendis est laboriosam voluptate atque aliquam
							soluta, libero itaque repudiandae ipsum quam odio
							alias placeat vero, iure omnis provident consequatur
							ducimus. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Nihil est dolores repellat quo
							error atque dolorum reiciendis eos reprehenderit,
							natus pariatur delectus, libero perspiciatis
							aspernatur harum ex numquam quasi quis.
						</p>
						<Image
							src={`/${software.imageUrl}`}
							alt=""
							width={100}
							height={100}
							className="mb-10 w-full rounded-2xl lg:w-[50%]"
						/>
					</div>
					<div className="flex w-[87%] flex-col justify-start">
						<h1
							className="py-10 text-3xl text-neutral-700"
							id="features"
						>
							Features
						</h1>
						<p className="pb-8 text-neutral-700">
							Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Quos necessitatibus neque quisquam veniam sint
							non commodi veritatis voluptatibus aliquam,
							accusantium magnam harum officiis numquam
							dignissimos facere suscipit totam tenetur
							consequatur! Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Nisi odio, ratione animi facere
							amet, beatae quisquam delectus cum praesentium eius
							recusandae fugit! Alias quidem quis distinctio eos
							voluptas, consequatur ullam. Lorem ipsum dolor sit
							amet consectetur adipisicing elit. Debitis
							reiciendis est laboriosam voluptate atque aliquam
							soluta, libero itaque repudiandae ipsum quam odio
							alias placeat vero, iure omnis provident consequatur
							ducimus. Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Nihil est dolores repellat quo
							error atque dolorum reiciendis eos reprehenderit,
							natus pariatur delectus, libero perspiciatis
							aspernatur harum ex numquam quasi quis.
						</p>
						<ul className="grid pb-10 pl-2 md:grid-cols-2 xl:w-[50%]">
							<li className="flex items-center gap-6 text-neutral-700">
								<BsCheck2 className="scale-[1.5] text-primary-color" />
								Lorem ipsum dolor sit amet.
							</li>
							<li className="flex items-center gap-6 text-neutral-700">
								<BsCheck2 className="scale-[1.5] text-primary-color" />
								Lorem ipsum dolor sit amet.
							</li>
							<li className="flex items-center gap-6 text-neutral-700">
								<BsCheck2 className="scale-[1.5] text-primary-color" />
								Lorem ipsum dolor sit amet.
							</li>
							<li className="flex items-center gap-6 text-neutral-700">
								<BsCheck2 className="scale-[1.5] text-primary-color" />
								Lorem ipsum dolor sit amet.
							</li>
							<li className="flex items-center gap-6 text-neutral-700">
								<BsCheck2 className="scale-[1.5] text-primary-color" />
								Lorem ipsum dolor sit amet.
							</li>
							<li className="flex items-center gap-6 text-neutral-700">
								<BsCheck2 className="scale-[1.5] text-primary-color" />
								Lorem ipsum dolor sit amet.
							</li>
							<li className="flex items-center gap-6 text-neutral-700">
								<BsCheck2 className="scale-[1.5] text-primary-color" />
								Lorem ipsum dolor sit amet.
							</li>
							<li className="flex items-center gap-6 text-neutral-700">
								<BsCheck2 className="scale-[1.5] text-primary-color" />
								Lorem ipsum dolor sit amet.
							</li>
							<li className="flex items-center gap-6 text-neutral-700">
								<BsCheck2 className="scale-[1.5] text-primary-color" />
								Lorem ipsum dolor sit amet.
							</li>
							<li className="flex items-center gap-6 text-neutral-700">
								<BsCheck2 className="scale-[1.5] text-primary-color" />
								Lorem ipsum dolor sit amet.
							</li>
						</ul>
					</div>
					<div className="flex w-[87%] flex-col justify-start ">
						<h1
							className="py-10 text-3xl text-neutral-700"
							id="questions"
						>
							Questions
						</h1>
						<p className="pb-8 text-neutral-700">
							search a question
						</p>
						<div className="flex flex-col border-2 border-gray-100 p-6 lg:w-[60%] ">
							<div className="flex  gap-6  text-neutral-700">
								<div>
									<Image
										src={'../joaquin.webp'}
										alt={''}
										width={70}
										height={70}
										className="rounded-full"
									/>
								</div>
								<div className=" flex flex-col">
									<h3>Joaquin</h3>
									<p className="flex items-center gap-2">
										<BsCheck2 className="scale-[1.5] text-primary-color" />
										Verified Purchaser
									</p>
									<p className="text-xs text-neutral-400">
										Nov. 22, 2023, 8:30 a.m. | Member Since:
										20/03/15
									</p>
								</div>
							</div>
							<div className="flex p-2 pt-6">
								<p className="text-neutral-700">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quisquam, quod. Lorem
									ipsum dolor sit amet consectetur adipisicing
									elit. Quisquam, quod. Lorem ipsum dolor sit
									amet consectetur adipisicing elit. Quisquam,
									quod.
								</p>
							</div>
						</div>
						<div className="mt-8 flex flex-col border-2 bg-gray-100 p-6 lg:w-[60%]">
							<div className="flex  gap-6  text-neutral-700">
								<div>
									<Image
										src={'../joaquin.webp'}
										alt={''}
										width={70}
										height={70}
										className="rounded-full"
									/>
								</div>
								<div className=" flex flex-col">
									<h3>Joaquin</h3>
									<p className="flex items-center gap-2">
										<BsCheck2 className="scale-[1.5] text-primary-color" />
										Verified Purchaser
									</p>
									<p className="text-xs text-neutral-400">
										Nov. 22, 2023, 8:30 a.m. | Member Since:
										20/03/15
									</p>
								</div>
							</div>
							<div className="flex p-2 pt-6">
								<p className="text-neutral-700">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quisquam, quod. Lorem
									ipsum dolor sit amet consectetur adipisicing
									elit. Quisquam, quod. Lorem ipsum dolor sit
									amet consectetur adipisicing elit. Quisquam,
									quod.
								</p>
							</div>
						</div>
						<div className="mt-3 flex flex-col border-2 bg-gray-100 p-6 lg:w-[60%] ">
							<div className="flex  gap-6  text-neutral-700">
								<div>
									<Image
										src={'../joaquin.webp'}
										alt={''}
										width={70}
										height={70}
										className="rounded-full"
									/>
								</div>
								<div className=" flex flex-col">
									<h3>Joaquin</h3>
									<p className="flex items-center gap-2">
										<BsCheck2 className="scale-[1.5] text-primary-color" />
										Verified Purchaser
									</p>
									<p className="text-xs text-neutral-400">
										Nov. 22, 2023, 8:30 a.m. | Member Since:
										20/03/15
									</p>
								</div>
							</div>
							<div className="flex p-2 pt-6">
								<p className="text-neutral-700">
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Quisquam, quod. Lorem
									ipsum dolor sit amet consectetur adipisicing
									elit. Quisquam, quod. Lorem ipsum dolor sit
									amet consectetur adipisicing elit. Quisquam,
									quod.
								</p>
							</div>
						</div>
					</div>
					<div className="flex w-[87%] flex-col justify-start pb-10">
						<h1
							className="py-10 text-3xl text-neutral-700"
							id="reviews"
						>
							Reviews
						</h1>

						<div className="flex flex-col items-center justify-between gap-10 p-6 shadow-lg lg:w-[700px] lg:flex-row">
							<div className="w-full lg:w-[80%]">
								<Image
									src={`/${software.imageUrl}`}
									alt={''}
									width={100}
									height={100}
									className="w-full"
								/>
							</div>
							<div className="flex gap-8">
								<div className="flex flex-col items-center gap-4 text-neutral-700">
									<h2 className="text-4xl lg:text-7xl">
										4.5
									</h2>
									<div className="flex gap-[10px] lg:gap-5">
										<IoStarSharp className="scale-[1.5] text-primary-color lg:scale-[2]" />
										<IoStarSharp className="scale-[1.5] text-primary-color lg:scale-[2]" />
										<IoStarSharp className="scale-[1.5] text-primary-color lg:scale-[2]" />
										<IoStarSharp className="scale-[1.5] text-primary-color lg:scale-[2]" />
										<IoStarSharp className="scale-[1.5] text-primary-color lg:scale-[2]" />
									</div>
									<p className="text-xs text-neutral-400">
										653 reviews
									</p>
								</div>
								<div className="flex flex-col gap-2">
									<div className=" flex items-center  gap-2 text-neutral-700">
										<p>5</p>{' '}
										<IoStarSharp className=" text-primary-color" />
										<hr className="w-[100px] border-2 " />
									</div>
									<div className=" flex items-center  gap-2 text-neutral-700">
										<p>4</p>{' '}
										<IoStarSharp className=" text-primary-color" />
										<hr className="w-[80px] border-2 " />
									</div>
									<div className=" flex items-center  gap-2 text-neutral-700">
										<p>3</p>{' '}
										<IoStarSharp className=" text-primary-color" />
										<hr className="w-[60px] border-2 " />
									</div>
									<div className=" flex items-center  gap-2 text-neutral-700">
										<p>2</p>{' '}
										<IoStarSharp className=" text-primary-color" />
										<hr className="w-[40px] border-2 " />
									</div>
									<div className=" flex items-center  gap-2 text-neutral-700">
										<p>1</p>{' '}
										<IoStarSharp className=" text-primary-color" />
										<hr className="w-[20px] border-2 " />
									</div>
								</div>
							</div>
						</div>

						<div className="flex w-full flex-col">
							<div className="mt-8 flex flex-col border-2 border-gray-100 p-6 lg:w-[60%]">
								<div className="flex  gap-6  text-neutral-700">
									<div>
										<Image
											src={'../joaquin.webp'}
											alt={''}
											width={70}
											height={70}
											className="rounded-full"
										/>
									</div>
									<div className=" flex flex-col">
										<h3>Joaquin</h3>
										<p className="flex items-center gap-2">
											<BsCheck2 className="scale-[1.5] text-primary-color" />
											Verified Purchaser
										</p>
										<p className="text-xs text-neutral-400">
											Nov. 22, 2023, 8:30 a.m. | Member
											Since: 20/03/15
										</p>
									</div>
								</div>
								<div className="flex p-2 pt-6">
									<p className="text-neutral-700">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quisquam, quod. Lorem
										ipsum dolor sit amet consectetur
										adipisicing elit. Quisquam, quod. Lorem
										ipsum dolor sit amet consectetur
										adipisicing elit. Quisquam, quod.
									</p>
								</div>
							</div>
							<div className="mt-8 flex flex-col border-2 border-gray-100 p-6 lg:w-[60%]">
								<div className="flex  gap-6  text-neutral-700">
									<div>
										<Image
											src={'../joaquin.webp'}
											alt={''}
											width={70}
											height={70}
											className="rounded-full"
										/>
									</div>
									<div className=" flex flex-col">
										<h3>Joaquin</h3>
										<p className="flex items-center gap-2">
											<BsCheck2 className="scale-[1.5] text-primary-color" />
											Verified Purchaser
										</p>
										<p className="text-xs text-neutral-400">
											Nov. 22, 2023, 8:30 a.m. | Member
											Since: 20/03/15
										</p>
									</div>
								</div>
								<div className="flex p-2 pt-6">
									<p className="text-neutral-700">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quisquam, quod. Lorem
										ipsum dolor sit amet consectetur
										adipisicing elit. Quisquam, quod. Lorem
										ipsum dolor sit amet consectetur
										adipisicing elit. Quisquam, quod.
									</p>
								</div>
							</div>
							<div className="mt-8 flex flex-col border-2 border-gray-100 p-6 lg:w-[60%]">
								<div className="flex  gap-6  text-neutral-700">
									<div>
										<Image
											src={'../joaquin.webp'}
											alt={''}
											width={70}
											height={70}
											className="rounded-full"
										/>
									</div>
									<div className=" flex flex-col">
										<h3>Joaquin</h3>
										<p className="flex items-center gap-2">
											<BsCheck2 className="scale-[1.5] text-primary-color" />
											Verified Purchaser
										</p>
										<p className="text-xs text-neutral-400">
											Nov. 22, 2023, 8:30 a.m. | Member
											Since: 20/03/15
										</p>
									</div>
								</div>
								<div className="flex p-2 pt-6">
									<p className="text-neutral-700">
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quisquam, quod. Lorem
										ipsum dolor sit amet consectetur
										adipisicing elit. Quisquam, quod. Lorem
										ipsum dolor sit amet consectetur
										adipisicing elit. Quisquam, quod.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<aside className="hidden w-[100%] lg:flex"></aside>
			</div>
		</div>
	)
}
