import { Layout } from '@/components/layout/Layout'
import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SearchBar } from '../../components/ui/searchbar/SearchBar'
import { Licenses, Partners } from '../../data/help'
import { Box, Typography } from '@mui/material'
import { RecentSearches } from '@/components/ui/recentsearches'
import { useRouter } from 'next/router'
import { useRecentSearches } from '@/hooks/useRecentSearches'
import { useRef, useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaBusinessTime } from 'react-icons/fa'
import { TbLicense } from 'react-icons/tb'

const Help: NextPage = () => {
	const router = useRouter()
	const { recentSearches, setRecentSearches } = useRecentSearches()
	const [open, setOpen] = useState(false)
	const anchorEl = useRef<HTMLDivElement>(null)
	return (
		<div className="w-full selection:bg-primary-color selection:text-white">
			<nav className="fixed z-50 mb-10 flex h-[80px] w-full  flex-col  items-center justify-between bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] px-4">
				<div className="z-10 flex w-full items-center justify-between pb-4 pt-4 font-mono text-sm text-neutral-600 lg:w-[70%]">
					<Link className="" href="/">
						<Image
							className=" w-[150px] min-w-full md:w-40"
							src="/uplerlogo.png"
							alt="global Logo"
							width={100}
							height={100}
						/>
					</Link>
					<div className="flex w-auto gap-9 font-lato text-lg font-medium">
						<Link
							className=" group relative inline-block "
							href="/"
						>
							Inicio
							<span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full"></span>
						</Link>
					</div>
				</div>
			</nav>
			<div className="h-[225px] bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] pt-28 md:h-[350px] md:pt-48">
				<Box
					maxWidth={'sm'}
					margin="auto"
					className="w-[82%] xl:w-[100%]"
				>
					<Typography textAlign="center" my={2}></Typography>
					<Box className="flex flex-col gap-2" ref={anchorEl}>
						<SearchBar
							onSubmit={async (searchTerm: string) => {
								router.push({
									query: {
										search: searchTerm
									}
								})
								// also add to push recent searches after every search
								if (!recentSearches.includes(searchTerm)) {
									setRecentSearches([
										searchTerm,
										...recentSearches
									])
								}
							}}
							inputProps={{
								onFocus: () => setOpen(true)
							}}
						/>
						<RecentSearches
							open={open}
							anchorEl={anchorEl.current}
							onClose={() => {
								setOpen(false)
							}}
						/>
					</Box>
				</Box>
			</div>
			<div className="flex  h-full w-full flex-col items-center gap-4 bg-purple-50 pb-24 pt-10 md:h-[70vh]">
				<div className=" grid w-[90%] grid-cols-1 gap-6 text-center md:grid md:grid-cols-3 xl:w-[70%]">
					<Link href="/help/GeneralInfo">
						<div className="align-center grid h-[300px] cursor-pointer grid-rows-2 items-end justify-items-center rounded-md bg-purple-100 p-4 transition hover:scale-[1.02] lg:p-8 xl:m-6">
							<div>
								<AiOutlineInfoCircle className="text-7xl text-primary-color" />
							</div>
							<div className="flex flex-col items-center gap-3 md:gap-1">
								<h4 className="mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
									1. Informacion General
								</h4>
								<p className="w-[90%] text-neutral-600">
									Descubre cómo contactarnos, asociarte con nosotros y cumplir con nuestros Términos de Servicio (TOS).
								</p>
							</div>
						</div>
					</Link>

					<Link href="/help/Partners">
						<div className="align-center grid h-[300px] cursor-pointer grid-rows-2 items-end justify-items-center rounded-md bg-purple-100 p-4 transition hover:scale-[1.02] lg:p-8 xl:m-6">
							<div>
								<FaBusinessTime className="text-7xl text-primary-color" />
							</div>
							<div className="flex flex-col items-center gap-3 md:gap-1">
								<h4 className="mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
									2. Partners
								</h4>
								<p className="w-[90%] text-neutral-600">
									Descubre todo sobre ser un socio de AppSumo aquí.
								</p>
							</div>
						</div>
					</Link>

					<Link href="/help/Licenses">
						<div className="align-center grid h-[300px] cursor-pointer grid-rows-2 items-end justify-items-center rounded-md bg-purple-100 p-4 transition hover:scale-[1.02] lg:p-8 xl:m-6">
							<div>
								<TbLicense className="text-7xl text-primary-color" />
							</div>
							<div className="flex flex-col items-center gap-3 md:gap-1">
								<h4 className="mb:pt-0 pb-0 pt-2 text-xl text-black md:pb-2 md:text-[25px]">
									3. Licensias
								</h4>
								<p className="w-[90%] text-neutral-600">
									Una nueva alternativa a los productos basados en código.
								</p>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Help
