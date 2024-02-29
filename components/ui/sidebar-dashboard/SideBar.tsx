'use client'
import Link from 'next/link'
import { PiHandCoinsDuotone } from 'react-icons/pi'
import { MdOutlineDashboard } from 'react-icons/md'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { LuSettings } from 'react-icons/lu'
import { AiOutlineLaptop } from 'react-icons/ai'
import { useRouter } from 'next/router'

export const SideBar = () => {
	return (
		<aside className="flex">
			<nav className="flex h-min w-full items-baseline justify-center sm:flex-col sm:gap-6 sm:px-12">
				<div className="flex w-min justify-center pt-0 font-mono text-lg text-neutral-700 sm:w-full sm:flex-col sm:gap-6 sm:pt-12 lg:pl-8  ">
					<Link
						className="flex w-[66px] items-center justify-start gap-3 rounded-3xl bg-[#d1b8dc] py-3 pl-6 text-center hover:rounded-3xl hover:bg-[#bda0cc] md:w-[180px] lg:w-[270px]"
						href="/dashboard"
					>
						<MdOutlineDashboard />
						<span className="text-md hidden  md:flex">
							Panel
						</span>
					</Link>
					<Link
						className="flex  w-[66px] items-center justify-start gap-3 py-3 pl-6 text-center hover:rounded-3xl hover:bg-[#d1b8dc] md:w-[180px] lg:w-[270px]"
						href="/dashboard/software-subscriptions"
					>
						<AiOutlineLaptop />
						<span className="text-md hidden  md:flex">
							Subcripciones
						</span>
					</Link>
					<Link
						className="flex  w-[66px] items-center justify-start gap-3 py-3 pl-6 text-center hover:rounded-3xl hover:bg-[#d1b8dc] md:w-[180px] lg:w-[270px]"
						href="/dashboard/my-products"
					>
						<PiHandCoinsDuotone />
						<span className="text-md hidden  md:flex">
							Productos
						</span>
					</Link>
					<Link
						className="flex  w-[66px] items-center justify-start gap-3 py-3 pl-6 text-center hover:rounded-3xl hover:bg-[#d1b8dc] md:w-[180px] lg:w-[270px]"
						href="/support"
					>
						<TfiHeadphoneAlt />
						<span className="text-md hidden  md:flex">Soporte</span>
					</Link>
				</div>
				<div className="pt-6 font-mono sm:pl-2 lg:pl-8">
					<Link
						className="flex w-[66px]  items-center justify-start gap-3 py-3 pl-6 text-center text-lg text-neutral-700 hover:rounded-3xl hover:bg-[#d1b8dc] sm:w-[66px] md:w-[180px] lg:w-[270px]"
						href="/dashboard/settings"
					>
						<LuSettings />
						<span className="hidden md:flex ">Configuración</span>
					</Link>
				</div>
			</nav>
		</aside>
	)
}
