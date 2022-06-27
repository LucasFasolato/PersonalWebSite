import React from 'react'
import './logoSM.css'
function logoSM(props) {
//   document.getElementById("logo_button").style.backgroundColor = "red";;
//   logoBttn.style.backgroundImage= `url(${props.bgPath})`;
//   logoBttn.setAttribute('style','background-image: url(./../Icons/icons8-js.svg)');
  return (
    <div className='logo_content'>
        <button className='logo_button' id='logo_button'>
            <img className='logo_img' src={props.imgPath} alt={props.imgAlt}/>
        </button>
    </div>
  )
}

export default logoSM