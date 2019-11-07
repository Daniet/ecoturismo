import React, { Component } from 'react';
// importando libreria materlize e iconos
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import * as M from 'materialize-css/dist/js/materialize.min'
// estilo en general
import './App.scss';

import Routes from './Routes'

class App extends Component {

  componentDidMount(){
    M.AutoInit()
  }

  render(){
    return (<>
      <Routes />
    </>);
  }
}

export default App;
