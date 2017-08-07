import posts from '../mocks/posts';
import { find, propEq } from 'ramda';

const upvotePost = (_, { postId }) => {
  const post = find(propEq('id', postId))(posts);
  if (!post) {
    throw new Error(`Couldn't find post with id ${postId}`);
  }
  post.votes += 1;
  return post;
};

export { upvotePost };
