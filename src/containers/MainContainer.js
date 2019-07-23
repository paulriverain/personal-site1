import React, { Component, Fragment } from 'react'
import Header from './headerStuff/Header'
import ProjectPage from './ProjectPage'
import 'semantic-ui/dist/semantic.min.css';
import About from '../components/About.js'
import Contact from '../components/Contact.js'


class MainContainer extends Component {


  render(){
    return (
      <div >
        <Header/>

        <About/>

        <ProjectPage/>

        <Contact/>
      </div>
    );
  }
}
export default MainContainer;
