import React from 'react'
import './Contact.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <div className='container contact' id='contacts'>

        <div className='card card0 border-0'>
        <div className='row'>
                <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
              
                    <div className='card1'>
                        <div className='row border-line'>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeWdju9nvb89mkhcgPgQTiRrWjESS1hZ2yIw&s" alt="contact img" className='image' />
                        </div>
                    </div>

                </div>

                {}
                <div className='col-lg-6 col-md-6'>
                   
                    <div className='card2 d-flex card border-0 px-4 py-5'>
                    <div className='row'>
                      <div className='row'>

                      <h6>Contact with  : 
                      <FaLinkedin size={30} className='ms-2'/>
                      <FaGithubSquare size={30} className='ms-2'/>
                      <FaFacebookSquare size={30} className='ms-2'/>
                      <FaInstagramSquare size={30} className='ms-2'/>

                      </h6>
                      </div>

                     <div className='row px-3 mb-4'>
                           <div className='line'/>
                               <small className='or text-center'>OR</small>
                               <div className='line'/>
                     </div>

                     <div className='row px-3'>
                          <input type="text"
                            name='name'
                            placeholder='write your name'
                            className='mb-3'
                             />
                     </div>
                     <div className='row px-3'>
                          <input type="email"
                            name='email'
                            placeholder='write your email'
                            className='mb-3'
                             />
                     </div>
                     <div className='row px-3'>
                          <textarea type="text"
                            name='msg'
                            placeholder='write your massege'
                            className='mb-3'
                             />
                     </div>
                     <div className='row px-3'>
                         <button className='button' type='submit'>SEND MSG</button>
                     </div>
                    </div>
                </div>{}
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Contact
