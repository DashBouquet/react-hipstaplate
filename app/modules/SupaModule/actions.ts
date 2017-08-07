import { scopedCreator } from 'utils/createAction';

const createAction = scopedCreator('SupaModule');

export const liveAdd = createAction('LIVE_ADD');
export const addItem = createAction('ADD_ITEM');
export const removeItem = createAction('REMOVE_ITEM');
export const searchItem = createAction('SEARCH_ITEM');
export const restoreItems = createAction('RESTORE_ITEMS');
