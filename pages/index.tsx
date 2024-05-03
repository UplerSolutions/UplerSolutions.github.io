'use client' // For Next JS 13 app router
import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { SITE_NAME, SITE_DESCRIPTION } from '@/utils/config'
import { Layout } from '@/components/layout/Layout'
import { CardPlan } from '@/components/ui/plan'
import { Benefits } from '@/components/ui/benefits'
import { Upler } from '@/components/ui/upler/Upler'
import { Partner } from '@/components/ui/partner/Partner'

import { getSoftwares } from '../service/software/software-service'
import { ISoftware } from '@/interface/software'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import ScrollButton from '@/components/ui/scrollbutton/ScrollButton'

const ScrollCarousel = dynamic(
	() => import('@/components/ui/marketcarousel/MarketCarousel'),
	{ ssr: false }
)

export default function Home({ softwareData }: { softwareData: ISoftware[] }) {
	const { data: session } = useSession()

	return (
		<Layout title="Upler ">
			<Head>
				<title>{SITE_NAME}</title>
				<meta name="description" content={SITE_DESCRIPTION} />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<div className="flex w-full flex-col items-center justify-center gap-8 bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] pt-24 lg:flex-row lg:items-start lg:pt-48 xl:pb-16 2xl:pb-20">
				<div className="relative flex w-[80%] flex-col  place-items-center items-center pb-7 text-neutral-700 lg:ml-[7%] lg:w-[40%]  lg:place-items-start  lg:items-start">
					<div className="text-center text-[40px] font-bold md:text-left md:text-5xl  2xl:text-7xl">
						<h3 className="md:pb-4 ">Tu Suscripción</h3>
						<span className="text-[35px] text-primary-color md:text-5xl  2xl:text-7xl">
							Definitiva.
						</span>
					</div>
					<p className="pb-10 pt-6 text-center lg:w-[50%] lg:text-left">
						Accede a cientas de herramientas de software. Todo en
						una única suscripción.
					</p>
					<Link
						href="/software"
						scroll={false}
						className="  group relative  rounded-xl border-2 border-primary-color bg-primary-color px-5 py-2 text-lg font-semibold  text-white transition hover:border-2 hover:border-primary-color hover:bg-fuchsia-200 hover:text-primary-color hover:delay-100 "
					>
						Encuentra Tu Software
					</Link>
				</div>
				<div className="relative flex w-full flex-col items-center justify-center overflow-hidden pb-10 lg:w-[60%] lg:pr-[7%]">
					<ScrollCarousel
						software={softwareData}
						category={undefined}
					/>
					<div className=" flex w-full justify-center pt-2 font-semibold text-primary-color lg:items-end lg:justify-end">
						<Link href={'/software'}>Explorá</Link>
					</div>
				</div>
			</div>

			{/*       CONTRIBUTIONS BANNER
					<main className=' pb-6 flex-wrap md:flex-nowrap md:flex justify-center items-center lg:pb-10 bg-gradient-to-r from-[#ffcffc] to-[#fff7c4] text-neutral-700'>
						<div className='flex flex-wrap gap-3 md-gap-0 w-full items-center justify-around md:justify-center md:flex-nowrap py-4 md:w-4/5 lg:w-[74%] rounded-[40px] bg- md:bg-white md:bg-opacity-[0.5] '>
						{contributions.map((contribution) => (
							<Contributions key={contribution.id} count={contribution} />
						))}
						</div>
					</main>
				*/}
			<Upler />
			<Benefits />
			<div
				className="bg-gradient-to-t from-[#fffbdf] to-[#ffcefb]"
				id="plans"
			>
				<CardPlan />
				<Partner />
			</div>
			<ScrollButton />
		</Layout>
	)
}
export async function getServerSideProps() {
	let softwareData: ISoftware[] = []
	try {
		softwareData = await getSoftwares()
	} catch (error) {
		console.error('Error fetching software data:', error)
	}

	return {
		props: {
			softwareData
		}
	}
}
