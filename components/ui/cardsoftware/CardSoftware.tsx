import Link from 'next/link'
import React, { FC } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

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

const CardSoftware: FC<Props> = ({
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
		<div className="relative z-10 h-full w-full">
			<div className="z-30 flex w-full grow cursor-pointer flex-col justify-between rounded-xl bg-white text-neutral-950 max-md:pt-2 md:p-4 md:pb-1 md:text-center lg:h-[auto] xl:w-auto 2xl:h-auto ">
				<div onClick={redirect} className="group/item w-full">
					<div className="relative flex w-full items-center justify-center rounded-xl">
						<Image
							src={imageUrl}
							alt=""
							width={500}
							height={500}
							className=" md-w-full flex items-center justify-center md:mt-4"
						/>
					</div>
					<div className="w-full lg:px-0 ">
						<div className=" group/item flex flex-1 flex-col items-center justify-center gap-1 md:items-start md:justify-start">
							<h2 className="text-2xl">{productName}</h2>
							<p className="md:line-clamp-0 line-clamp-2 px-2 text-center md:px-0 md:text-left">
								{lowDescription}
							</p>
						</div>
					</div>
				</div>
				<div className="z-40 flex w-full flex-col items-start justify-center gap-2 px-3 pb-8 pt-2 md:px-0">
					{' '}
					<p className="pt-6 text-[22px] font-semibold text-neutral-600"></p>
					<Link href={directLink} target="_blank " className="w-full">
						<button
							type="submit"
							className=" h-12 w-full rounded-xl bg-primary-color text-lg font-semibold text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100"
						>
							Get Link
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default CardSoftware
