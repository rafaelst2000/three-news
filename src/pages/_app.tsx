import type { AppProps } from 'next/app'

import { globalStyles } from '@/styles/global'
import { Header } from '@/components/Header'
import { SessionProvider } from 'next-auth/react'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
