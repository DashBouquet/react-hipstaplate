import { Counter } from './component';
import { compose, withState, withHandlers } from 'recompose';

export default compose(
  withState('value', 'handleCountChange', 0),
  withHandlers({
    onDecrease: ({ handleCountChange, min }) => () => {
      handleCountChange(value => value - 1);
    },
    onIncrease: ({ handleCountChange, max }) => () => {
      handleCountChange(value => value + 1);
    }
  })
)(Counter);
