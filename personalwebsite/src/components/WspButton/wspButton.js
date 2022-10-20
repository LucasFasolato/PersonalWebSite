import React from 'react';
import './wspButton.css';
import wspLogo from './wspLogo.png'

  
function WspButton() {
  return (
    <a href='https://api.whatsapp.com/send?phone=543412619090' className='wspButton' target='_blank' data-aos="fade-in"data-aos-duration="300">
        <img src={wspLogo} alt='Logo de WhatsApp' className='wspImg'/>
    </a>
  )
}

export default WspButton