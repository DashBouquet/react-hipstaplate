import * as React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
const styled = require('styled-components').default;

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
