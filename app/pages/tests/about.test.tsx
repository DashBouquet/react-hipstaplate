import * as React from 'react';
import { shallow, configure } from 'enzyme';
import About from '../about';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('About page', () => {
  it('should render <h1> tag with text', () => {
    const about = shallow(<About />);

    expect(about.find('h1').text()).toEqual('About');
  });
});
