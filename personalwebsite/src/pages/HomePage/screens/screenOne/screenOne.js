import React from "react";
import Navbar from "../../../../components/Navbar/navbar";
import "./screenOne.css";
import FantasmitaReact from "./../../../../components/Imgs/react-blanco__.png";
import ButtonKnowMore from "../../../../components/ButtonKnowMore/buttonKnowMore";

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
                  Trabajo con React JS para el desarrollo frontend y Django
                  (Python) ó Nest JS (Javascript) para el desarrollo backend.
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
                <ButtonKnowMore />
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
