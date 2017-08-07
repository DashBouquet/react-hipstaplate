import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';
import { Author } from './types/author';
import { Post } from './types/post';
import { Query } from './types/query';
import { Mutation } from './types/mutation';

const typeDefs = `
  ${Author}
  ${Post}
  # the schema allows the following query:
  ${Query}
  # this schema allows the following mutation:
  ${Mutation}
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export { schema };
