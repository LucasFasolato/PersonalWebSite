import React from 'react'
import './logoSM.css'
import Instagram from './../Icons/icons8-instagram.svg'
import Twitter from './../Icons/icons8-twitter-white.svg'
import Linkedin from './../Icons/icons8-linkedin-white.svg'
import Github from './../Icons/icons8-github-white.svg'
import Facebook from './../Icons/icons8-facebook.svg'
import Default from './../Icons/icons8-flutter-dark.svg'
function logoSM(props) {

  if (props.nameLogo === "default") {
    return (
    <div className='logo_content'>
      <a href="https://www.facebook.com/lucas.faso.9" target="_blank" rel="noreferrer">
        <button className='logo_button' id='logo_button'>
            <img className='logo_img' src={Default} alt={props.imgAlt}/>
        </button>
      </a>
    </div>
  )
  } else if (props.nameLogo === "Twitter") {
    return (
    <div className='logo_content'>
      <a href="https://twitter.com/LucasFasolato" target="_blank" rel="noreferrer">
        <button className='logo_button' id='logo_button'>
            <img className='logo_img' src={Twitter} alt={props.imgAlt}/>
        </button>
      </a>
    </div>
  )
  } else if (props.nameLogo === "Linkedin") {
    return (
    <div className='logo_content'>
      <a href="https://www.linkedin.com/in/lucasfasolato/" target="_blank" rel="noreferrer">
        <button className='logo_button' id='logo_button'>
            <img className='logo_img' src={Linkedin} alt={props.imgAlt}/>
        </button>
      </a>
    </div>
  )
  } else if (props.nameLogo === "Github") {
    return (
    <div className='logo_content'>
      <a href="https://github.com/LucasFasolato" target="_blank" rel="noreferrer">
        <button className='logo_button' id='logo_button'>
            <img className='logo_img' src={Github} alt={props.imgAlt}/>
        </button>
      </a>
    </div>
  )

  } else if (props.nameLogo === "Facebook") {
    return (
    <div className='logo_content'>
      <a href="https://www.facebook.com/lucas.faso.9" target="_blank" rel="noreferrer">
        <button className='logo_button' id='logo_button'>
            <img className='logo_img' src={Facebook} alt={props.imgAlt}/>
        </button>
      </a>
    </div>
  )

  } else if (props.nameLogo === "Instagram") {
    return(
      <div className='logo_content'>
          <a href="https://www.instagram.com/lucasfasolato/" target="_blank" rel="noreferrer">
            <button className='logo_button' id='logo_button'>
              <img className='logo_img' src= {Instagram} alt={props.imgAlt}/>
            </button>
          </a>
      </div>
    )
    }
}

export default logoSM