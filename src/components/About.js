import React, { Component, Fragment } from 'react'

class About extends Component {

  // <iframe className='containers ui' width="auto" height="315" src="https://www.youtube.com/embed/TYyUvMjWtNM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



handlesShowImg = () =>{
  this.props.handleChangePic()

}
handlesHideImg= () =>{
  this.props.handleChangePic()
}


  render(){

    return (
      <div className='App'>
      <section id='About'>
      <br /><br /><br />
      <div className='Bio'>


          <div className="textBio">
            <h1>Paul Riverain</h1>

            <h4>I am a full stack web developer with a passion for creating optimized, user friendly web applications with superior functionality and accessibility.  I'm a driven leader with an endless desire to learn, grow, and overcome obstacles.  I have experience working with JavaScript, React.js, Ruby, Ruby on Rails, ActiveRecord, Sinatra, SQL, HTML and CSS.  I bring strong communication and leadership skills, ensuring excellent group cohesiveness, maximizing productivity and workflow.</h4><br />

            <div className="icon">
              <a target="_blank" href="https://www.linkedin.com/in/paul-riverain-ba5376147/"><i id="icon" className="fab fa-linkedin"></i></a>

              <a  target="_blank" href="https://github.com/paulriverain"><i className="fab fa-github-square"></i></a>

              <a target="_blank" href="https://learn.co/P_A_Rivers/resume" ><i className="fas fa-file-alt"></i></a>
            </div>


          </div>

  <div className="paulBox" onPointerEnter={this.handlesShowImg} onPointerLeave={this.handlesHideImg} width="auto" height="315">
    {this.props.paulPic
      ?
          <img target="_blank" href="https://lh5.googleusercontent.com/VeuoJw03derr0cb-nBzuEPuDY0E8LPjUKC5tOt6UQZwOZbkZAsoAFxhwEeaScYAOpsGdjL8Wa5day1yT4blnPR6hGnaCLUtVNPOolXzJ" className='mePic' src='https://lh5.googleusercontent.com/VeuoJw03derr0cb-nBzuEPuDY0E8LPjUKC5tOt6UQZwOZbkZAsoAFxhwEeaScYAOpsGdjL8Wa5day1yT4blnPR6hGnaCLUtVNPOolXzJ' alt='Picture of Paul Riverain'/>
      :
          <img target="_blank" href="https://keep.google.com/u/0/media/v2/16JMGi9mhLcHfEC_C9R0NrpNP6HmqbuzewR0aVYIY8Vg9IqsrBP7pfgQMGNHUc_pB/1uHw0YWgKbYzp-cVP_BCPKFwdGweq2RimeiT2n4_YGV_91NOkdYSGG20y0uacLA1e?accept=image/gif,image/jpeg,image/jpg,image/png,image/webp,audio/aac&sz=398" className='mePic' src='https://lh6.googleusercontent.com/asz_5xVSfYaQjeOONm5GxBT0OqYS_Z95Wf8GUrBefu-BfK4FGyEGhWIEtoFuLfqCuQsPSJPLFSbKRvFgz9CQZ8TFpDA8RU6rtbRTbATX' alt='Picture of Paul Riverain in black and white'/>
    }
  </div>

        </div>
        </section>
      </div>
    );
  }
}
export default About;
