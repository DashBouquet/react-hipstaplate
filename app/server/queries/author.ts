import authors from '../mocks/authors';
import { find, propEq } from 'ramda';

const author: any = (_, { id }) => find(propEq('id', id))(authors);

export { author };
