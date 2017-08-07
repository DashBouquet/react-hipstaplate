import * as React from 'react';
import SupaAddItem from '../containers/SupaAddItem';
import SupaItemsRestore from '../containers/SupaItemsRestore';
import SupaItem from '../containers/SupaItem';
import SupaItemSearch from '../containers/SupaItemSearch';
import styled from 'styled-components';

interface IProps {
  list: [object];
  posts: [{
    id: number;
    authorId: number;
    title: string;
    votes: number;
  }];
}

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
  padding: 15px;
`;

const Lists = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SupaLayout: React.StatelessComponent<IProps> = ({ list, posts }): JSX.Element => (
  <div>
    <Nav>
      <SupaAddItem />
      <SupaItemsRestore />
      <SupaItemSearch items={list} />
    </Nav>
    <Lists>
      <div>
        <span>Store list</span>
        {
          list.map((item, index) => (
            <SupaItem key={index} {...item} />
          ))
        }
      </div>
      <div>
        <span>Query list</span>
        {
          posts.map((item, index) => (
            <div key={index}>
              <div>ID: {item.id}</div>
              <div>Title: {item.title}</div>
            </div>
          ))
        }
      </div>
    </Lists>
  </div>
);

export { SupaLayout };
