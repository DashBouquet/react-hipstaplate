import * as React from 'react';
import { shallow } from 'enzyme';
import About from '../about';

describe('About page', () => {
  it('should render <h1> tag with text', () => {
    const about = shallow(<About />);

    expect(about.find('h1').text()).toEqual('About');
  });
});
