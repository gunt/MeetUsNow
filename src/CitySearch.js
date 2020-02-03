import React, { Component } from 'react';

class CitySearch extends Component {

    state = {
        query: '',
        suggestions: [],
      }

  render() {
    return (
        <div className="CitySearch">
  <input
  type="text"
  className="city"
  value={this.state.query}
/>
  <ul className="suggestions">
  </ul>
</div>
    );
  }
}

export default CitySearch; 