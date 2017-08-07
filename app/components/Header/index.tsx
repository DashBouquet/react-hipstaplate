import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-around;
  align-items: center;
`;

const Href = styled.a`
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;

const Header: React.StatelessComponent<{}> = (): JSX.Element => (
  <header>
    <Nav>
      <Link href="/"><Href>Home</Href></Link>
      <Link href="/component"><Href>Component</Href></Link>
      <Link href="/module"><Href>Module</Href></Link>
      <Link href="/about"><Href>About</Href></Link>
    </Nav>
  </header>
);

export { Header };
