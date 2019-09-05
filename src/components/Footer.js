import React, { Component, Fragment } from 'react'

class Footer extends Component {


  render(){
    return (
        <div className='App'>
          <div className='footer'>
          <Fragment>

          <p><u> Email: </u> <a href="p.a.riverain@gmail.com" >p.a.riverain@gmail.com</a> ||

          <u> Cell: </u> <a href="tel:1-914-409-5517" >(914)409-5517</a> ||


          <u> Slack: </u>  Paul Riverain ||

          <u> LinkedIn:</u> <a target="_blank" href="https://www.linkedin.com/in/paul-riverain-ba5376147/" >Paul Riverain</a> ||

          <u> GitHub: </u>  <a target="_blank" href="https://github.com/paulriverain" >Paul Riverain</a></p>
          </Fragment>
        </div>
      </div>
    );
  }
}
export default Footer;
