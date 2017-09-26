import React, { Component } from 'react';

import City from './city';

  const cities = [
    { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' },
    { name: 'London', address: '14-22 Elder St, London E1 6BT', slug: 'london' },
    { name: 'Berlin', address: 'Rudi-Dutschke-Straße 26, 10969 Berlin', slug: 'berlin' },
  ];

class CityList extends Component {

  componentWillMount() {
  // TODO: dispatch an action to load flats!
  }

  render(){
    return (
      <div>
        {
          cities.map(city => <City city={city}/>)
        }
      </div>
    )
  }
}

export default CityList;