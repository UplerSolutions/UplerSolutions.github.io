import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { HelpContent, HelpData, help } from '../../data/help'
import Link from 'next/link'
import Image from 'next/image'
import { LiaGreaterThanSolid } from 'react-icons/lia'
import { FaGreaterThan } from 'react-icons/fa'
import { BsChevronRight } from 'react-icons/bs'
import { BiArrowBack, BiChevronRight } from 'react-icons/bi'

const HelpDetailPage = () => {
	const router = useRouter()
	const { id } = router.query
	const [selectedCategory, setSelectedCategory] = useState<string | null>(
		null
	)
	const [selectedTitle, setSelectedTitle] = useState<HelpContent | null>(null)

	const handleCategoryClick = (category: string) => {
		setSelectedCategory(category)
		setSelectedTitle(null)
		router.push(`/help/${category}`)
	}

	const handleTitleClick = (content: HelpContent) => {
		setSelectedTitle(content)
	}

	useEffect(() => {
		if (id) {
			setSelectedCategory(id as string)
		}
	}, [id])

	return (
		<div className="selection:bg-primary-color selection:text-white">
			<nav className="fixed z-50 mb-10 flex h-[80px] w-full flex-col items-center justify-between bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] px-4">
				<div className="z-10 flex w-full items-center justify-between pb-4 pt-4 font-mono text-sm text-neutral-600 lg:w-[70%]">
					<Link href="/">
						<p>
							<Image
								className="w-[150px] min-w-full md:w-40"
								src="/uplerlogo.png"
								alt="global Logo"
								width={100}
								height={100}
							/>
						</p>
					</Link>
					<div className="flex w-auto gap-9 font-lato text-lg font-medium">
						<Link href="/">
							<p className="group relative inline-block text-[0.9rem]">
								Inicio
								<span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-primary-color transition-all duration-500 group-hover:w-full"></span>
							</p>
						</Link>
					</div>
				</div>
			</nav>
			<div className="flex w-full  justify-center bg-purple-50 text-neutral-600">
				<div className="flex min-h-[100vh] w-[100%] flex-col-reverse items-center justify-end pt-24 md:w-[67%] md:flex-row md:items-start">
					<div className="flex w-[80%] flex-col justify-start pb-10 md:mr-8  md:w-1/4">
						<Link
							href="/help"
							className="absolute top-[80px] flex items-center gap-2 pt-2 text-xs font-semibold uppercase md:relative md:top-0"
						>
							<BiArrowBack className="scale-[1.3] text-primary-color" />{' '}
							Ayuda
							{selectedCategory}
						</Link>
						<ul className="list-none pl-1 md:pl-5">
							<h1 className="pb-4 pt-4 text-2xl">CATEGORIAS</h1>
							<li
								onClick={() =>
									handleCategoryClick('GeneralInfo')
								}
								className={`mb-4 cursor-pointer font-semibold text-neutral-500 hover:text-neutral-900 ${
									selectedCategory === 'GeneralInfo'
										? 'flex flex-row-reverse items-center  justify-end gap-1 font-semibold text-neutral-900'
										: ''
								}`}
							>
								{selectedCategory === 'GeneralInfo' ? (
									<BiChevronRight className="scale-[1.1] font-bold text-primary-color" />
								) : (
									''
								)}{' '}
								Informacion General
							</li>
							<li
								onClick={() => handleCategoryClick('Partners')}
								className={`mb-4 cursor-pointer font-semibold text-neutral-500 hover:text-neutral-900 ${
									selectedCategory === 'Partners'
										? 'flex flex-row-reverse items-center  justify-end gap-1 font-semibold text-neutral-900'
										: ''
								}`}
							>
								{selectedCategory === 'Partners' ? (
									<BiChevronRight className="scale-[1.1] font-bold text-primary-color" />
								) : (
									''
								)}{' '}
								Partners
							</li>
							<li
								onClick={() => handleCategoryClick('Licenses')}
								className={`mb-4 cursor-pointer font-semibold text-neutral-500 hover:text-neutral-900 ${
									selectedCategory === 'Licenses'
										? 'flex flex-row-reverse items-center  justify-end gap-1 font-semibold text-neutral-900'
										: ''
								}`}
							>
								{selectedCategory === 'Licenses' ? (
									<BiChevronRight className="scale-[1.1] font-bold text-primary-color" />
								) : (
									''
								)}{' '}
								Licencias
							</li>
						</ul>
					</div>

					<div className="mt-4 w-[85%] bg-purple-100 px-4 py-5   md:mt-0 md:h-[530px] md:w-3/4 md:p-10 md:pb-20">
						{selectedCategory && !selectedTitle && (
							<ul className="list-none">
								<h1 className="mb-4 text-4xl font-bold">
									{selectedCategory &&
										selectedCategory
											.split(/(?=[A-Z])/)
											.map((part, index) => (
												<span key={index}>
													{part
														.charAt(0)
														.toUpperCase() +
														part.slice(1)}
													&nbsp;
												</span>
											))}
								</h1>

								{Object.values(
									help[selectedCategory as keyof HelpData]
								).map((content: HelpContent, index: number) => (
									<li key={index} className="mb-4">
										<a
											onClick={() =>
												handleTitleClick(content)
											}
											className="cursor-pointer underline"
										>
											{content.title}
										</a>
									</li>
								))}
							</ul>
						)}
						{selectedTitle && (
							<div className="">
								<h2 className="pb-4 text-4xl font-bold">
									{selectedTitle.title}
								</h2>
								<p>{selectedTitle.description}</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default HelpDetailPage
