import React, { Component } from 'react'

class Rooms extends Component {
  render(){
    return (<div className = "collection row">
      <div className = "collection-item avatar col s12 m6 l4">
        <i className = "material-icons circle"> folder </i>
        <span className = "title"> Habitacion 1 </span>
        <p>
          Estado del habitacion
        </p>
      </div>
      <div className="collection-item avatar col s12 m6 l4">
        <i className="material-icons circle"> folder </i>
        <span className = "title"> Habitacion 2 < /span>
        <p>
          Estado del habitacion
        </p>
      </div>
    </div>)
  }
}

export default Rooms
