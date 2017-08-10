import { createReducer } from 'utils/createReducer';
import { nextPage, prevPage, toStart, toPage, searchHero } from '../actions';

interface IPage {
  limit: number;
  page: number;
}

const initialState: IPage = {
  limit: 18,
  page: 1
};

export default createReducer({
  [nextPage]: (state: IPage): IPage => ({
    ...state,
    page: state.page + 1
  }),
  [prevPage]: (state: IPage): IPage => ({
    ...state,
    page: state.page - 1
  }),
  [toStart]: (state: IPage): IPage => ({
    ...state,
    page: initialState.page
  }),
  [toPage]: (state: IPage, page: number): IPage => ({
    ...state,
    page
  }),
  [searchHero]: (state: IPage): IPage => ({
    ...state,
    page: initialState.page
  })
}, initialState);
