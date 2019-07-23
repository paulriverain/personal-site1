import React, { Component, Fragment } from 'react'




class NavBar extends Component {
handleAbout = () =>{

}
handleProject = () =>{

}
handleContact = () =>{

}

  render(){

    return (
      <Fragment>
        <ul>
          <li className='name'><a onClick={this.handleAbout} href="#About">Paul Riverain</a></li>
          <li><a onClick={this.handleProject} href="#Projects">Projects</a></li>
          <li><a onClick={this.handleContact} href="#Contact">Contact</a></li>
          <li><a onClick={this.handleAbout} href="#About">About</a></li>
        </ul>


      </Fragment>
    );
  }
}
export default NavBar;
