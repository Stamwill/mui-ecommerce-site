import * as React from 'react'
import Head from 'next/head'
import { GlobalProvider } from 'contexts/Global'
import Navbar from 'blocks/Navbar'
import Footer from 'blocks/Footer'
import AppDrawer from 'containers/App/partials/AppDrawer'
import 'styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Head>
        <title>Mui Ecommerce Site</title>
      </Head>

      <header>
        <Navbar />
        <AppDrawer />
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
