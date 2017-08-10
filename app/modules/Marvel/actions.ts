import { scopedCreator } from 'utils/createAction';

const createAction = scopedCreator('Marvel');

export const searchHero = createAction('SEARCH_HERO');

export const nextPage = createAction('NEXT_PAGE');
export const prevPage = createAction('PREV_PAGE');
export const toStart = createAction('TO_START');
export const toPage = createAction('TO_PAGE');
