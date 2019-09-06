import React, { Component, Fragment } from 'react'

class Contact extends Component {


  render(){
    return (
        <div className='App'>
        <div className='content'>
          <section id='Contact'>
          <Fragment>
            <h1>Contact Information</h1>


            <div className="contactInfo">
              <div className="grid-item">
                <h3><u>Email:</u></h3>
              </div>

              <div className="grid-item">
                <a href="mailto:p.a.riverain@gmail.com" target="_top">p.a.riverain@gmail.com</a>
              </div>

              <div className="grid-item">
                <h3><u>Cell:</u></h3>
              </div>

              <div className="grid-item">
                <a href="tel:1-914-409-5517" >(914)409-5517</a>
              </div>

              <div className="grid-item">
                <h3><u>LinkedIn:</u></h3>
              </div>

              <div className="grid-item">
                <a target="_blank" href="https://www.linkedin.com/in/paul-riverain-ba5376147/" >Paul Riverain</a>
              </div>

              <div className="grid-item">
                <h3><u>GitHub:</u></h3>
              </div>

              <div className="grid-item">
                <a target="_blank" href="https://github.com/paulriverain" >Paul Riverain</a>
              </div>

            </div>



          </Fragment>
        </section>
      </div>
      </div>
    );
  }
}
export default Contact;
