import gql from 'graphql-tag';

export const fetchPosts = gql`
  query {
    posts {
      id
      title
    }
  }
`;
