import React, { Component, Fragment } from 'react'

class Footer extends Component {


  render(){
    return (
        <div className='App'>
          <div className='footer'>

            <div className="footInfo">
              <u> Email: </u> <a href="mailto:p.a.riverain@gmail.com" target="_top">p.a.riverain@gmail.com</a>
            </div>

            <div className="footInfo">
              <u> Cell: </u> <a href="tel:1-914-409-5517" >(914)409-5517</a>
            </div>

            <div className="footInfo">
              <u> LinkedIn:</u> <a target="_blank" href="https://www.linkedin.com/in/paul-riverain-ba5376147/" >Paul Riverain</a>
            </div>

            <div className="footInfo">
              <u> GitHub: </u>  <a target="_blank" href="https://github.com/paulriverain" >Paul Riverain</a>
            </div>

        </div>
      </div>
    );
  }
}
export default Footer;
