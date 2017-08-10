import { MarvelSearchHero } from '../components/MarvelSearchHero';
import { connect } from 'react-redux';
import { compose, withHandlers } from 'recompose';
import { getSearch } from '../selectors';
import { searchHero } from '../actions';

export default compose(
  connect(getSearch),
  withHandlers({
    onChange: ({ dispatch }) => ({ target: { value } }) => {
      dispatch(searchHero(value.toLowerCase()));
    },
    onClear: ({ dispatch }) => () => {
      dispatch(searchHero(''));
    }
  })
)(MarvelSearchHero);
