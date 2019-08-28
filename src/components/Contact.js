import React, { Component, Fragment } from 'react'

class Contact extends Component {


  render(){
    return (
        <div className='App'>
        <div className='content'>
          <section id='Contact'>
          <Fragment>
            <h1>Paul Riverain's Contact Information</h1>
            <h3><u>Email:</u>  p.a.riverain@gmail.com</h3>
            <h3><u>Cell:</u> (914)409-5517</h3>
            <h3><u>Slack:</u>  Paul Riverain</h3>
            <h3><u>LinkedIn:</u>  <a target="_blank" href="https://www.linkedin.com/in/paul-riverain-ba5376147/" >Paul Riverain</a></h3>
            <h3><u>GitHub:</u>  <a target="_blank" href="https://github.com/paulriverain" >Paul Riverain</a></h3>
          </Fragment>
        </section>
      </div>
      </div>
    );
  }
}
export default Contact;
