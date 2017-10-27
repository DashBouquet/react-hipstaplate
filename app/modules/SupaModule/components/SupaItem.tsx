import * as React from 'react';
const styled = require('styled-components').default;

interface IProps {
  id: number;
  name: string;
  onRemove: () => {};
}

const Item = styled.div`
  padding: 5px 0;
`;

const Name = styled.span`
  margin-right: 10px;
`;

const SupaItem: React.StatelessComponent<IProps> = ({ name, onRemove }): JSX.Element => (
  <Item>
    <Name>{name}</Name>
    <button onClick={onRemove}>Remove</button>
  </Item>
);

export { SupaItem };
