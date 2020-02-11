import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    // query: 32,
    number: 32,
  };

  //according to the 4.7 exercise here the code need to change instead 
  //of the handleInputChanged like the cityseach component for the info alert
  // this time for the Error Alert
  onNumberChanged = (event) => {
    const value = event.target.value;
    this.setState({ number: value });
    this.props.updateEvents(null, null, value);
    if (value < 1) {
      this.setState({ errorText: 'Number should be at least 1' });
    } else {
      this.setState({ errorText: '' });
    }
  }

  render() {
    return (
      <div className="numberOfEvents">
        <ErrorAlert text={this.state.errorText} />
        {/* That was tricky how to make the text show - focus here */}
        <span>Show</span>
        <input
          type="number"
          className="numberEvents"
          onChange={this.onNumberChanged}
          value={this.state.number}
        />
        <span> Events</span>
      </div>
    );
  }
}

export default NumberOfEvents;