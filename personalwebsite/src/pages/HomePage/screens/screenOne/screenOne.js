import React from 'react'
import Navbar from '../../../../components/Navbar/navbar'
import './screenOne.css'
import ContactMeBttn from '../../../../components/ContactMeBttn/contactMeBttn'
import SocialMediaLinks from '../../../../components/SocialMediaLinks/socialMediaLinks'
import PhotoPerfil from './../../../../components/Imgs/PhotoPerfil.png'

function screenOne() {
  return (
    <div className='s1_size'>
        <Navbar/>
        <div className='s1_content'>
            <div className='s1_left'>
              <div className='s1_left-content'>
                <div className='s1_name-and-desc'>
                  <div className='s1_name-content'>
                    <section className='s1_name-section'>
                      <h3 className='s1_h3'>Hello, I'm</h3>
                      <h2 className='s1_h2'>Lucas Fasolato</h2>                      
                      <h1 className='s1_h1'>Full Stack Developer</h1> 
                    </section>
                  </div> 
                  <div className='s1_desc-content'>
                    <p className='s1_desc-p'>
                      I am a Full Stack developer with a Front-end orientation with the ability to develop web projects 
                      always keeping in mind that they are scalable and modularizable to build as a team.
                      <span className='s1_desc-span'>
                        I consider myself a developer with very advanced and fast logic. 
                        Able to face and solve problems with seriousness and discipline. 
                        Especially a developer who wants to collaborate, teach and above all learn from others.
                      </span>
                    </p>
                  </div> 
                </div>
                
                <div className='s1_button-and-social'>
                  <div className='s1_button-content'>
                    <ContactMeBttn/>
                  </div>
                  <div className='s1_social-content'>
                    <SocialMediaLinks/> 
                  </div>
                </div>
              </div>
            </div>
                
            <div className='s1_right'>
                <div className='s1_img-content'>
                  <img className='s1_img' src={PhotoPerfil} alt="Imagen presentaciòn Lucas Fasolato"/>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default screenOne