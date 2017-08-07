import * as React from 'react';

interface IProps {
  onSearch: () => {};
}

const SupaItemSearch: React.StatelessComponent<IProps> = ({ onSearch }): JSX.Element => (
  <div>
    <span>Search item by typed name: </span>
    <input onChange={onSearch} type="text" autoComplete="off" />
  </div>
);

export { SupaItemSearch };
