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

    <div className='Bio'>


      <div className="textBio">
        <h1>About Me</h1>

        <h3>I am a Software developer/Data engineering consultant with a passion for creating optimized, user friendly applications with superior functionality and accessibility. I’m a self-motivated, continuous learner with a flexible skillset and the ability to pick-up new tasks with ease. I have vast experience working with languages and frameworks such as JavaScript, React.js, Ruby, Ruby on Rails, and other fullstack tools. In addition, I have worked with Big Data technologies like Spark, SQL, and Informatica. I’m a driven leader with an endless desire to learn, grow, and overcome obstacles.   I bring strong communication skills, ensuring excellent group cohesiveness, maximizing productivity and workflow.</h3>
      </div>

      <div className="paulBox" onPointerEnter={this.handlesShowImg} onPointerLeave={this.handlesHideImg} width="auto" height="315">

        {this.props.paulPic
          ?
            <img
              target="_blank"
              href="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/69942897_2397639260284490_4172973680579575808_n.jpg?_nc_cat=108&_nc_oc=AQkzKqEKNXAD6hAlR5N8XuEyc3miTi38ABIKlMkoavOA_srNn9I4FHLYoms0o70lois&_nc_ht=scontent-lga3-1.xx&oh=0f0c43c2cbf0e085c88d8d8003f49346&oe=5DFFA15E" className='mePic'
              src='https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-9/69942897_2397639260284490_4172973680579575808_n.jpg?_nc_cat=108&ccb=2&_nc_sid=730e14&_nc_ohc=mshOG4azcGcAX8TJP3c&_nc_ht=scontent-bos3-1.xx&oh=6d8e55a7a745ef035b70cf299a1dabe0&oe=5FF019A2' alt='Picture of Paul Riverain'
            />


          :
            <img target="_blank" href="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/69718252_2397639420284474_3902879289166528512_n.jpg?_nc_cat=101&_nc_oc=AQmcbw3uawZ76u4iPAjIxtmyHexF08ECOI8STj0PiBbjFoTQirjYyta8mkRzNy-alQI&_nc_ht=scontent-lga3-1.xx&oh=0d92b59aa972a2f9cd907fa8610cca0c&oe=5E134D71" className='mePic' src='https://scontent-bos3-1.xx.fbcdn.net/v/t1.0-9/69718252_2397639420284474_3902879289166528512_n.jpg?_nc_cat=101&ccb=2&_nc_sid=730e14&_nc_ohc=hVD37SfjQooAX_XsbYS&_nc_ht=scontent-bos3-1.xx&oh=0ea9fc1607906f43916ca29514fd11cd&oe=5FF0340F' alt='Picture of Paul Riverain in black and white'/>
          }
        </div>


    </div>

    <div className="icon">
      <a href="mailto:p.a.riverain@gmail.com" target="_top"><i className="fa fa-envelope"></i></a>
      <a target="_blank" href="https://www.linkedin.com/in/paul-riverain-ba5376147/"><i id="icon" className="fab fa-linkedin"></i></a>
      <a  target="_blank" href="https://github.com/paulriverain"><i className="fab fa-github-square"></i></a>
      <a target="_blank" href="https://learn.co/P_A_Rivers/resume" ><i className="fa fa-file-alt"></i></a>
      <a href="tel:1-914-409-5517" ><i className="fa fa-phone"></i></a>
    </div>


  </section>
</div>
    );
  }
}
export default About;
