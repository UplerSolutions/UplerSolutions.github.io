import Image from 'next/image'
import { FC } from 'react'
import { ISoftware } from '@/interface/software'
import Link from 'next/link'

const navLinks = [
	{
		text: 'overview'
	}
]

export const Product: FC<ISoftware> = ({
	longDescription,
	imageUrl,
	productName
}) => {
	return (
		<div className="flex flex-col items-center bg-neutral-50">
			<nav className=" w-full md:w-[92%]">
				<ul className="flex gap-2">
					{navLinks.map((link) => (
						<Link
							key={link.text}
							className="hover:border-b-1 text-xl text-neutral-500 transition-colors uppercase hover:border-b-fuchsia-800 hover:text-fuchsia-800"
							href={`#${link.text}`}
						>
							{link.text}
						</Link>
					))}

					{/* <Link
						className="hover:border-b-1 text-lg uppercase hover:border-b-violet-500"
						href="#features"
					/> */}
					{/* <Tab
						value="Questions"
						label="Questions"
						href="#questions"
					/>
					<Tab value="Reviews" label="Reviews" href="#reviews" /> */}
				</ul>
			</nav>
			<hr className="w-full" />

			<div className="flex w-[92%]">
				<div className="flex flex-col items-center lg:pl-8">
					<div className="" id="overview">
						<h1 className=" py-10 text-3xl text-neutral-700">
							Overview
						</h1>
						<div className="mb-12 flex flex-col-reverse gap-10 lg:flex-row-reverse items-center lg:items-start ">
							<p className=" text-lg w-[80%] text-neutral-700 lg:w-full">
								{longDescription}
							</p>
							<Image
								src={`/${imageUrl}`}
								alt=""
								width={200}
								height={200}
								className="  rounded-2xl w-3/4 md:w-2/4 "
							/>
						</div>
					</div>
					<div>
						{/* <div className="flex w-[87%] flex-col justify-start">
						<h1
							className="py-10 text-3xl text-neutral-700"
							id="features"
						>
							Características
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
							Preguntas
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
									src={`/${imageUrl}`}
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
					</div> */}
					</div>
				</div>
			</div>
		</div>
	)
}
