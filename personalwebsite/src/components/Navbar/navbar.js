/* eslint-disable no-undef */
import React, { useState } from "react";
import Logo from "./../Imgs/logo_lf.png";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import MenuBurger from "./menu-burger.png";
import SocialMediaLinks from "../SocialMediaLinks/socialMediaLinks";

function Navbar() {
  const navigate = useNavigate();
  const [activation, setActivation] = useState(false);
  var className = activation ? "show_content" : "nav_content";

  return (
    <div className="nav_size">
      <nav className={className} id="nav_content">
        <section
          className="nav_logo"
          onClick={() => {
            navigate("/home");
          }}
        >
          <img className="nav_logo-img" src={Logo} alt="Logo LF del navbar" />
        </section>
        <section
          className="nav_links"
          onClick={() => {
            navigate("/home");
            setActivation(false);
          }}
        >
          <ul>
            <li
              className="links_text"
              onClick={() => {
                navigate("/home");
                setActivation(false);
              }}
            >
              <a href="#sobremi" className="a_link">
                SOBRE MI
              </a>
            </li>
            <li
              className="links_text"
              onClick={() => {
                setActivation(false);
              }}
            >
              <a href="#proyectos" className="a_link">
                PROYECTOS
              </a>
            </li>
            <li
              className="links_text"
              onClick={() => {
                navigate("/home");
                setActivation(false);
              }}
            >
              <a href="#tecnologias" className="a_link">
                TECNOLOGIAS
              </a>
            </li>
            <li
              className="links_text"
              onClick={() => {
                navigate("/contact");
                setActivation(false);
              }}
            >
              <a
                href="https://linktr.ee/lucasfasolato"
                target="_blank"
                className="a_link"
                rel="noreferrer"
              >
                CONTACTO
              </a>
            </li>
          </ul>
        </section>
        <section className="nav_socialmedia">
           <div className="nav_socialmedia-content">
          <SocialMediaLinks /></div>
        </section>
      </nav>
      <div
        className="burger_bttn"
        onClick={() =>
          activation ? setActivation(false) : setActivation(true)
        }
      >
        <div className="burger_img">
          <img src={MenuBurger} alt="burger button" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
