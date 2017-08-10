import { combineReducers } from 'redux';
import search from './searchReducer';
import navigation from './navigationReducer';

export default combineReducers({
  search,
  navigation
});
