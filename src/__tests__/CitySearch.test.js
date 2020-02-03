import React from 'react';
import { shallow } from 'enzyme';
import CitySearch from '../CitySearch';

describe('<CitySearch /> component', () => {
    let CitySearchWrapper;
    beforeAll(() => {
      CitySearchWrapper = shallow(<CitySearch />);
    });
    test('render text input', () => {
      expect(CitySearchWrapper.find('.city')).toHaveLength(1);
    });
    test('render list of suggestions', () => {
      expect(CitySearchWrapper.find('.suggestions')).toHaveLength(1);
    });
    test('render text input correctly', () => {
      const query = CitySearchWrapper.state('query');
      expect(CitySearchWrapper.find('.city').prop('value')).toBe(query);
    });
  });