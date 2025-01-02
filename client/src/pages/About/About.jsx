import React from 'react'
import './About.css'

const About = () => {
  return (
   <>
       <div className='about' id='abouts'>
          <div className='row'>
             <div className='col-md-6 col-lg-6 col-xs-12 about-img'>
              <img src="passportSizepic.jpg" 
              alt="profile_pic" />
             </div>
              <div className='col-md-6 about-content' >
                <h1>About Me</h1>
                <p>
                I am a third-year IT student at DY Patil College of Engineering,
                 Akurdi, with strong skills in full-stack web development, 
                 particularly using the MERN stack (MongoDB, Express.js, 
                 React.js, Node.js). I enjoy designing and building user-friendly, 
                 scalable web applications and tackling technical challenges with 
                 effective problem-solving abilities.

                Currently, I’m working on an Employee Management System project
                 to enhance my practical skills in web development. I’ve also 
                 applied for a mobile app development project to expand my 
                  expertise beyond web technologies.

                My passion for technology drives me to stay updated with the 
                latest trends and continuously improve my knowledge. I actively
                 seek opportunities to work on impactful projects that allow me
                to learn, grow, and make meaningful contributions to the field
                 of software development.
                </p>
              </div>
          </div>
       </div>
   </>
  )
}

export default About
