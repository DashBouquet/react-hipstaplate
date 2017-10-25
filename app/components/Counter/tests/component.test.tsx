import * as React from 'react';
import { shallow, configure } from 'enzyme';
import { Counter } from '../component';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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
