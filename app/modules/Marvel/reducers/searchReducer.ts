import { createReducer } from 'utils/createReducer';
import { searchHero } from '../actions';

const initialState: string = '';

export default createReducer({
  [searchHero]: (state: string, name: string) => name
}, initialState);
