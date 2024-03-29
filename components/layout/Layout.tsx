import Head from 'next/head'
import { FC } from 'react'
import { Navbar } from '../ui/navbar'
import { Footer } from '../ui/footer'

interface Props {
	children: React.ReactNode
	title: string
	description?: string
	keywords?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<div className="selection:bg-primary-color selection:text-white">
			<Head>
				<title>{title}</title>
			</Head>
			<div className="w-[11/12]">
				<Navbar />
				<main>{children}</main>
				<Footer />
			</div>
		</div>
	)
}
