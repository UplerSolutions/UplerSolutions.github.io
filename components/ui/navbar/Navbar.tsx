import Image from 'next/image'
import Link from 'next/link'
import Signin from '../signin/Signin'
import { Hamburguer } from './hamburguer/Hamburguer'

export const Navbar = () => {
	return (
		<nav className="fixed z-50 mb-10 flex h-[80px] w-full flex-col  items-center justify-between bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] px-4">
			<div className="z-10 flex w-full items-center justify-between pb-4 pt-4 font-mono text-sm text-neutral-600 md:w-[90%] xl:w-[88%]">
				<Link className="self-start" href="/">
					<Image
						className=" w-[150px] min-w-full md:w-40"
						src="/uplerlogo.png"
						alt="global Logo"
						width={100}
						height={100}
					/>
				</Link>
				<div className="hidden gap-9 font-lato text-lg font-medium lg:flex lg:w-auto">
					<Link
						className="ease group relative bottom-0  left-0 inline-block h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full"
						href="/software"
					>
						Software
					</Link>
					<Link
						className="ease group relative bottom-0  left-0 inline-block h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full"
						href="/#plans"
					>
						Paquetes
					</Link>
					{/* <Link
						className="ease group relative bottom-0  left-0 inline-block h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full"
						href="/dashboard"
					>
						Panel
					</Link> */}
					<Link
						className="ease group relative bottom-0  left-0 inline-block h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full"
						href="/partners"
					>
						Vender
					</Link>
					<Link
						className="ease group relative bottom-0  left-0 inline-block h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full"
						href="/aboutUs"
					>
						Sobre nosotros
					</Link>
				</div>
				<div className="hidden gap-3 lg:flex">
					<Signin />
				</div>
				<Hamburguer />
			</div>
		</nav>
	)
}
