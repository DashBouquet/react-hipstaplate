import { MarvelLayout } from '../components/MarvelLayout';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { fetchMarvelCharacters } from 'client/queries/fetchMarvelCharacters';
import { stateMapper } from '../selectors';

export default compose(
  connect(stateMapper),
  graphql(
    fetchMarvelCharacters,
    {
      options: ({ navigation: { limit, page }, search }: any) => ({
        variables: {
          endpoint: 'characters',
          params: {
            nameStartsWith: search.length ? search : undefined,
            limit,
            offset: (page * limit) - limit
          }
        }
      })
    }
  )
)(MarvelLayout);
