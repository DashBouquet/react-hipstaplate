import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createApolloFetch } from 'apollo-fetch';

const fetch = createApolloFetch({ uri: 'http://localhost:3000/graphql' });

let apolloClient: any = null;
const proc = process as any;
const glob = global as any;

// Polyfill fetch() on the server (used by apollo-client)
if (!proc.browser) {
  glob.fetch = fetch;
}

function create() {
  return new ApolloClient({
    ssrMode: !proc.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'http://localhost:3000/graphql',
      credentials: 'same-origin'
    }),
    cache: new InMemoryCache()
  });
}

export function initApollo() {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!proc.browser) {
    return create();
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create();
  }

  return apolloClient;
}
