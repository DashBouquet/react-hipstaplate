import { SupaItem } from '../components/SupaItem';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { removeItem } from '../actions';

export default compose(
  connect(),
  withHandlers({
    onRemove: ({ dispatch, id }) => () => dispatch(removeItem(id))
  })
)(SupaItem);
