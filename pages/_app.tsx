import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../app/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
