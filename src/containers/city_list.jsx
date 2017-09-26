import React, { Component } from 'react';
import City from './city';

// Redux config
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities },
    dispatch
  );
}

class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
  }

  render(){    
    return (
      <div>
        {
          this.props.cities.map(city => <City key={city.name} city={city}/>)
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);