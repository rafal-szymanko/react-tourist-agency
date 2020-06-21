import React from 'react';
import { shallow } from 'enzyme';
import PhoneNumber from './PhoneNumber';


const select = {
  phoneNumber: '.phoneNumber',
};

describe('Component PhoneNumber', () => {
  it('should render without crashing', () => {
    const component = shallow(<PhoneNumber />);
    expect(component).toBeTruthy();
  });

  it('should render span', ()=> {
    const component = shallow(<PhoneNumber/>);
    expect(component.find(select.phoneNumber).exists()).toBeTruthy();
  });
});


