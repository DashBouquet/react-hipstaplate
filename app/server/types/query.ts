const Query = `
  type Query {
    posts: [Post]
    author(id: Int!): Author
    marvel(endpoint: String!, params: MarvelParams): Marvel
  }
`;

export { Query };
