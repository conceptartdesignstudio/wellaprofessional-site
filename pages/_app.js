import { ApolloProvider } from '@apollo/client'
import '../styles/globals.css'
import { useState, useEffect } from 'react'

import { client } from '../lib/apollo'

const MyApp = ({ Component, pageProps }) => {
  console.log(pageProps)

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

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
