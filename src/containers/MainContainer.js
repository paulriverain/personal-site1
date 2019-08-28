import React, { Component, Fragment } from 'react'
import Header from './headerStuff/Header'
import ProjectPage from './ProjectPage'
import 'semantic-ui/dist/semantic.min.css';
import About from '../components/About.js'
import Contact from '../components/Contact.js'
import Footer from '../components/Footer.js'

import '../logo.scss';

class MainContainer extends Component {
  state = {
    paulPic: false
  }

handleChangePic = () =>{
  this.setState({paulPic: !this.state.paulPic})
}


  render(){
    return (
      <div className="App">
        <Header/>

        <About paulPic={this.state.paulPic} handleChangePic={this.handleChangePic}/>


        <ProjectPage/>

        <Contact/>

        <Footer/>
      </div>
    );
  }
}
export default MainContainer;
