import React from 'react'
import './footer.css'
import SocialMediaLinks from '../SocialMediaLinks/socialMediaLinks'
import Logo from './../Imgs/logo_lf.png'
function Footer() {
  return (
    <div className='footer_size'>
        <section className='footer_content'>
            <section className='footer_area footer_logo'>
                <img className='footer_logo-img' src={Logo} alt="Logo LF del navbar"/>
            </section>
            <section className='footer_area footer_terms'>
                <p>© 2022 Todos los derechos reservados.</p>
            </section>
            <section className='footer_area footer_sm'>
                <SocialMediaLinks/>
            </section>
        </section>
    </div>
  )
}

export default Footer