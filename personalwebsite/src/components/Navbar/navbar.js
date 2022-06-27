import React from 'react';
import {useNavigate } from "react-router-dom";
import './navbar.css'
import Logo from './../Imgs/logo_lf.png'
function Navbar() {
  const navigate = useNavigate();
  return (
  <div className='nav_size'>
    <button className='nav_button'>DESPLEGAR MENU</button>
    <nav className='nav_content'>
        <section className='nav_logo'>
            <img className='nav_logo-img' src={Logo} alt="Logo LF del navbar"/>
        </section>
        <section className='nav_links'>
            <ul>
                <li className='links_text'>
                    Presentación
                </li>
                <li className='links_text'>
                    Proyectos
                </li>
                <li className='links_text'>
                    Tecnologías
                </li>
                <li className='links_text'>
                    Contacto
                </li>
            </ul>
        </section>
        <section className='nav_socialmedia'>
            <button>
                REDES SOCIALES
            </button>
        </section>
    </nav>
  </div>
  )
}

export default Navbar 