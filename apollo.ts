import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from "@apollo/client";
import { useMemo } from "react";

function createApolloClient() {
    const localLink = new HttpLink({ 
        uri: '/api/graphql', 
        credentials: 'same-origin' 
    });
    
    const countriesLink = new HttpLink({ 
        uri: 'https://countries.trevorblades.com/', 
        credentials: 'same-origin' 
    });

    const link = ApolloLink.split(
        (operation) => operation.getContext().clientName === 'countries',
        countriesLink,
        localLink
    );

    return new ApolloClient({
        link,
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


