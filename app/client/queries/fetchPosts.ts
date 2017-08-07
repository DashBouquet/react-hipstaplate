import { gql } from 'react-apollo';

export const fetchPosts = gql`
  query {
    posts {
      id
      title
    }
  }
`;
