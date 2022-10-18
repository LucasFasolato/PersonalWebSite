import React from 'react'
import './screenTwo.css'
import CvBttn from '../../../../components/CvBttn/cvBttn'
import BoxProyect from '../../../../components/BoxProyect/boxProyect'

function screenTwo() {
  return (
    <div className='s2_size' id='s2'>
      <div className='s2_content'>
        <div className='s2_left'>
          <section className='s2_left-content'>
            <div className='s2_left-title'>
              <h2 className='s2_h2'>Proyectos personales</h2>
            </div>
            <div className='s2_left-proyects'>
              <section className='s2_proyect-box'>
                <BoxProyect image='BancoAustral' name='Proyecto final TUP'/>
              </section>
              <section className='s2_proyect-box'>
                <BoxProyect image='Peliculas' name='Proyecto personal Pelispedia'/>
              </section>
              <section className='s2_proyect-box'> 
                <BoxProyect image='PersonalWeb' name='Pagina web propia'/>
              </section>
              <section className='s2_proyect-box'>
                <BoxProyect image='Rosario' name='Proyecto RosarioNights'/>
              </section>
            </div>
          </section>
        </div>
        <div className='s2_right'> 
          <section className='s2_right-content'>
            <div className='s2_right-title'>
              <h2 className='s2_h2'>Sobre mí</h2>
            </div>
            <div className='s2_right-text'>
              <h1 className='s2_h1'>Lucas Fasolato</h1>
              <p className='s2_p'>
                <span>Tengo 21 años, soy Desarrollador Web Full Stack. </span>
                <span>Me recibí de Técnico Universitario en Programación en la Universidad Austral de Argentina. </span>
                <br/>
                <span>Soy una persona responsable, social y comprometida con el trabajo. </span>
                <span>Me gusta trabajar en equipo y me adapto con facilidad a proyectos ya comenzados. </span>
                <span>Busco generar un código limpio y semánticamente correcto </span>
                <span>logrando que cada detalle quede resuelto.</span>
              </p>
            </div>
            <section className='s2_bttn'>
              <CvBttn /> 
            </section>
            {/* <section className='s2_skills-size'>
              <h3 className='s2_h3'>HTML, CSS, JS</h3>
              <div className='s2_skill-html'/>
              <h3 className='s2_h3'>REACT JS</h3>
              <div className='s2_skill-react'/>
              <h3 className='s2_h3'>ANGULAR</h3>
              <div className='s2_skill-angular'/>
              <h3 className='s2_h3'>SPRING JAVA</h3>
              <div className='s2_skill-java'/>
            </section>*/}
          </section> 
        </div>    
      </div>
    </div>
  )
}

export default screenTwo