import React, { Component } from 'react';
import EventList from './EventList';
import Event from './Event';
import CitySearch from './CitySearch';

class NumberOfEvents extends Component {
  state = {
    query: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
    this.props.updateEvents(null, null, value);
  }
  
  render() {
    return (
      <div className="numberOfEvents">
        <input
          type="number"
          className="numberEvents"
          onChange={this.handleInputChanged}
          value={this.state.query}
        />
        <span> Events </span>
      </div>
    )
  }
}

export default NumberOfEvents;