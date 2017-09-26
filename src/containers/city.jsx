import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class City extends Component {

  handleClick = () => {
    this.props.setActiveCity(this.props.city.name);
  }

  render(){
    return (
      <div className='cities' onClick={this.handleClick}>
        <h1>{this.props.city.name}</h1>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);