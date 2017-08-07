import { SupaLayout } from '../components/SupaLayout';
import { Spinner } from 'components/Spinner';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { compose, branch, renderComponent, withProps, lifecycle } from 'recompose';
import { liveAdd } from '../actions';
import { getListOfItems } from '../selectors';
import { fetchPosts } from 'client/queries/fetchPosts';

export default compose(
  graphql(fetchPosts),
  connect(getListOfItems),
  branch(
    ({ data: { posts } }) => !posts,
    renderComponent(Spinner) as any
  ),
  withProps(
    ({ data: { posts } }) => ({
      posts
    })
  ),
  lifecycle({
    componentDidMount() {
      const { dispatch }: any = this.props;
      dispatch(liveAdd());
    }
  })
)(SupaLayout);
