import React from 'react'
import ContactMeBttn from '../../../../components/ContactMeBttn/contactMeBttn'
import Footer from '../../../../components/Footer/footer'
import './screenFour.css'
function screenFour() {
  return (
    <div className='s4_size' id='s4'>
      <div className='s4_content'>
        <section className='s4_section'>
          <h1 className='s4_h1'>¡Trabajemos juntos!</h1>
          <p className='s4_p'>
            
          </p>
          <div className='s4_button'>
            <ContactMeBttn/>
          </div>
        </section>
      </div>
      <div className='s4_footer'>
        <Footer/>
      </div>
     
    </div>
  )
}

export default screenFour