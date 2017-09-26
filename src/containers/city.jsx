import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class City extends Component {

  handleClick = (event) => {
    console.log(this.props.city.name);
    this.props.setActiveCity(this.props.city.name);
  }

  render(){
    return (
      <div className='cities'>
        <h1 onClick={this.handleClick}>{this.props.city.name}</h1>
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

export default connect(mapDispatchToProps)(City);