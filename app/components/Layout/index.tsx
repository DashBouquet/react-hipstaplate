import * as React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import styled from 'styled-components';

const Layout: React.StatelessComponent<any> = ({ children }): JSX.Element => (
  <section>
    <Header />
    <Content>
      {children}
    </Content>
    <Footer />
  </section>
);

const Content = styled.div`
  padding: 15px 30px;
`;

export default Layout;
