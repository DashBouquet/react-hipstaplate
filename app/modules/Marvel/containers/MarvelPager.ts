import { MarvelPager } from '../components/MarvelPager';
import { connect } from 'react-redux';
import { compose, withProps, withHandlers } from 'recompose';
import { range, filter } from 'ramda';
import { getNavigation } from '../selectors';
import { nextPage, prevPage, toPage, toStart } from '../actions';

export default compose<any, { total: number; offset: number; }>(
  connect(getNavigation),
  withProps(
    ({ page, total, offset }) => ({
      prev: filter(num => num !== page && num > 0)(range(Math.abs(page - offset), page)),
      next: filter(num => page !== total && num <= total)(range(page + 1, (page + offset) + 1))
    })
  ),
  withHandlers({
    onNext: ({ dispatch }) => () => dispatch(nextPage()),
    onPrev: ({ dispatch }) => () => dispatch(prevPage()),
    onStart: ({ dispatch }) => () => dispatch(toStart()),
    onEnd: ({ dispatch, total }) => () => dispatch(toPage(total)),
    onPage: ({ dispatch }) => ({ currentTarget }) => {
      const { dataset: { page } } = currentTarget;
      dispatch(toPage(Number(page)));
    }
  })
)(MarvelPager);
