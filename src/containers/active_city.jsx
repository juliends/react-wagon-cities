import React, { Component }from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render(){
    const city = this.props.selectedCity
    if (city === null){
      return (
        <div className='active-city'>
          <h1>Choose a city</h1>
        </div>
      )
    } else {
      return (
        <div className='active-city'>
          <h1>{city.name}</h1>
          <h2>{city.address}</h2>
          <h3>The slug: {city.slug}</h3>
        </div>
      )  
    }
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

export default connect(mapStateToProps)(ActiveCity);

