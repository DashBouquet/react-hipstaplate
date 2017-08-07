import * as React from 'react';
import { shallow } from 'enzyme';
import { Counter } from '../component';

const counter = shallow(<Counter />);

describe('Counter component', () => {
  it('should render <div> tag', () => {
    expect(counter.find('div').length).toEqual(1);
  });

  it('should render two <button> tags', () => {
    expect(counter.find('button').length).toEqual(2);
  });

  it('should render <span> tag', () => {
    expect(counter.find('span').length).toEqual(1);
  });
});
