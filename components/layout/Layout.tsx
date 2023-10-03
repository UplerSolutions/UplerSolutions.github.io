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
    <main className='selection:text-white selection:bg-primary-color'>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='w-[11/12]'>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </main>
  )
}
