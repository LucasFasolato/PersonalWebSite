import React from 'react'
import Navbar from '../../../../components/Navbar/navbar'
import './screenOne.css'
import ContactMeBttn from '../../../../components/ContactMeBttn/contactMeBttn'
import SocialMediaLinks from '../../../../components/SocialMediaLinks/socialMediaLinks'
import PhotoPerfil from './../../../../components/Imgs/PhotoPerfil.JPG'

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
                      <h1 className='s1_h1'>Hello</h1>
                      <h2 className='s1_h2'>I'm Lucas Fasolato</h2> 
                    </section>
                  </div> 
                  <div className='s1_desc-content'>
                    <p className='s1_desc-p'>
                      Soy un desarrollador Full Stack con orientacion al Front-end con la capacidad de desarrollar proyectos web 
                      teniendo siempre en cuenta que sean escalables y modularizables para asi poder construir en equipo.
                      Me considero un desarrollador con una logica muy avanzada y veloz. Capaz de enfrentar y resolver problemas con seriedad y disciplina. 
                      Especialmente un desarrollador con ganas de colaborar, enseñar y sobretodo aprender de los demas.
                    </p>
                  </div> 
                </div>
                
                <div className='s1_button-and-social'>
                  <div className='s1_button-content'>
                    <ContactMeBttn/>
                  </div>
                  <div className='s1_social-content'><SocialMediaLinks/> </div>
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