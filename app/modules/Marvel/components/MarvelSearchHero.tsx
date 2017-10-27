import * as React from 'react';
const styled = require('styled-components').default;

interface IProps {
  search: string;
  onChange: () => void;
  onClear: () => void;
}

const Wrapper = styled.div`
  margin-bottom: 50px;
`;

const MarvelSearchHero: React.StatelessComponent<IProps> = (props): JSX.Element => (
  <Wrapper>
    <span>Search hero by name: </span>
    <input type="text" onChange={props.onChange} value={props.search} />
    <button onClick={props.onClear}>Clear</button>
  </Wrapper>
);

export { MarvelSearchHero };
