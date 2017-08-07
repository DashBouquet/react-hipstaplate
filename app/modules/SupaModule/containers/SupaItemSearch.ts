import { SupaItemSearch } from '../components/SupaItemSearch';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';
import { filter, toLower, equals } from 'ramda';
import { searchItem } from '../actions';

export default compose<any, { items: any[] }>(
  connect(),
  withState(
    'state',
    'handleSearch',
    ({ items }) => items
  ),
  withHandlers({
    onSearch: ({ dispatch, state }) => ({ target: { value } }) => {
      const items = filter(
        ({ name }) => toLower(name).indexOf(toLower(value)) >= 0
      )(state);

      dispatch(searchItem(items));
    }
  })
)(SupaItemSearch);
