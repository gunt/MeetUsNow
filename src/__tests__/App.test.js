import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import Event from '../Event';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
import { mockEvents } from '../mock-events';

describe('<App /> component', () => {
  test('render list of events', () => {
    const AppWrapper = shallow(<App />);
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });
  test('render CitySearch', () => {
    const AppWrapper = shallow(<App />);
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
  test('render NumberOfEvents', () => {
    const AppWrapper = shallow(<App />);
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  })


});

describe('<App /> integration', () => {
  test('get list of events after user selects a city', async () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    CitySearchWrapper.instance().handleItemClicked('value', 1.1, 1.2);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(1.1, 1.2);
    AppWrapper.unmount();
  });

  test('change state after get list of events', async () => {
    const AppWrapper = shallow(<App />);
    AppWrapper.instance().updateEvents(1.1, 1.2);
    await AppWrapper.update();
    expect(AppWrapper.state('events')).toEqual(mockEvents.events);
  // });

  // test('render correct list of events', () => {
  //   const AppWrapper = mount(<App />);
  //   AppWrapper.setState({ events: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }] });
  //   expect(AppWrapper.find(Event)).toHaveLength(4);
    AppWrapper.unmount();
  });
})