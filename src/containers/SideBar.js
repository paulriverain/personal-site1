import React, {  Component, Fragment } from "react";


class SideBar extends Component {



  render() {
    return (
      <Fragment>
      <div className="sideCon">

        <a href="mailto:p.a.riverain@gmail.com" target="_top"><i className="fa fa-envelope"></i></a>

        <a target="_blank" href="https://www.linkedin.com/in/paul-riverain-ba5376147/"><i id="icon" className="fab fa-linkedin"></i></a>


        <a  target="_blank" href="https://github.com/paulriverain"><i className="fab fa-github-square"></i></a>

        <a target="_blank" href="https://learn.co/P_A_Rivers/resume" ><i className="fa fa-file-alt"></i></a>

        <a href="tel:1-914-409-5517" ><i className="fa fa-phone"></i></a>

      </div>
      
      </Fragment>
    )
  }
}
export default SideBar
