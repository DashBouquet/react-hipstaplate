import * as React from 'react';

interface IProps {
  onRestore: () => {};
}

const SupaItemsRestore: React.StatelessComponent<IProps> = ({ onRestore }): JSX.Element => (
  <div>
    <div>
      <span>Restore items: </span>
      <button onClick={onRestore}>Restore items</button>
    </div>
  </div>
);

export { SupaItemsRestore };
