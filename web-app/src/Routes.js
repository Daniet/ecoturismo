// react
import React from 'react'
import {
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom'
// redux
import { Provider } from 'react-redux'
import store from './redux/store'
// marco de componentes
import NavBar from './components/navbar'
import Controller from './components/controller';
// componentes de pagina
import Home from './components/home'
import Rooms from './components/rooms'
import Devices from './components/devices'
import Profile from './components/profile'

const Routes = () => {
  // const store = createStore(rootReducer)
  return(<Provider store={ store }>
    <Router>
      <NavBar />
      <Controller/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/rooms" component={ Rooms } />
          <Route path="/devices" component={ Devices } />
          <Route path="/profile" component={ Profile} />
        </Switch>
      </div>
    </Router>
  </Provider>)
}

export default Routes;
