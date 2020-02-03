import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    number: 12,
  }

  onNumberChanged = (event) => {
    const value = event.target.value;
    this.setState({ number: value });
    this.props.updateEvents(null, null, value);
  }

  render() {
    return (
      <div className="NumberOfEvents">
        <span>Show </span>
        <input
          type="number"
          className="number-of-events"
          onChange={this.onNumberChanged}
          value={this.state.number}
        />
        <span> Events</span>
      </div>
    );
  }
}

export default NumberOfEvents; 