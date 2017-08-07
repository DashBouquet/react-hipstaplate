const Mutation = `
  type Mutation {
    upvotePost (
      postId: Int!
    ): Post
  }
`;

export { Mutation };
