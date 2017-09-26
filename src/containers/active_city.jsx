import React, { Component }from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class ActiveCity extends Component {

  render(){
    return (
      <div className='active-city'>
        <h1>Hello</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.city
  };
}

export default connect(mapStateToProps)(ActiveCity);

