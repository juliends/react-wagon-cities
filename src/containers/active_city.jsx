import React, { Component }from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ActiveCity extends Component {
  render(){
    if (this.props.activeCity === null){
      return (
        <div className='active-city'>
          <h1>Choose a city</h1>
        </div>
      )
    } else {
      return (
        <h1>{this.props.activeCity}</h1>
      )  
    }
  }
}

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);

