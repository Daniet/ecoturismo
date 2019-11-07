import React, { Component } from 'react'

class Locked extends Component{
  render(){
    return(<>
      <label>
        acceso
      </label>
      <div className="switch">
        <label>
          Estado
          <input type="checkbox" />
          <span className="lever"></span>
        </label>
      </div>
    </>)
  }
}

export default Locked
