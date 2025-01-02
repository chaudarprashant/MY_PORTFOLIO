import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
<>
       <div className='container project' id='projects'>
       <h2 className='col-12 mt-3 mb-1 text-center'>TOP RECENT PROJECTS</h2>
         <hr />
         <p className='pb-3 text-center'>
            👉 I’ve worked on several projects using the MERN stack, including an Employee
             Management System, a personal portfolio website, a weather app, and a Sign-up/Sign-in
              login page. These projects involved creating dynamic and user-friendly interfaces
               with React.js, managing databases with MongoDB, and building efficient backend 
               services with Express.js and Node.js.

          Through these projects, I’ve gained hands-on experience in solving real-world challenges, 
          building scalable applications, and applying modern development practices. Each project 
          has helped me sharpen my technical skills and deepen my understanding of full-stack web 
          development.
         </p>
        {/*card design*/ }
         <div className='row' id='ads'>

         <div className='col-md-4'>
                 <div className='card rounded'>
                    <div className='card-image'>
                           <span className='card-notify-badge'>Full stack</span>
                           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0g9EuhNIiPdBQPSa-1McCLCYXBYzDPL8cQ&s" alt="project1" />
                    </div>

                    <div className='card-image-overly m-auto'>
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>Express</span>
                        <span className='card-detail-badge'>react</span>
                        <span className='card-detail-badge'>MongoDB</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>
                                  Employee Management System
                            </h5>
                        </div>
                        <a className='ad-btn' href="#">View</a>
                    </div>


                 </div>
             </div>


             <div className='col-md-4'>
                 <div className='card rounded'>
                    <div className='card-image'>
                           <span className='card-notify-badge'>Full stack</span>
                           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0g9EuhNIiPdBQPSa-1McCLCYXBYzDPL8cQ&s" alt="project1" />
                    </div>

                    <div className='card-image-overly m-auto'>
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>Express</span>
                        <span className='card-detail-badge'>react</span>
                        <span className='card-detail-badge'>MongoDB</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>
                                  Sign-up,Sign page with forget password functionality
                            </h5>
                        </div>
                        <a className='ad-btn' href="#">View</a>
                    </div>


                 </div>
             </div>

             
             <div className='col-md-4'>
                 <div className='card rounded'>
                    <div className='card-image'>
                           <span className='card-notify-badge'>React Js</span>
                           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0g9EuhNIiPdBQPSa-1McCLCYXBYzDPL8cQ&s" alt="project1" />
                    </div>

                    <div className='card-image-overly m-auto'>
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>Express</span>
                        <span className='card-detail-badge'>react</span>
                        <span className='card-detail-badge'>MongoDB</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>
                                  Weather-App
                            </h5>
                        </div>
                        <a className='ad-btn' href="#">View</a>
                    </div>


                 </div>
             </div>

             


             <div className='col-md-4'>
                 <div className='card rounded'>
                    <div className='card-image'>
                           <span className='card-notify-badge'>React Js</span>
                           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0g9EuhNIiPdBQPSa-1McCLCYXBYzDPL8cQ&s" alt="project1" />
                    </div>

                    <div className='card-image-overly m-auto'>
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>Express</span>
                        <span className='card-detail-badge'>react</span>
                        <span className='card-detail-badge'>MongoDB</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>
                                  Netflix clone in react js
                            </h5>
                        </div>
                        <a className='ad-btn' href="#">View</a>
                    </div>


                 </div>
             </div>

             {/**/}
         </div>
       </div>
</>
  )
}

export default Projects
//9(7)