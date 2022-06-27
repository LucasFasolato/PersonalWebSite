import React from 'react'
import ContactMeBttn from '../../../../components/ContactMeBttn/contactMeBttn'
import Footer from '../../../../components/Footer/footer'
import './screenFour.css'
function screenFour() {
  return (
    <div className='s4_size'>
      <div className='s4_content'>
        <section className='s4_section'>
          <h1 className='s4_h1'>Lets work together!</h1>
          <p className='s4_p'>
            The technological revolution is changing aspect of our lives, and the fabric of society itself. 
            It's also changing the way we learn and what we learn
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