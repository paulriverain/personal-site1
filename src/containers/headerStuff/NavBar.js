import React, { Component, Fragment } from 'react'

class NavBar extends Component {

  render(){

    return (
      <Fragment>
        <ul>
          <li className='name'><a onClick={this.handleAbout} href="#Header">Paul Riverain</a></li>
          <li><a onClick={this.handleContact} href="#Contact">Contact</a></li>
          <li><a onClick={this.handleProject} href="#Projects">Projects</a></li>
          <li><a onClick={this.handleAbout} href="#About">About</a></li>
        </ul>


      </Fragment>
    );
  }
}
export default NavBar;
