import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import Signin from '../signin/Signin'
import { Hamburguer } from './hamburguer/Hamburguer'

export const Navbar = () => {
	return (
		<nav className="fixed z-50 mb-10 flex h-[80px] w-full flex-col items-center justify-between bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] px-4">
			<div className="z-10 flex w-full items-center justify-between pb-4 pt-4 font-mono text-sm text-neutral-600 md:w-[90%] xl:w-[88%]">
				<Link className="" href="/">
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
						className="group relative inline-block "
						href="/software"
					>
						Software
						<span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full"></span>
					</Link>
					<Link
						className="group relative inline-block "
						href="/#plans"
					>
						Paquetes
						<span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full"></span>
					</Link>
					<Link
						className=" group relative inline-block "
						href="/partners"
					>
						Partner
						<span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full"></span>
					</Link>
					<Link
						className=" group relative inline-block "
						href="/aboutUs"
					>
						Sobre nosotros
						<span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full"></span>
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
