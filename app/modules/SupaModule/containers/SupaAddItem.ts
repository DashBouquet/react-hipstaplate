import { SupaAddItem } from '../components/SupaAddItem';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { addItem } from '../actions';

export default compose(
  connect(),
  withHandlers({
    onAdd: ({ dispatch }) => (event) => {
      event.preventDefault();
      const { value } = event.currentTarget.item;
      if (value.length) dispatch(addItem(value));
    }
  })
)(SupaAddItem);
