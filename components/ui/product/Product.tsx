import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Image from 'next/image'
import { BsCheck2 } from 'react-icons/bs'
export const Product = () => {
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
					<Tab value="Questions" label="Questions" />
					<Tab value="Reviews" label="Reviews" />
				</Tabs>
			</div>
			<hr className="w-full" />
			<div className="w-[87%]">
				<h1 className=" py-10 text-3xl text-neutral-700">Overview</h1>
				<p className="pb-10 text-neutral-700">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Quos necessitatibus neque quisquam veniam sint non commodi
					veritatis voluptatibus aliquam, accusantium magnam harum
					officiis numquam dignissimos facere suscipit totam tenetur
					consequatur! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Nisi odio, ratione animi facere amet,
					beatae quisquam delectus cum praesentium eius recusandae
					fugit! Alias quidem quis distinctio eos voluptas,
					consequatur ullam. Lorem ipsum dolor, sit amet consectetur
					adipisicing elit. Quos necessitatibus neque quisquam veniam
					sint non commodi veritatis voluptatibus aliquam, accusantium
					magnam harum officiis numquam dignissimos facere suscipit
					totam tenetur consequatur! Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Nisi odio, ratione animi
					facere amet, beatae quisquam delectus cum praesentium eius
					recusandae fugit! Alias quidem quis distinctio eos voluptas,
					consequatur ullam.
					<br />
					<br />
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Quos necessitatibus neque quisquam veniam sint non commodi
					veritatis voluptatibus aliquam, accusantium magnam harum
					officiis numquam dignissimos facere suscipit totam tenetur
					consequatur! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Nisi odio, ratione animi facere amet,
					beatae quisquam delectus cum praesentium eius recusandae
					fugit! Alias quidem quis distinctio eos voluptas,
					consequatur ullam. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Debitis reiciendis est laboriosam
					voluptate atque aliquam soluta, libero itaque repudiandae
					ipsum quam odio alias placeat vero, iure omnis provident
					consequatur ducimus. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Nihil est dolores repellat quo error atque
					dolorum reiciendis eos reprehenderit, natus pariatur
					delectus, libero perspiciatis aspernatur harum ex numquam
					quasi quis.
				</p>
				<Image
					src="../afforai.webp"
					alt=""
					width={100}
					height={100}
					className="mb-10 w-[50%] rounded-2xl"
				/>
			</div>
			<div className="flex w-[87%] flex-col justify-start">
				<h1 className="py-10 text-3xl text-neutral-700" id="features">
					Features
				</h1>
				<p className="pb-8 text-neutral-700">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Quos necessitatibus neque quisquam veniam sint non commodi
					veritatis voluptatibus aliquam, accusantium magnam harum
					officiis numquam dignissimos facere suscipit totam tenetur
					consequatur! Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Nisi odio, ratione animi facere amet,
					beatae quisquam delectus cum praesentium eius recusandae
					fugit! Alias quidem quis distinctio eos voluptas,
					consequatur ullam. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Debitis reiciendis est laboriosam
					voluptate atque aliquam soluta, libero itaque repudiandae
					ipsum quam odio alias placeat vero, iure omnis provident
					consequatur ducimus. Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Nihil est dolores repellat quo error atque
					dolorum reiciendis eos reprehenderit, natus pariatur
					delectus, libero perspiciatis aspernatur harum ex numquam
					quasi quis.
				</p>
				<ul className="grid w-[50%] grid-cols-2 pb-10 pl-2">
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
		</div>
	)
}
