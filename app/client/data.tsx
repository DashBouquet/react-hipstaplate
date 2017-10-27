import * as React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { initApollo } from './apollo';
import { initRedux } from './store';

const proc = process as any;

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

export default (ComposedComponent) => {
  return class WithData extends React.Component {
    public apollo;
    public redux;

    public displayName = `WithData(${getComponentDisplayName(ComposedComponent)})`;

    public async getInitialProps(ctx) {
      let serverState = {};

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {};
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      if (!proc.browser) {
        const apollo = initApollo();
        const redux = initRedux(apollo);
        // Provide the `url` prop data in case a GraphQL query uses it
        const url = {query: ctx.query, pathname: ctx.pathname};

        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <ApolloProvider client={apollo}>
              <Provider store={redux}>
                <ComposedComponent url={url} {...composedInitialProps} />
              </Provider>
            </ApolloProvider>
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
        }
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();

        // Extract query data from the store
        const state = redux.getState();

        // No need to include other initial Redux state because when it
        // initialises on the client-side it'll create it again anyway
        serverState = {
          apollo: { // Only include the Apollo data state
            data: state.apollo.data
          }
        };
      }

      return {
        serverState,
        ...composedInitialProps
      };
    }

    constructor(props) {
      super(props);
      const { serverState }: any = this.props;

      this.apollo = initApollo();
      this.redux = initRedux(this.apollo, serverState);
    }

    public render() {
      return (
        <ApolloProvider client={this.apollo}>
          <Provider store={this.redux}>
            <ComposedComponent {...this.props} />
          </Provider>
        </ApolloProvider>
      );
    }
  };
};
