import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Component from '../component';
import Counter from '../../components/Counter';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Component page', () => {
  it('should render <Counter /> component', () => {
    const page = shallow(<Component />);

    expect(page.find(Counter).length).toBe(1);
  });
});
