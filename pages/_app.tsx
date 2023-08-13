import type { AppProps } from 'next/app'
import Web3Provider from '@/providers/Web3'

import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'

export default function App(
  { Component, pageProps }: AppProps,
  { children }: { children: React.ReactNode }
) {
  return (
    <Web3Provider>
      <Component {...pageProps} />
      <NextUIProvider>{children}</NextUIProvider>
    </Web3Provider>
  )
}
