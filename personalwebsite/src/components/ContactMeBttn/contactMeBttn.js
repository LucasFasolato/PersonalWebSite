import React from 'react'
import './contactMeBttn.css'
import {useNavigate } from "react-router-dom";

  
function contactMeBttn() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  return (
    <button className='s1_button' onClick={() => {navigate("/contact")}}>Contactame</button>
  )
}

export default contactMeBttn