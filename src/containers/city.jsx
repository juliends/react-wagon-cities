import React, { Component } from 'react';

class city extends Component {

  render(){
    return (
      <div className='cities'>
        <h1>{this.props.city.name}</h1>
      </div>
    )
  }
}

export default city;