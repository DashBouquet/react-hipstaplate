import * as React from 'react';
import styled from 'styled-components';
import MarvelSearchHero from '../containers/MarvelSearchHero';
import MarvelHeroes from '../containers/MarvelHeroes';

const Layout = styled.div`
  margin-bottom: 50px;
`;

const Title = styled.h1`
  text-align: center;
`;

const CopyLink = styled.a`
  display: block;
  text-align: center;
  max-width: 295px;
  margin: 0 auto 50px;
`;

const MarvelLayout: React.StatelessComponent<any> = ({ data, navigation }): JSX.Element => (
  <Layout>
    <Title>Marvel Heroes</Title>
    <CopyLink href="http://marvel.com" target="_blank">Data provided by Marvel. © 2017 MARVEL</CopyLink>
    <MarvelSearchHero />
    <MarvelHeroes data={data} limit={navigation.limit} />
  </Layout>
);

export { MarvelLayout };
