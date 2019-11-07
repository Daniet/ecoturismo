import React, { Component } from 'react'

import { connect } from 'react-redux'
import store from '../redux/store'

import Ligth from './controller/ligth'
import Locked from './controller/locked'
import Temperature from './controller/temperature'

import AreaGraphics from './graphics/areachar'

class Controller extends Component{

  constructor(props){
    super(props)
    this.state = store.getState()
  }

  render(){
    store.subscribe(()=>{
      this.setState(store.getState())
    })
    return (<div className="controller-devices">
      <div className="row">
        <div className="col s12 m12 l12">
          <div className={this.state.controller.isShow?'':'hide'}>
            <Ligth />
            <Locked />
            <Temperature />
          </div>
        </div>
        <div className="col s12 m12 l12 group-btn-select">
          <div className="btn btn-round">
            <i className="material-icons">
              add_alert
            </i>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default connect(state => state)(Controller)
