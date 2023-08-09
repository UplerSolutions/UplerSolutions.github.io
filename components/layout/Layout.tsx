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
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
