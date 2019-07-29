import React, { Component, Fragment } from 'react'

class About extends Component {


  render(){
    return (
      <div className='App'>


      <div className='Bio'>

      <iframe className='containers ui' width="auto" height="315" src="https://www.youtube.com/embed/TYyUvMjWtNM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <div className="textBio">
            <h1 className="header ui">Paul Riverain</h1>

            <p>I am a full stack web developer with a passion for creating optimized, user friendly web applications with superior functionality and accessibility.  I'm a driven leader with an endless desire to learn, grow, and overcome obstacles.  I have experience working with JavaScript, React.js, Ruby, Ruby on Rails, ActiveRecord, Sinatra, SQL, HTML and CSS.  I bring strong communication and leadership skills, ensuring excellent group cohesiveness, maximizing productivity and workflow.</p>
            <button className="primary button ui">LinkedIn</button>
            <button className="button ui">GitHub</button>
            <button className="primary button ui">Resume</button>
          </div>

  <img className='mePic' src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/67757075_2320884277959989_1244367843739303936_n.jpg?_nc_cat=110&_nc_oc=AQn_ExbeM1lVnyM3_zArkE7_BQ27CoIw4xww0cAc7BIRm4rHTPDbD89gsk7Wo7ydJek&_nc_ht=scontent-lga3-1.xx&oh=9e6c6aa9ee5a53b633eb1f873af395aa&oe=5DB60039' width="auto" height="315" alt='Picture of Paul Riverain standing on the shore in providence rhode island'/>

        </div>
      </div>
    );
  }
}
export default About;
