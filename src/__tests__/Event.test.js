import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import Event from '../Event';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test('test that componet is rendered', () => {
    expect(EventWrapper).toHaveLength(1);
  });

  test('test that event wrapping div is rendered', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('test that event wrapping div just shows event__Overview', () => {
    expect(EventWrapper.find('.event').children()).toHaveLength(1);
  });

  test('test that event__Overview is rendered', () => {
    expect(EventWrapper.find('.event__Overview')).toHaveLength(1);
  });

  test('test that event__Overview children are rendered', () => {
    expect(EventWrapper.find('.event__Overview').children()).toHaveLength(3);
  });

  test('test that event__Details children are rendered', () => {
    EventWrapper.setState({
      showDetails: true
    });
    expect(EventWrapper.find('.event__Details--description')).toHaveLength(1);
  });
  test('test that show/hide details button is rendered', () => {
    expect(EventWrapper.find('.event__Overview button')).toHaveLength(1);
  });

  test('click on button should show details', () => {
    EventWrapper.setState({
      showDetails: false
    });
    EventWrapper.find('.event__Overview button').simulate('click');
    expect(EventWrapper.state('showDetails')).toBe(true);
  });

  test('set mock eventdata as state', () => {
    EventWrapper.setState({
        events: {
              created: 1562151747000,
              duration: 169200000,
              id: '262837309',
              name: 'Campus Hackathon München 2020',
              date_in_series_pattern: false,
              status: 'upcoming',
              time: 1587142800000,
              local_date: '2020-04-17',
              local_time: '19:00',
              updated: 1562151747000,
              utc_offset: 7200000,
              waitlist_count: 0,
              yes_rsvp_count: 8,
              group: {
                created: 1501244830000,
                name: 'Tech_Hub München',
                id: 25186228,
                join_mode: 'open',
                lat: 48.13999938964844,
                lon: 11.579999923706055,
                urlname: 'Tech_Hub-Munchen',
                who: 'Members',
                localized_location: 'München, Germany',
                state: '',
                country: 'de',
                region: 'en_US',
                timezone: 'Europe/Berlin',
              },
              link: 'https://www.meetup.com/Tech_Hub-Munchen/events/262837309/',
              description: '',
              visibility: 'public',
              member_pay_fee: false,
            },
     });
    
    expect(EventWrapper.state('events').name).toBe('Campus Hackathon München 2020');
  });
});