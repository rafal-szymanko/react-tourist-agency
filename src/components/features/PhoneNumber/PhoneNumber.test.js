import React from 'react';
import { shallow } from 'enzyme';
import PhoneNumber from './PhoneNumber';


const select = {
  phoneNumber: '.phoneNumber',
};


const mockProps = {
  phoneNumber: '678.243.8455',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<PhoneNumber />);
    expect(component).toBeTruthy();
  });

  it('should render span', ()=> {
    const component = shallow(<PhoneNumber/>);
    expect(component.find(select.phoneNumber).exists()).toBeTruthy();
  });

  it ('should render phone number', ()=> {
    const component = shallow(<PhoneNumber {...mockProps}/>);
    const renderedPhoneNumber = component.find(select.phoneNumber).text();
    expect(renderedPhoneNumber).toEqual(mockProps.phoneNumber);
  });

});


