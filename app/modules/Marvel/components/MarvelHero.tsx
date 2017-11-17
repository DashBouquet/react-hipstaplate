import * as React from 'react';
const styled = require('styled-components').default;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;

const Body = styled.div`
  display: flex;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
`;

const ImgWrapp = styled.div`
  margin-right: 50px;
  flex: 1;
`;

const Img = styled.img`
  max-width: 100%;
  display: block;
`;

const MarvelHero: React.StatelessComponent<{ hero: any }> = ({ hero }): JSX.Element => (
  <div>
    <Header>{hero.name}</Header>
    <Body>
      <ImgWrapp>
        <Img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} />
      </ImgWrapp>
      <Content>
        <div>
          <div><b>Bio:</b></div>
          <p>{hero.description}</p>
        </div>
      </Content>
    </Body>
  </div>
);

export { MarvelHero };
