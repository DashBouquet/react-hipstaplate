import * as React from 'react';

interface IProps {
  onAdd: () => {};
}

const SupaAddItem: React.StatelessComponent<IProps> = (props): JSX.Element => (
  <form onSubmit={props.onAdd}>
    <span>Add new item: </span>
    <input name="item" type="text" autoComplete="off" />
    <button type="submit">Add item</button>
  </form>
);

export { SupaAddItem };
