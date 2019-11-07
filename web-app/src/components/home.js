import React, { Component } from 'react'
import { connect } from 'react-redux'

import store from '../redux/store'

import Alerts from './alerts'

class Home extends Component{

  componentDidMount(){
    store.dispatch({
      type: 'setController',
      payload: { isShow: false }
    })
  }

  render(){
    return(<>
      <Alerts />
    </>)
  }
}

export default connect(state => state)(Home)
