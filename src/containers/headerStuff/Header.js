import React, { Component, Fragment } from 'react'
import NavBar from './NavBar'

class Header extends Component {


  render(){
    return (
      <Fragment>
      <section id="Header">
        <div className='App-header'>
          <div className='logo'>
            <h1>∇ PAUL RIVERAIN ∇</h1>
            
          </div>
        </div>
        </section>
        <NavBar/>
      </Fragment>
    );
  }
}
export default Header;
