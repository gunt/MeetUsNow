import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
test('An event element is collapsed by default', ({ given, when, then }) => {
    let EventWrapper;
    given('the user is looking at a list of events', () => {

      EventWrapper = shallow(<Event event={{}} /> )
    });

    when('the user accesses the event list', () => {

    });

    then('no event element should be opened', () => {

      expect(EventWrapper.state('show')).toBe(false);
    });
});

test('User can expand an event to see its details', ({ given, when, then }) => {
  let EventWrapper;
    given('the user is looking at a list of events', () => {

      EventWrapper = shallow(<Event event={{}} />);
    });

    when('the user clicks the event list', () => {

      EventWrapper.find('.Event .detailBtn').simulate('click');
    });

    then('the selected event should expand to show details about the event', () => {

      expect(EventWrapper.state('show')).toBe(true);
    });
});

test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
  let EventWrapper;
    given('the user is looking at an events expanded details', () => {

      EventWrapper = shallow(<Event event={{}} />);
    });

    and('the details are showing', () => {
      EventWrapper.update();
      EventWrapper.find('.Event .detailBtn').simulate('click');
    })

    when('the user clicks a button to collapse the event', () => {
      EventWrapper.find('.Event .detailBtn').simulate('click');
    });

    then('the details box is collapsed', () => {
      expect(EventWrapper.state('show')).toBe(false);
    });
});

});