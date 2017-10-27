import gql from 'graphql-tag';

export const fetchMarvelCharacters = gql`
  query($endpoint: String!, $params: MarvelParams) {
    marvel(endpoint: $endpoint, params: $params) {
      count
      total
      results {
        id
        name
        description
        thumbnail {
          path
          extension
        }
      }
    }
  }
`;
