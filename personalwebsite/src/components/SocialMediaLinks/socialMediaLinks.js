import React from 'react'
import './socialMediaLinks.css'
import LogoSM from '../LogoSM/logoSM'
function socialMediaLinks() {
  return (
    <div className='social_content'>
        <section className='social_box'>
            <LogoSM imgPath="./../Icons/icons8-js.svg" imgAlt="JavaScript"/>
        </section>
        <section className='social_box'>
            <LogoSM imgPath="./../Icons/icons8-js.svg" imgAlt="JavaScript"/>
        </section>
        <section className='social_box'>
            <LogoSM imgPath="./../Icons/icons8-js.svg" imgAlt="JavaScript"/>
        </section>
        <section className='social_box'>
            <LogoSM imgPath="./../Icons/icons8-js.svg" imgAlt="JavaScript"/>
        </section>
        <section className='social_box'>
            <LogoSM imgPath="./../Icons/icons8-js.svg" imgAlt="JavaScript"/>
        </section>
    </div>
  )
}

export default socialMediaLinks