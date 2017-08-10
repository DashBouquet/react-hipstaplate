import { MarvelHero } from '../components/MarvelHero';
import { Spinner } from 'components/Spinner';
import { graphql } from 'react-apollo';
import { compose, branch, renderComponent, withProps } from 'recompose';
import { head } from 'ramda';
import { fetchMarvelCharacters } from 'client/queries/fetchMarvelCharacters';

export default compose(
  graphql(
    fetchMarvelCharacters,
    {
      options: ({ query: { id } }: any) => ({
        variables: { endpoint: `characters/${id}` }
      })
    }
  ),
  branch(
    ({ data: { loading } }) => loading,
    renderComponent(Spinner) as any
  ),
  withProps(
    ({ data: { marvel } }) => ({
      hero: head(marvel.results)
    })
  )
)(MarvelHero);
