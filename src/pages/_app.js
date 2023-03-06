import * as React from 'react'
import Head from 'next/head'
import { GlobalProvider } from 'api/GlobalContext'
import Navbar from 'blocks/Navbar'
import Footer from 'blocks/Footer'
import AppDrawer from 'containers/App/partials/AppDrawer'
import 'styles/globals.css'

export default function App({ Component, pageProps }) {
  const [open, setOpen] = React.useState(false)

  const toggleBurger = () => {
    setOpen((prevState) => !prevState)
    console.log(open)
  }
  return (
    <GlobalProvider>
      <Head>
        <title>Mui Ecommerce Site</title>
      </Head>

      <header>
        <Navbar open={open} toggleBurger={toggleBurger} />
        <AppDrawer open={open} toggleBurger={toggleBurger} />
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
