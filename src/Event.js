import React, { Component } from 'react';

class Event extends Component {
  state = {
    show: false
  };
  showDetails = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }
  
  render() {
    const event = this.props.event;
    return (
      <div className="Event">
        <div className="eventName">{event.name}</div>
        {/* <div className="eventGroup">{event.group.name}</div> */}
        <p className="time">{event.local_time} on {event.local_date}</p>
        <p className="rsvp">{event.yes_rsvp_count} people are going</p>
        {this.state.show &&
          <div className="details">
            {event.venue && (
              <div className="eventLocation">{event.venue.city + ', ' + event.venue.address_1}</div>
            )}
            <div className="description" dangerouslySetInnerHTML={{__html: event.description}} />
            <p className="visibility">{event.visibility}</p>
            <a className="link" href={event.link}>Event link</a>
          </div>
    }
      <button className="detailBtn"
      onClick={this.showDetails}
      >Show/hide Details</button>
    </div>
  )
    }
}

export default Event