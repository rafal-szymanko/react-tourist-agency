import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='lorem' cost ='lorem' days = {1} tags={['lorem', 'ipsum', 'dolor']}/>);
    expect(component).toBeTruthy();
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
    
  });


  it('should generate props', () => {
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='name' cost ='cost' days = {1} tags={['lorem', 'ipsum', 'dolor']}/>);
    expect(component.find('.title').contains('name')).toEqual(true);
    expect(component.find('.details').contains('cost')).toEqual(true);
    expect(component.find('.details').contains(1)).toEqual(true);

  });


  it('should generate link to correct address', () => {
    const expectedId = '/trip/abc';
    const component = shallow(<TripSummary id='abc' image='image.jpg' name='lorem' cost ='lorem' days = {1} tags={['lorem', 'ipsum', 'dolor']}/>);
    expect(component.find('.link').prop('to')).toEqual(expectedId);
  });

  it('should render correct image', () => {
    const expectedImageSrc = 'image.jpg';
    const expectedImageAlt = 'lorem';
    const component = shallow(<TripSummary id='abc' image={expectedImageSrc} name='lorem' cost ='lorem' days = {1} tags={['lorem', 'ipsum', 'dolor']}/>);
    expect(component.find('img').prop('src')).toEqual(expectedImageSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedImageAlt);
  });

  it('should render tags in proper order', () => {
    const expectedTags = ['lorem', 'ipsum', 'dolor'];
    const component = shallow(<TripSummary id='abc' image={'image.jpg'} name='lorem' cost ='lorem' days = {1} tags={['lorem', 'ipsum', 'dolor']} />);
    expect(component.find('.tag').at(0).props().children).toEqual(expectedTags[0]);
    expect(component.find('.tag').at(1).props().children).toEqual(expectedTags[1]);
    expect(component.find('.tag').at(2).props().children).toEqual(expectedTags[2]);
  });

  it('should not render div, if prop tags array is empty', ()=> {
    const component = shallow(<TripSummary id='abc' image={'image.jpg'} name='lorem' cost ='lorem' days = {1} tags={[]}/>);
    expect(component.find('.tags').exists()).toBeFalsy();
  });

  it('should not render div, if prop tags is not defined', ()=> {
    const component = shallow(<TripSummary id='abc' image={'image.jpg'} name='lorem' cost ='lorem' days = {1} />);
    expect(component.find('.tags').exists()).toBeFalsy();
  });
});

