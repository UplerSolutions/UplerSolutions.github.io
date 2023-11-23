import { BiUser } from 'react-icons/bi'
import React, { useEffect, useState } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { PiHandCoinsDuotone } from 'react-icons/pi'
import { MdOutlineDashboard } from 'react-icons/md'
import { TfiHeadphoneAlt } from 'react-icons/tfi'
import { LuSettings } from 'react-icons/lu'
import { AiOutlineLaptop } from 'react-icons/ai'
import Pagination from '@mui/material/Pagination'
import { User } from '@/interface/login'

export const Panel = () => {
	const { data: session } = useSession()
	const router = useRouter()
	const pageSize = 5
	const totalPages = Math.ceil(pageSize)

	const [currentPage, setCurrentPage] = useState<number>(1)

	const onPageChange = (page: number) => {
		setCurrentPage(page)
	}
	const handlePaginationChange = (
		event: React.ChangeEvent<unknown>,
		page: number
	) => {
		onPageChange(page)
	}

	const getUserName = () => {
		if (session && 'name' in session.user) {
			return (session.user as { name: string }).name
		} else if (
			session &&
			session.user &&
			'name' in (session.user as any).user
		) {
			return (session.user as any).user.name
		}
		return ''
	}

	useEffect(() => {
		if (session && session.user && router.pathname === '/login') {
			router.push('/')
		}
	}, [session, router])

	return (
		<div className="flex w-full justify-center pb-64  text-neutral-600 xl:gap-5">
			<div className="flex flex-col ">
				<nav className="flex w-full items-center justify-center">
					<div className="flex w-full flex-col justify-center gap-6 pb-3  pl-2 pt-12  font-mono text-lg text-neutral-700 lg:pl-8  ">
						<Link
							className="flex  w-[66px] items-center justify-start gap-3 rounded-3xl bg-[#d1b8dc] py-3 pl-6 text-center hover:rounded-3xl hover:bg-[#bda0cc] md:w-[180px] lg:w-[270px]"
							href="/dashboard"
						>
							<MdOutlineDashboard />
							<span className="text-md hidden  md:flex">
								Dashboard
							</span>
						</Link>
						<Link
							className="flex  w-[66px] items-center justify-start gap-3 py-3 pl-6 text-center hover:rounded-3xl hover:bg-[#d1b8dc] md:w-[180px] lg:w-[270px]"
							href="/software"
						>
							<AiOutlineLaptop />
							<span className="text-md hidden  md:flex">
								Subscriptions
							</span>
						</Link>
						<Link
							className="flex  w-[66px] items-center justify-start gap-3 py-3 pl-6 text-center hover:rounded-3xl hover:bg-[#d1b8dc] md:w-[180px] lg:w-[270px]"
							href="/"
						>
							<PiHandCoinsDuotone />
							<span className="text-md hidden  md:flex">
								Benefits
							</span>
						</Link>
						<Link
							className="flex  w-[66px] items-center justify-start gap-3 py-3 pl-6 text-center hover:rounded-3xl hover:bg-[#d1b8dc] md:w-[180px] lg:w-[270px]"
							href="/apply"
						>
							<TfiHeadphoneAlt />
							<span className="text-md hidden  md:flex">
								Support
							</span>
						</Link>
					</div>
				</nav>
				<div className="hidden w-[95%] pl-14 pt-[15vh] lg:inline-block">
					<hr className="h-[2px] bg-neutral-600 " />
				</div>
				<div className="pl-2 pt-6 font-mono lg:pl-8">
					<Link
						className="flex w-[66px] items-center justify-start gap-3 py-3 pl-6 text-center text-lg text-neutral-700 hover:rounded-3xl hover:bg-[#d1b8dc] md:w-[180px] lg:w-[270px]"
						href="/apply"
					>
						<LuSettings />
						<span className="hidden md:flex ">Settings</span>
					</Link>
				</div>
			</div>
			<div className="mb-20 flex h-[80vh] w-full flex-col p-2 pt-5 md:p-4">
				<div className="flex h-[75vh] w-full flex-col items-center justify-center rounded-xl bg-slate-50 py-6 font-semibold lg:py-8 xl:py-10">
					<div className="flex h-[55vh] w-[95%] flex-col items-start rounded-xl bg-[#bbbbbb1f] p-4 text-sm lg:p-8 lg:text-base">
						<div className="flex w-full items-center justify-between  py-3">
							<h1 className="text-center  text-2xl font-semibold">
								Current
							</h1>

							<div className="flex items-center">
								<p className="flex text-center text-xl ">
									{getUserName()}
								</p>
							</div>
						</div>
						<div className="w-full pb-4">
							<hr className="h-[2px] bg-neutral-800" />
						</div>
						<div className=" flex w-full gap-3 md:flex-col">
							<div className="flex w-full flex-col gap-3 rounded-xl bg-[#dfe5ee] px-2 py-4 md:flex-row md:items-center md:justify-between md:py-4 lg:px-6">
								<div>Bundle</div>
								<div>Email</div>
								<div className="flex flex-col justify-between gap-3 md:flex-row md:items-center xl:gap-6 2xl:w-[35%] 2xl:gap-0">
									<div>Phone Number</div>
									<div>Valid Date</div>
									<div>Exp. Date</div>
								</div>
							</div>
							<div className="flex w-full flex-col gap-3 rounded-xl bg-[#e2e2e284] px-2 py-4 md:flex-row md:items-center md:justify-between lg:px-6">
								<div className="flex flex-row items-center justify-start gap-2 md:justify-between 2xl:w-[8%]">
									<input
										type="checkbox"
										className="accent-primary-color"
									/>
									<button className="flex rounded-3xl bg-primary-color px-2 py-2 md:px-3 md:py-3"></button>
									<div>Expert</div>
								</div>
								<div className="2xl:w-[8%]">
									example@gmail.com
								</div>
								<div className="flex flex-col justify-between gap-3 md:flex-row md:items-center 2xl:w-[34%] 2xl:gap-0">
									<div>+23497886242</div>
									<div>20/09/2023</div>
									<div>20/09/2024</div>
								</div>
							</div>
						</div>
					</div>

					<div className="">
						<Pagination
							count={totalPages}
							page={currentPage}
							onChange={handlePaginationChange}
							className="pt-10"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
