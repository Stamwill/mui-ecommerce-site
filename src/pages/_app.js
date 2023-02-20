import * as React from 'react'
import Head from 'next/head'
import { GlobalProvider } from 'api/GlobalContext'
import NavBar from 'blocks/NavBar'
import 'styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Head>
        <title>Mui Ecommerce Site</title>
      </Head>

      <header>
        <NavBar />
      </header>

      <main>
        <Component {...pageProps} />
      </main>
    </GlobalProvider>
  )
}

App.getInitialProps = async (props) => {
  const { Component, ctx } = props

  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {
    pageProps,
  }
}
