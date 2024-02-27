'use client'
import Link from 'next/link'
import { PiHandCoinsDuotone } from 'react-icons/pi'
import { MdOutlineDashboard } from 'react-icons/md'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { LuSettings } from 'react-icons/lu'
import { AiOutlineLaptop } from 'react-icons/ai'
import { useRouter } from 'next/router'

export const SideBar = () => {
	const router = useRouter()

	return (
		<aside className="flex flex-col ">
			<nav className="flex w-full items-center justify-center">
				<div className="flex w-full flex-col justify-center gap-6 pb-3  pl-2 pt-12  font-mono text-lg text-neutral-700 lg:pl-8  ">
					<Link
						className="flex w-[66px] items-center justify-start gap-3 rounded-3xl bg-[#d1b8dc] py-3 pl-6 text-center hover:rounded-3xl hover:bg-[#bda0cc] md:w-[180px] lg:w-[270px]"
						href="/dashboard"
					>
						<MdOutlineDashboard />
						<span className="text-md hidden  md:flex">
							Dashboard
						</span>
					</Link>
					<Link
						className="flex  w-[66px] items-center justify-start gap-3 py-3 pl-6 text-center hover:rounded-3xl hover:bg-[#d1b8dc] md:w-[180px] lg:w-[270px]"
						href="/dashboard/software-subscriptions"
					>
						<AiOutlineLaptop />
						<span className="text-md hidden  md:flex">
							Mis Subcripciones
						</span>
					</Link>
					<Link
						className="flex  w-[66px] items-center justify-start gap-3 py-3 pl-6 text-center hover:rounded-3xl hover:bg-[#d1b8dc] md:w-[180px] lg:w-[270px]"
						href="/dashboard/my-products"
					>
						<PiHandCoinsDuotone />
						<span className="text-md hidden  md:flex">
							Mis Productos
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
			</nav>
			<div className="hidden w-[95%] pl-14 pt-[15vh] lg:inline-block">
				<hr className="h-[2px] bg-neutral-600 " />
			</div>
			<div className="pl-2 pt-6 font-mono lg:pl-8">
				<Link
					className="flex w-[66px] items-center justify-start gap-3 py-3 pl-6 text-center text-lg text-neutral-700 hover:rounded-3xl hover:bg-[#d1b8dc] md:w-[180px] lg:w-[270px]"
					href="/dashboard/settings"
				>
					<LuSettings />
					<span className="hidden md:flex ">Configuración</span>
				</Link>
			</div>
		</aside>
	)
}
