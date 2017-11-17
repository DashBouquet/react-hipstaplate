import * as React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
const styled = require('styled-components').default;

interface IProps {
  children: React.ReactNode;
}

const Layout: React.StatelessComponent<IProps> = ({ children }): JSX.Element => (
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
