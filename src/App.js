import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { WarningAlert } from './Alert'
import moment from 'moment';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

class App extends Component {
  state = {
    events: [],
    lat: null,
    lon: null,
    page: null,
  }

  componentDidMount() {
    this.updateEvents();
  }

  //count how many events have a local_date value that’s equivalent to each of those dates.
  countEventsOnADate = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
  }

  //new function for getting the correctly formatted date for each of the upcoming seven days
  getData = () => {
    const next7Days = []; 
    const currentDate = moment(); 
   
    for (let i = 0; i < 7; i += 1) {
      currentDate.add(1, 'days'); 
      const dateString = currentDate.format('YYYY-MM-DD'); // Format the date
      
      const count = this.countEventsOnADate(dateString);
      next7Days.push({ date: dateString, number: count }); // Add this date and number to the list
    }
    return next7Days;
  }

  updateEvents = (lat, lon, page) => {
    // Offline Warning //  offline users that the displayed list has been loaded from the cache
    if (!navigator.onLine){
      this.setState({ warningText: "You are Offline!. Events displayed list has been loaded from your last session."});
    } else {
      this.setState({ warningText: ""})
    }
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

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <ResponsiveContainer height={400}>
        <ScatterChart
          width={800}
          height={400}
          margin={{
            top: 20, right: 20, bottom: 20, left: 20,
          }}
        >
            <CartesianGrid />
            <XAxis type="category" dataKey="date" name="date" />
            {/* <YAxis type="number" dataKey="number" name="number of events" /> */}
            {/* Remove-Decimals */}
            <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false}/>
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;