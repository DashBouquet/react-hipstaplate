import * as React from 'react';
import { shallow } from 'enzyme';
import Home from '../index';
import Layout from '../../components/Layout';

describe('Home page', () => {
  it('should render Layout wrapper', () => {
    const children = (<h1>Hello!</h1>);
    const layout = shallow(<Layout>{children}</Layout>);

    expect(layout.contains(children)).toBe(true);
  });

  it('should render <h1> tag with text', () => {
    const home = shallow(<Home />);

    expect(home.find('h1').text()).toEqual('Hello!');
  });
});
