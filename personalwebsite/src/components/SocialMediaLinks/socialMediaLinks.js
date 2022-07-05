import React from 'react'
import './socialMediaLinks.css'
import LogoSM from '../LogoSM/logoSM'
function socialMediaLinks() {
  return (
    <div className='social_content'>
        <section className='social_box'>
            <LogoSM nameLogo="Facebook" imgAlt="Facebook logo"/>
        </section>
        <section className='social_box'>
            <LogoSM nameLogo="Instagram" imgAlt="Instagram logo"/>
        </section>
        <section className='social_box'>
            <LogoSM nameLogo="Twitter" imgAlt="Twitter logo"/>
        </section>
        <section className='social_box'>
            <LogoSM nameLogo="Linkedin" imgAlt="Linkedin logo"/>
        </section>
        <section className='social_box'>
            <LogoSM nameLogo="Github" imgAlt="Github logo"/>
        </section>
    </div>
  )
}

export default socialMediaLinks