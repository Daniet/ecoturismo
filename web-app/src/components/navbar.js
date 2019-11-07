import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// redux
import store from '../redux/store'
import { connect } from 'react-redux'

class NavBar extends Component{

  constructor(props){
    super(props)
    this.state = store.getState()
    // this.list_menu = this.state.menu.map((item, key)=>{return(<li>
    //   <Link to={ item.url } key={ key } className="sidenav-close">
    //     { item.name }
    //   </Link>
    // </li>)})
  }

  render(){
    return(<>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">
              Eco Alertas
            </a>
            <ul className="right hide-on-med-and-down">
              { this.list_menu }
            </ul>
          </div>
        </nav>
      </div>
      <div>
        <ul id="slide-out" className="sidenav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src="" />
              </div>
              <Link to="">
                <img className="circle" src="" />
              </Link>
              <Link to="">
                <span className="white-text name">
                  Name
                </span>
              </Link>
              <Link to="">
                <span className="white-text email">
                  correo@correo.com
                </span>
              </Link>
            </div>
          </li>
          { /* this.list_menu */ }
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <Link to="" className="subheader">Subheader</Link>
          </li>
          <li>
            <Link to="" className="waves-effect">Third Link With Waves </Link>
          </li >
        </ul>
      </div>
    </>)
  }
}

export default connect(state => state)(NavBar);
