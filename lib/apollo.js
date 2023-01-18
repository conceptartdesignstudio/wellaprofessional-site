import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client'

const API_URL = process.env.NEXT_PUBLIC_GRAPHQL_API

const httpLink = new HttpLink({
  uri: API_URL
})

export const client = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache()
})
