const _query = `const Query = \`
  type Query {
    posts: [Post]
    author(id: Int!): Author
  }
\`

export { Query };

`;

const _resolvers = `import authors from './mocks/authors';
import mockPosts from './mocks/posts';
import { find, propEq, filter } from 'ramda';
import { author } from './queries/author';
import { posts } from './queries/posts';
import { upvotePost } from './mutations/upvote';

export const resolvers = {
  Query: {
    posts,
    author
  },
  Mutation: {
    upvotePost
  },
  Author: {
    posts: (author) => filter(({ authorId }) => authorId === author.id)(mockPosts)
  },
  Post: {
    author: (post) => find(propEq('id', post.authorId))(authors)
  }
};

`;

const _schema = `import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
import { Author } from './types/author';
import { Post } from './types/post';
import { Query } from './types/query';
import { Mutation } from './types/mutation';

const typeDefs = \`
  $\{Author}
  $\{Post}
  # the schema allows the following query:
  $\{Query}
  # this schema allows the following mutation:
  $\{Mutation}
\`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export { schema };

`;

module.exports = [
  { path: './app/server/types/query.ts', content: _query, name: 'query.ts' },
  { path: './app/server/resolvers.ts', content: _resolvers, name: 'resolvers.ts' },
  { path: './app/server/schema.ts', content: _schema, name: 'schema.ts' }
];
