import * as React from 'react';
import { shallow } from 'enzyme';
import Component from '../component';
import Counter from '../../components/Counter';

describe('Component page', () => {
  it('should render <Counter /> component', () => {
    const page = shallow(<Component />);

    expect(page.find(Counter).length).toBe(1);
  });
});
