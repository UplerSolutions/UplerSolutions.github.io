import React, { useRef } from 'react'
import Link from 'next/link'
import {
	FaDiscord,
	FaInstagram,
	FaLinkedin,
	FaYoutube,
	FaGreaterThan,
	FaTwitter
} from 'react-icons/fa'
import Image from 'next/image'

export const Footermobile = () => {
	const partnerRef = useRef<HTMLAnchorElement>(null)

	const scrollToPartner = () => {
		if (partnerRef.current !== null) {
			partnerRef.current.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			})
		}
	}
	return (
		<footer className="flex h-auto w-full flex-col items-center justify-center gap-6 bg-neutral-600 pb-36 pt-10 text-white md:hidden">
			<div className="flex w-[100%] flex-col gap-8 px-[50px]">
				<div className="flex flex-col gap-2 ">
					<Image
						height={80}
						width={180}
						src="/whitelogo.png"
						alt=""
						className=""
					/>
					<h3 className="text-md pb-2 pt-6">
						Everything you need for your profession in a single
						subscription.
					</h3>
				</div>

				<div className="flex w-[110%] items-center justify-start gap-6 pt-4 sm:w-full">
					<Link
						className="group relative inline-block "
						href="/software"
						onClick={scrollToPartner}
						ref={partnerRef}
					>
						Software
						<span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-neutral-400 transition-all duration-500 group-hover:w-[65px]"></span>
					</Link>
					<Link
						className=" group relative inline-block "
						href="#plans"
						onClick={scrollToPartner}
						ref={partnerRef}
					>
						Bundles
						<span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-neutral-400 transition-all duration-500 group-hover:w-[60px]"></span>
					</Link>
					<Link
						className=" group relative inline-block text-center"
						href="/partners"
						onClick={scrollToPartner}
						ref={partnerRef}
					>
						Become Our Partner
						<span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-neutral-400 transition-all duration-500 group-hover:w-full"></span>
					</Link>
				</div>

				<div className="flex flex-col gap-2 pr-3 pt-4">
					<h1 className="pb-3 text-lg font-semibold">
						Recognized by
					</h1>
					<Image
						height={150}
						width={300}
						src="/microsoft.png"
						alt=""
						className="w-[300px]"
					/>
				</div>

				<div className="flex flex-col gap-2 py-4 ">
					<h1 className="pb-3 text-lg font-semibold">Contact Us</h1>
					<span>upler.official@gmail.com</span>
				</div>
				<hr className="pt-6" />
				<div className="flex items-center justify-between">
					<div className="flex">
						<span className="">Upler © 2023</span>
					</div>
					<div className="flex gap-3 text-2xl">
						<Link href="https://discord.com/" target=" blank">
							<FaDiscord className=" hover:scale-[1.05] hover:text-neutral-300" />
						</Link>
						<Link
							href="https://www.instagram.com/upler.ok/"
							target=" blank"
						>
							<FaInstagram className=" hover:scale-[1.05] hover:text-neutral-300" />
						</Link>
						<Link
							href="https://www.linkedin.com/company/upler/"
							target=" blank"
						>
							<FaLinkedin className=" hover:scale-[1.05] hover:text-neutral-300" />
						</Link>
						<Link href="https://youtube.com" target=" blank">
							<FaYoutube className=" hover:scale-[1.05] hover:text-neutral-300" />
						</Link>
						<Link
							href="https://twitter.com/UplerOfficial"
							target=" blank"
						>
							<FaTwitter className=" hover:scale-[1.05] hover:text-neutral-300" />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
