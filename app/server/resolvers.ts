import authors from './mocks/authors';
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
