import React, { Component } from 'react';


class Event extends Component {

  state = {
    events: [],
    showDetails: false,
  }

  handleClick = () => {
    this.setState({ showDetails: !this.state.showDetails})
  }

  render() {
    return (
      <div className="Event">
        <div className="eventDate"></div>
        <div className="eventName"></div>
        <div className="groupName"></div>
        <div className="yesRSVP"></div>
        {/* <EventDetails isOpen={this.state.showDetails} /> */}
        <button className="details" onClick={this.handleClick}>Details</button>
      </div>
    );
  }
}
export default Event;