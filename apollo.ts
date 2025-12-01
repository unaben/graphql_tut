import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { useMemo } from "react";

function createApolloClient () {
    return new ApolloClient({
        // link: new HttpLink({uri: '/api/graphql', credentials: 'same-origin'}),
        link: new HttpLink({uri: 'https://countries.trevorblades.com/', credentials: 'same-origin'}),        
        cache: new InMemoryCache(),
        defaultOptions: {
            watchQuery: {
                fetchPolicy: 'cache-and-network'
            }
        }
    })
}

export function useApollo() {
    const client = useMemo(() => createApolloClient(), [])
    return client
}
