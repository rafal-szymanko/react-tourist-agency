import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';


const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};


const mockProps = {
  title: 'Happy Hour',
  promoDescription: `It's your time! Take advantage of Happy Hour! All offers 20% off!`,
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should render header and div', ()=> {
    const component = shallow(<HappyHourAd/>);
    expect(component.find(select.title).exists()).toBeTruthy();
    expect(component.find(select.promoDescription).exists()).toBeTruthy();
  });

  it ('should render with props', ()=> {
    const component = shallow(<HappyHourAd {...mockProps}/>);
    expect(component.contains(`<h3>${mockProps.title}</h3>`));
    expect(component.contains(`<div>${mockProps.promoDescription}</div>`));
  });
});

const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

describe('Component HappyHourAd with mocked Date', () => {

  const checkDescriptionAtTime = (time, expectedDescription) => {
    it(`should show correct at ${time}`, () => {
      global.Date = mockDate(`2019-05-14T${time}.135Z`);
  
      const component = shallow(<HappyHourAd {...mockProps} />);
      const renderedTime = component.find(select.promoDescription).text();
      expect(renderedTime).toEqual(expectedDescription);
  
      global.Date = trueDate;
    });
  };
  
  describe('Component HappyHourAd with mocked Date', () => {
    checkDescriptionAtTime('11:57:58', '122');
    checkDescriptionAtTime('11:59:59', '1');
    checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
  });

});