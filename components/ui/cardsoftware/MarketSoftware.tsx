import Link from 'next/link'
import React, { FC } from 'react'
import { useRouter } from 'next/router'

interface Props {
	id: string
	created_at: string
	productName: string
	lowDescription: string
	longDescription: string
	price: number
	updated_at: string
	seller: string
	directLink: string
	imageUrl: string
	rating: number
	category: {
		id: string
		categoryName: string
	}
}

const MarketSoftware: FC<Props> = ({
	productName,
	price,
	lowDescription,
	imageUrl,
	id,
	directLink
}) => {
	const router = useRouter()

	const redirect = () => {
		router.push(`software/${id}`)
	}

	return (
		<div className="relative h-[370px] w-[30%]  transition hover:scale-[0.97]">
			<div className="z-30 flex h-[370px] w-[285px] cursor-pointer flex-col rounded-xl bg-white p-4 text-neutral-950 max-md:pt-2 md:pb-1 md:text-center">
				<div
					onClick={redirect}
					className="group/item flex h-full flex-col place-content-start justify-between"
				>
					<div className="text-left lg:px-0">
						<div className=" group/item flex flex-1 flex-col gap-1">
							<p className="">{lowDescription}</p>
						</div>
					</div>
					<div className="relative flex w-full flex-col justify-center rounded-xl">
						<div className=" text-left">
							<h2 className="text-xl">{productName}</h2>
							<p className="pt-1 text-[22px] font-semibold text-neutral-600">
								${price}
							</p>
						</div>
						<img
							src={imageUrl}
							alt=""
							className=" md-[200px] flex items-center justify-center md:mt-4"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MarketSoftware
