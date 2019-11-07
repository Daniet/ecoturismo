import React, { Component } from 'react'

import store from '../redux/store'
import { connect } from 'react-redux'

class Profile extends Component{

  constructor(props){
    super(props)
    this.state = store.getState()
  }

  render(){

    store.dispatch({
      type: 'setController',
      payload: { isShow: false }
    })

    return(<form className="row">
      <div className="input-field col s12 m6 l3" >
        <input id="username" type="text" className="validate" />
        <label htmlFor="username">
          Nombre de usuario
        </label>
      </div>
      <div className="input-field col s12 m6 l3" >
        <input id="name" type="text" className="validate" />
        <label htmlFor="name">
          Nombre
        </label>
      </div>
      <div className="input-field col s12 m6 l3" >
        <input id="email" type="email" className="validate" />
        <label htmlFor="email">
          Correo electronico
        </label>
      </div>
      <div className="input-field col s12 m6 l3" >
        <input id="password" type="password" className="validate" />
        <label htmlFor="password">
          Contrasena
        </label>
      </div>
      <div className="col s12 m12 l12 center-align">
        <button className="btn" type="submit">
          Enviar
        </button>
      </div>
    </form>)
  }
}

export default connect(state => state)(Profile)
