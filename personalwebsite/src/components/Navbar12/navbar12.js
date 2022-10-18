import React from 'react';
import {useNavigate } from "react-router-dom";
import './navbar.css'
import SocialMediaLinks from '../SocialMediaLinks/socialMediaLinks'
import Logo from './../Imgs/logo_lf.png'
function Navbar() {
  const navigate = useNavigate();
  return (
  <div className='nav_size'>
    <button className='nav_button'>DESPLEGAR MENU</button>
    <nav className='nav_content'>
        <section className='nav_logo' onClick={() => {navigate("/home")}}>
            <img className='nav_logo-img' src={Logo} alt="Logo LF del navbar"/>
        </section>
        <section className='nav_links'>
            <ul>
                <li className='links_text'>
                    About me
                </li>
                <li className='links_text' onClick={() => {navigate("#s2")}}>
                    Proyects
                </li>
                <li className='links_text'>
                    Techs
                </li>
                <li className='links_text' onClick={() => {navigate("/contact")}}>
                    Contact
                </li>
            </ul>
        </section>
        <section className='nav_socialmedia'>
            <SocialMediaLinks/> 
        </section>
    </nav>
  </div>
  )
}

export default Navbar 