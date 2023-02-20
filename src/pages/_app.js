import * as React from 'react'
import Head from 'next/head'
import { GlobalProvider } from 'api/GlobalContext'
import Navbar from 'blocks/Navbar'
import 'styles/globals.css'
import Footer from 'blocks/Footer'

export default function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Head>
        <title>Mui Ecommerce Site</title>
      </Head>

      <header>
        <Navbar />
      </header>

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
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
