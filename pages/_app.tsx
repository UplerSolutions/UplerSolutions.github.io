import type { AppProps } from 'next/app'


import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'

export default function App(
  { Component, pageProps }: AppProps,
  { children }: { children: React.ReactNode }
) {
  return (
    <>
      <Component {...pageProps} />
      <NextUIProvider>{children}</NextUIProvider>
    </>
  )
}
