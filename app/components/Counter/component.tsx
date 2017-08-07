import * as React from 'react';

interface IProps {
  onDecrease: () => {};
  onIncrease: () => {};
  value: string;
}


const Counter: React.StatelessComponent<IProps> = (props): JSX.Element => (
  <div>
    <button onClick={props.onDecrease}>Decrease</button>
    <span>{props.value}</span>
    <button onClick={props.onIncrease}>Increase</button>
  </div>
);

export { Counter };
