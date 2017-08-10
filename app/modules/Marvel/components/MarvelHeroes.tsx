import * as React from 'react';
import styled from 'styled-components';
import MarvelPager from '../containers/MarvelPager';

const { Link } = require('client/routes');

interface IProps {
  characters: any[];
  total: number;
}

const Heroes = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 15px;
`;

const Hero = styled.a`
  text-align: center;
  margin-bottom: 25px;
  margin-right: 35px;
  text-decoration: none;
  cursor: pointer;
`;

const HeroImageWrapp = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 2px 6px -3px black;
  margin-bottom: 10px;
`;

const HeroImage = styled.img`
  display: block;
  max-width: 100%;
`;

const HeroName = styled.div`
  max-width: 200px;
`;

const MarvelHeroes: React.StatelessComponent<IProps> = ({ characters, total }): JSX.Element => (
  <div>
    <Heroes>
      {
        characters.map((char, index) => (
          <Link route={`/marvel/${char.id}`} key={index}>
            <Hero>
              <HeroImageWrapp>
                <HeroImage src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt={char.name} />
              </HeroImageWrapp>
              <HeroName>{char.name}</HeroName>
            </Hero>
          </Link>
        ))
      }
    </Heroes>
    {total > 0 && <MarvelPager total={total} offset={3} />}
  </div>
);

export { MarvelHeroes };
