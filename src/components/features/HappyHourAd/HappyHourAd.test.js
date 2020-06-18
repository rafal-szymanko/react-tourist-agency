import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';
import Hero from '../../layout/Hero/Hero';


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

  it ('should render text and description', ()=> {
    const component = shallow(<HappyHourAd {...mockProps}/>);
    const renderedTitle = component.find(select.title).text();
    expect(renderedTitle).toEqual(mockProps.title);
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


describe('Component HappyHourAd with mocked Date', () => {
  const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
    it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
      jest.useFakeTimers();
      global.Date = mockDate(`2019-05-14T${time}.135Z`);
  
      const component = shallow(<HappyHourAd {...mockProps} />);
      const newTime = new Date();
      newTime.setSeconds(newTime.getSeconds() + delaySeconds);
      global.Date = mockDate(newTime.getTime());

      jest.advanceTimersByTime(delaySeconds * 1000);
      const renderedTime = component.find(select.promoDescription).text();
      expect(renderedTime).toEqual(expectedDescription);
  
      global.Date = trueDate;

      jest.useRealTimers();
    });
  };
  

  describe('Component HappyHourAd with mocked Date and delay', () => {
    checkDescriptionAfterTime('11:57:58', 2, '120');
    checkDescriptionAfterTime('11:59:58', 1, '1');
    checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 +'');
  });

});





describe('Component HappyHourAd with mocked Date', () => {

  const checkDescriptionAtTime = (time, expectedDescription) => {
    it(`should render description at ${time}`, () => {
      global.Date = mockDate(`2019-05-14T${time}.135Z`);
  
      const component = shallow(<HappyHourAd {...mockProps} />);
      const renderedTime = component.find(select.promoDescription).text();
      expect(renderedTime).toEqual(expectedDescription);
  
      global.Date = trueDate;
    });
  };

  describe('Component HappyHourAd with mocked Date', () => {
    checkDescriptionAtTime('12:00:00', `${mockProps.promoDescription}`);
    checkDescriptionAtTime('12:30:00', `${mockProps.promoDescription}`);
    checkDescriptionAtTime('12:59:59', `${mockProps.promoDescription}`);
  });

});


describe('Component HappyHourAd with mocked Date', () => {
  const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
    it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
      jest.useFakeTimers();
      global.Date = mockDate(`2019-05-14T${time}.135Z`);
  
      const component = shallow(<HappyHourAd {...mockProps} />);
      const newTime = new Date();
      newTime.setSeconds(newTime.getSeconds() + delaySeconds);
      global.Date = mockDate(newTime.getTime());

      jest.advanceTimersByTime(delaySeconds * 1000);
      const renderedTime = component.find(select.promoDescription).text();
      expect(renderedTime).toEqual(expectedDescription);
  
      global.Date = trueDate;

      jest.useRealTimers();
    });
  };

  describe('Component HappyHourAd with mocked Date and delay', () => {
    checkDescriptionAfterTime('11:57:58', 2, '120');
    checkDescriptionAfterTime('11:59:58', 1, '1');
    checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');
  });

});

it('should render HappyHourAd', () => {
  const expectedTitle = 'Lorem ipsum';
  const expectedImage = 'image.jpg';
  const component = shallow(<Hero titleText={expectedTitle} imageSrc={expectedImage} />);

  expect(component.find('HappyHourAd').length).toEqual(1);
});