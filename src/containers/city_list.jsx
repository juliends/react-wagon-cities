import React, { Component } from 'react';
import City from './city';

import cities from '../cities';

class CityList extends Component {

  componentWillMount() {
  // TODO: dispatch an action to load flats!
  }

  render(){
    return (
      <div>
        {
          cities.map(city => <City key={city.name} city={city}/>)
        }
      </div>
    )
  }
}

export default CityList;