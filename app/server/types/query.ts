const Query = `
  type Query {
    posts: [Post]
    author(id: Int!): Author
  }
`;

export { Query };
