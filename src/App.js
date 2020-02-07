import React, {Component} from 'react';
import './App.css';
import EventList from './EventList';
import Event from './Event';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { mockEvents } from './mock-events';
import { getEvents } from './api';

class App extends Component{
  state = {
    events: [],
    page: null,
  }

  componentDidMount() {
      this.updateEvents();
  }
  updateEvents = (lat, lon, page) => {
    if (lat && lon) {
      getEvents(lat, lon, this.state.page).then(events =>
        this.setState({ events, lat, lon })
      );
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(events =>
        this.setState({ events, page })
      );
    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(events =>
        this.setState({ events })
      );
    }
  }
  
  render(){
  return (
    <div className="App">
      <CitySearch updateEvents={this.updateEvents} />
      <NumberOfEvents updateEvents={this.updateEvents} />
      <EventList events={this.state.events} />
    </div>
  );
  }
}

export default App;