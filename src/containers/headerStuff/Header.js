import React, { Component, Fragment } from 'react'
import NavBar from './NavBar'

class Header extends Component {


  render(){
    return (
      <Fragment>
        <div className='App-header'>
          <div className='logo'>
            <h1> Paul's Site </h1>
          </div>
        </div>
        <NavBar/>
      </Fragment>
    );
  }
}
export default Header;
