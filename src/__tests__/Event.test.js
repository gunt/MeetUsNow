import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import Event from '../Event';


describe('<Event /> component', () => {
  let EventWrapper;

  const sampleEvent =
      {
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
      };

    beforeAll(() => {
      EventWrapper = shallow(<Event event={sampleEvent} />)
    })

    test('check to see if event is rendered', () => {
      expect(EventWrapper.find('.Event')).toHaveLength(1);
    })

    test('event title should match', () =>{
      expect(EventWrapper.find('.eventName').text()).toBe('Campus Hackathon München 2020')
    })

    test('click event should toggle details', () => {
      EventWrapper.find('.Event .detailBtn').simulate('click');
      expect(EventWrapper.state('show')).toBe(true);
      expect(EventWrapper.find('.details')).toHaveLength(1);

      EventWrapper.find('.Event .detailBtn').simulate('click');
      expect(EventWrapper.state('show')).toBe(false);
      expect(EventWrapper.find('.details')).toHaveLength(0);

    })


})