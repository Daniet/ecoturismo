import React, { Component } from 'react'

import store from '../redux/store'
import { connect } from 'react-redux'

class Devices extends Component {

  constructor(props){
    super(props)
    this.state = store.getState()
  }

  render(){

    store.dispatch({
      type: 'setController',
      payload: { isShow: false }
    })

    return (<div className="collection row" >
      <div className="collection-item avatar col s12 m6 l4">
        <i className="material-icons circle">folder</i>
        <span className="title">Dispositvo 1</span>
        <p>
          Estado del dispocitivo
        </p>
      </div>
      <div className="collection-item avatar col s12 m6 l4">
        <i className="material-icons circle">folder</i>
        <span className="title">Dispositvo 2</span>
        <p>
          Estado del dispocitivo
        </p>
      </div>
    </div>)
  }
}

export default connect(state => state)(Devices);
