import React from "react";
import Navbar from "../../../../components/Navbar/navbar";
import "./screenOne.css";
import KnowMoreBttn from "../../../../components/KnowMoreBttn/knowMoreBttn";
import FantasmitaReact from "./../../../../components/Imgs/react-blanco__.png";

function screenOne() {
  return (
    <div className="s1_size">
      <Navbar />
      <div className="s1_content" id="sobremi">
        <div className="s1_left">
          <div className="s1_content-box">
            <div
              className="s1_name-and-desc"
              data-aos="zoom-in-right"
              data-aos-duration="500"
            >
              <div className="s1_name-content">
                <h3 className="s1_h3">¡Hola! Mi nombre es</h3>
                <h2 className="s1_h2">LUCAS FASOLATO</h2>
                <h1 className="s1_h1">Desarrollador Full Stack</h1>
                {/* <h1 className="s1_h1">DESARROLLADOR FULL STACK</h1> */}
              </div>
              <div className="s1_desc-content">
                <p className="s1_desc-p">
                  {/* Actualmente trabajo como desarrollador Full Stack Jr en LBO SA
                  y desarrollo proyectos como Freelancer.  */}
                  {/* Los frameworks que más utilizo son React JS para el desarrollo
                  frontend y Django (Python) ó Nest JS (Javascript) para el
                  desarrollo backend. Priorizo la escalabilidad y las buenas
                  prácticas en todos mis proyectos.  */}
                  Trabajo con React JS para el desarrollo frontend y Django
                  (Python) ó Nest JS (Javascript) para el desarrollo backend.
                  <span className="s1_desc-span">
                    {/* Trabajo a diario en mejorar mis habilidades y lógica a la
                    hora de programar. */}
                  </span>
                </p>
              </div>
            </div>

            <div
              className="s1_button-and-social"
              data-aos="flip-right"
              data-aos-anchor-placement="bottom-bottom"
              data-aos-duration="400"
              data-aos-delay="500"
            >
              <div className="s1_button-content">
                <KnowMoreBttn />
              </div>
            </div>
          </div>
        </div>
        <div className="s1_right">
          <img
            className="s1_right_img"
            src={FantasmitaReact}
            alt="fantasmita react"
          />
        </div>
      </div>
    </div>
  );
}

export default screenOne;
