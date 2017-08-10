import MarvelHero from './MarvelHero';
import { MarvelLayout } from '../components/MarvelLayout';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { compose, branch, renderComponent } from 'recompose';
import { isEmpty } from 'ramda';
import { fetchMarvelCharacters } from 'client/queries/fetchMarvelCharacters';
import { stateMapper } from '../selectors';

export default compose<any, { query: any }>(
  branch(
    ({ query }) => !isEmpty(query),
    renderComponent(MarvelHero) as any
  ),
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
