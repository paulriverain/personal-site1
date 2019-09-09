import React, { Component, Fragment } from 'react'
import NavBar from './NavBar'
import Particles from './particles.js'

class Header extends Component {


  render(){

    window.onload = function() {
      Particles.init({
        selector: '.weirdBackground'
      });
    };

    return (
      <Fragment>
      <section id="Header">


        <div className='App-header'>
          <div className='logo'>

            <h1>∇ PAUL RIVERAIN ∇</h1>

          </div>

          <div className='logoStuf'>
            <canvas className="weirdBackground" src="path/to/particles.min.js"></canvas>
          </div>
        </div>

        </section>
        <NavBar/>
      </Fragment>
    );
  }
}
export default Header;
