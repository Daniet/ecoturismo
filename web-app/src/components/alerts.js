import React, { Component } from 'react'
// redux
import store from '../redux/store'
import { connect } from 'react-redux'

import '../sass/btnAlert.scss'

class Alerts extends Component {

  constructor(props) {
    super(props)
    this.state = store.getState()

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getLocation, this.ErrorLocation)
    } else {
      alert('Su navegado no es compatible')
    }

  }

  getLocation(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    console.log(lng, lat)
  }

  sendAlert() {
    console.log('dasd')
  }

  ErrorLocation(error) {
    alert(error.code)
  }

  render () {
    return (<div className="row">
      { this.state.alerts.map((item, key) => {
        return <a class="waves-effect waves-light btn btn-alert col s12 m12 l12"
          onClick={ this.sendAlert }
        >
          { item }
        </a>
      }) }
    </div>)
  }
}

export default connect(state => state)(Alerts)
