import { SupaItemsRestore } from '../components/SupaItemsRestore';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { restoreItems } from '../actions';

export default compose<any, any>(
  connect(),
  withHandlers({
    onRestore: ({ dispatch }) => () => dispatch(restoreItems())
  })
)(SupaItemsRestore);
