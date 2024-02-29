import Link from 'next/link'
import { PiHandCoinsDuotone } from 'react-icons/pi'
import { MdOutlineDashboard } from 'react-icons/md'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { LuSettings } from 'react-icons/lu'
import { AiOutlineLaptop } from 'react-icons/ai'
import { useRouter } from 'next/router'

export const SideBar = () => {
	const router = useRouter()
	const { pathname } = router
	return (
		<aside className="flex h-min">
			<nav className="flex h-min w-full items-baseline justify-center gap-2 sm:flex-col sm:gap-6 sm:pl-6">
				<div className="flex w-min justify-center gap-2 pt-0 font-mono text-lg text-neutral-700 sm:w-full sm:flex-col sm:gap-6 sm:pt-12 lg:pl-8  ">
					<Link
						className={`${
							pathname === '/dashboard' ? 'bg-[#d1b8dc]' : ''
						} flex w-[66px] items-center justify-start gap-3 rounded-3xl py-3 pl-6 text-center hover:rounded-3xl hover:bg-[#d1b8dc] md:w-[200px] lg:w-[270px]`}
						href="/dashboard"
					>
						<MdOutlineDashboard />
						<span className="text-md hidden  md:flex">Panel</span>
					</Link>
					<Link
						className={`${
							pathname === '/dashboard/software-subscriptions'
								? 'bg-[#d1b8dc]'
								: ''
						} flex w-[66px] items-center justify-start gap-3 rounded-3xl py-3 pl-6 text-center hover:rounded-3xl hover:bg-[#d1b8dc] md:w-[200px] lg:w-[270px]`}
						href="/dashboard/software-subscriptions"
					>
						<AiOutlineLaptop />
						<span className="text-md hidden  md:flex">
							Subcripciones
						</span>
					</Link>
					<Link
						className={`${
							pathname === '/dashboard/my-products'
								? 'bg-[#d1b8dc]'
								: ''
						} flex w-[66px] items-center justify-start gap-3 rounded-3xl py-3 pl-6 text-center hover:rounded-3xl hover:bg-[#d1b8dc] md:w-[200px] lg:w-[270px]`}
						href="/dashboard/my-products"
					>
						<PiHandCoinsDuotone />
						<span className="text-md hidden  md:flex">
							Productos
						</span>
					</Link>
					<Link
						className={`${
							pathname === '/support' ? 'bg-[#d1b8dc]' : ''
						} flex w-[66px] items-center justify-start gap-3 rounded-3xl py-3 pl-6 text-center hover:rounded-3xl hover:bg-[#d1b8dc] md:w-[200px] lg:w-[270px]`}
						href="/support"
					>
						<TfiHeadphoneAlt />
						<span className="text-md hidden  md:flex">Soporte</span>
					</Link>
				</div>
				<div className="gap-2 pt-6 font-mono sm:pl-2  lg:pl-8">
					<Link
						className={`${
							pathname === '/dashboard/settings'
								? 'bg-[#d1b8dc]'
								: ''
						} flex w-[66px] items-center justify-start gap-3 rounded-3xl py-3 pl-6 text-center hover:rounded-3xl hover:bg-[#d1b8dc] md:w-[200px] lg:w-[270px]`}
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
