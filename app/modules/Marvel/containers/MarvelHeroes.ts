import { MarvelHeroes } from '../components/MarvelHeroes';
import { Spinner } from 'components/Spinner';
import { compose, branch, renderComponent, withProps } from 'recompose';

interface InputProps {
  data: any;
  limit: number;
}

export default compose<any, InputProps>(
  branch(
    ({ data: { loading } }) => loading,
    renderComponent(Spinner) as any
  ),
  withProps(
    ({ data: { marvel }, limit }) => ({
      characters: marvel.results,
      total: Math.ceil(marvel.total / limit)
    })
  )
)(MarvelHeroes);
