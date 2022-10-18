import React from 'react'
import './cvBttn.css'
import CVLDF from './LucasFasolatoCV.pdf'

function cvBttn() {
  return (
    <a
      //this will save the file as "LucasFasolatoCV.pdf"
      download="LucasFasolatoCV.pdf"
      //put the path of your pdf file
      href={CVLDF}
      //reactstrap classes. add green button
      className='s2_button'
    >
      <button className='s2_button'>Descarga CV</button>
    </a>
    
  )
}

export default cvBttn