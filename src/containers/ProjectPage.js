import React, { Component, Fragment } from 'react'
import styled, { keyframes } from "styled-components";


class ProjectPage extends Component {



  render(){
    return (

        <div className="projects">
          <section id='Projects'>

            <div className="projectGroup">
              <h1>My Projects</h1>


              <div className='projectCard'>
                <h2>Language Ladder</h2>
                <a target="_blank" href="https://www.youtube.com/watch?v=_a73TgHXshc&feature=youtu.be"><img src='https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-9/67193583_2320895114625572_4146585796649943040_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=sRWD4U6KgmYAX_0j7EM&_nc_ht=scontent-bos3-1.xx&oh=b0e31a12e7ac713a35420e93341725bb&oe=5FEEE4C0'/></a>
                <h5><a target="_blank" href="https://www.youtube.com/watch?v=_a73TgHXshc&feature=youtu.be">Language Ladder</a> is an interactive single-page Translator site that enables users to climb over any language barriers they encounter.</h5>
              </div>

              <div className='projectCard'>
                <h2>Rate My Instructor  (<a target="_blank" href="https://rate-my-instructor-frontend.herokuapp.com/">Demo</a>)</h2>
                <a target="_blank" href="https://www.youtube.com/watch?v=8ZFzV62FAq8&feature=youtu.be"><img src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-9/67580026_2320895321292218_5294043948237455360_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=pVqISbD8CTkAX_2ud7Z&_nc_ht=scontent-bos3-1.xx&oh=1e6f9b860a35a2ebec9dc1251f013573&oe=5FF08F08"/></a>
                <h5><a target="_blank" href="https://www.youtube.com/watch?v=8ZFzV62FAq8&feature=youtu.be">Rate My Instructor</a> is a feature packed application that gives students the power to rate and comment on their software bootcamp instructors.</h5>
              </div>

              <div className='projectCard'>
                <h2>Riverain Recreation</h2>
                <a target="_blank" href="https://www.youtube.com/watch?v=mfflU4s5Xlk&feature=youtu.be"><img src="https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-9/67406968_2320895864625497_2303177105833197568_o.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=mGjvkoBW5z4AX8t2L5s&_nc_ht=scontent-bos3-1.xx&oh=609fef68d3b63686a7afb9dedc9e0efa&oe=5FEE2135"/></a>
                <h5><a target="_blank" href="https://www.youtube.com/watch?v=mfflU4s5Xlk&feature=youtu.be">Riverain Recreation</a> is a Ruby on Rails monolithic application for adventurous individuals looking to reserve spots on posted recreational trips.</h5>
              </div>
            </div>
          </section>
        </div>
    );
  }
}
export default ProjectPage;
