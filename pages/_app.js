import '../styles/globals.css'
import { useState, useEffect } from 'react'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    async function fetchData() {
      if (pageProps) {
        const backgroundColor =
          pageProps.isProductPage === true
            ? pageProps.colors.backgroundColor
            : '#FFF'
        document.body.style.background = backgroundColor
      }
    }

    fetchData()
  }, [pageProps])

  return <Component {...pageProps} />
}

export default MyApp
