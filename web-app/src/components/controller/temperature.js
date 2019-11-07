import React, { Component } from 'react'

class Temperature extends Component{
  render(){
    return(<>
      <label>
        Temperatura
      </label>
      <input type="range" id="test5" min="0" max="100" />
    </>)
  }
}

export default Temperature
