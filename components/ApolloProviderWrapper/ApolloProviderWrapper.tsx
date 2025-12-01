'use client'

import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@/apollo'

const ApolloProviderWrapper = ({children}: React.PropsWithChildren<unknown>) => {
  const client = useApollo()

  console.log(client);
  

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default ApolloProviderWrapper