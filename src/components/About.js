import React, { Component, Fragment } from 'react'

class About extends Component {


  render(){
    return (
      <div className='App'>

      <br />
      <img className='mePic' src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/67757075_2320884277959989_1244367843739303936_n.jpg?_nc_cat=110&_nc_oc=AQn_ExbeM1lVnyM3_zArkE7_BQ27CoIw4xww0cAc7BIRm4rHTPDbD89gsk7Wo7ydJek&_nc_ht=scontent-lga3-1.xx&oh=9e6c6aa9ee5a53b633eb1f873af395aa&oe=5DB60039' width="220" height="400" alt='Picture of Paul Riverain standing on the shore in providence rhode island'/>

        <div className='Bio'>
        <h1> Hello </h1>
        <h4>I am a full stack web developer with a passion for creating optimized, user friendly web applications with superior functionality and accessibility. I'm a driven leader with an endless desire to learn, grow, and overcome obstacles.  I have experience working with JavaScript, React.js, Ruby, Ruby on Rails, ActiveRecord, Sinatra, SQL, HTML and CSS. I bring strong communication and leadership skills, ensuring excellent group cohesiveness, maximizing productivity and workflow.</h4>
        </div>
      </div>
    );
  }
}
export default About;
