import React from 'react'
import './screenTwo.css'
import CvBttn from '../../../../components/CvBttn/cvBttn'

function screenTwo() {
  return (
    <div className='s2_size'>
      <div className='s2_content'>
        <div className='s2_left'>
          <section className='s2_left-content'>
            <div className='s2_left-title'>
              <h2 className='s2_h2'>Personal proyects</h2>
            </div>
            <div className='s2_left-proyects'>
              <section className='s2_proyect-box'>
                BOX PROYECT
              </section>
              <section className='s2_proyect-box'>
                BOX PROYECT
              </section>
              <section className='s2_proyect-box'> 
                BOX PROYECT
              </section>
              <section className='s2_proyect-box'>
                BOX PROYECT
              </section>
            </div>
          </section>
        </div>
        <div className='s2_right'> 
        <section>
          <div className='s2_right-title'>
            <h2 className='s2_h2'>About me</h2>
          </div>
          <div>
            <h1 className='s2_h1'>Lucas Fasolato</h1>
            <p className='s2_p'>
              <span>Tengo 21 años, soy Desarrollador Web Full Stack. </span>
              <span>Me recibí de Técnico Universitario en Programación en la Universidad Austral de Argentina. </span>
              <span>Busco generar un código limpio y semánticamente correcto </span>
              <span>logrando que cada detalle quede resuelto.</span>
            </p>
          </div>
          <section className='s2_bttn'>
            <CvBttn /> 
          </section>
         
        </section>
        

        </div>    
      </div>
    </div>
  )
}

export default screenTwo