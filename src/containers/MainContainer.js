import React, { Component, Fragment } from 'react'
import Header from './headerStuff/Header'
import ProjectPage from './ProjectPage'
import 'semantic-ui/dist/semantic.min.css';
import About from '../components/About.js'
import Contact from '../components/Contact.js'
import Footer from '../components/Footer.js'
import LoadDot from './LoadDot.js'
import SideBar from './SideBar.js'



class MainContainer extends Component {
  state = {
    paulPic: false,

    loadSet: false
  }

handleChangePic = () =>{
  this.setState({paulPic: !this.state.paulPic})
}

handlesLoadState = () =>{
  setTimeout(() => {
    this.setState({loadSet: true})
  }, 6000);
}

  render(){

    return (
      <div className="App">
        {this.state.loadSet ?
          null
        :
          <LoadDot handlesLoad={this.handlesLoadState()}/>

        }

        <Header/>

        <SideBar/>

        <About paulPic={this.state.paulPic} handleChangePic={this.handleChangePic}/>


        <ProjectPage/>

        <Contact/>

        <Footer/>


      </div>
    );
  }
}
export default MainContainer;
