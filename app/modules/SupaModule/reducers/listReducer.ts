import { createReducer } from 'utils/createReducer';
import { addItem, removeItem, searchItem, restoreItems } from '../actions';
import { filter, insert } from 'ramda';

interface IList {
  id: number;
  name: string;
}

const initialState: IList[] = [
  { id: 1, name: 'one' },
  { id: 2, name: 'two' },
  { id: 3, name: 'three' },
  { id: 4, name: 'four' },
  { id: 5, name: 'five' },
  { id: 6, name: 'six' },
  { id: 7, name: 'seven' },
  { id: 8, name: 'eight' }
];

export default createReducer({
  [addItem]: (state: IList[], name: string): IList[] => (
    insert(state.length, { id: new Date().getTime(), name })(state)
  ),
  [removeItem]: (state: IList[], payload: number): object[] => filter(({ id }) => id !== payload)(state),
  [searchItem]: (state: IList[], payload: IList[]) => payload,
  [restoreItems]: () => initialState as IList[]
}, initialState);
