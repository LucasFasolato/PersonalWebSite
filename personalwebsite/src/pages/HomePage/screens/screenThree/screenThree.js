import React from 'react'
import './screenThree.css'
import Html from './../../../../components/Icons/icons8-html.svg'
import Css from './../../../../components/Icons/icons8-css.svg'
import Js from './../../../../components/Icons/icons8-js.svg'
import ReactJs from './../../../../components/Icons/icons8-react-white.svg'
import Angular from './../../../../components/Icons/icons8-angularjs-white.svg'
import Sass from './../../../../components/Icons/icons8-sass.svg'
import Bootstrap from './../../../../components/Icons/icons8-html.svg'
import Sql from './../../../../components/Icons/icons8-mysql.svg'
import MongoDB from './../../../../components/Icons/icons8-html.svg'
import Django from './../../../../components/Icons/icons8-django.svg'
import Spring from './../../../../components/Icons/icons8-java.svg'

function screenThree() {
  return (
    <div className='s3_size'>
      <div className='s3_content'>
        <div className='s3_left'>
          <h1 className='s3_h1'>FRONT END</h1>
          <section className='s3_section'>
            <section className='s3_logo-name'>
              <div className='s3_logo-size'> 
                <img className='s3_img' src={Html} alt='Logo HTML'/>
              </div>
              <p className='s3_p'>HTML</p>
            </section>
            <div className='s3_skill-html'/>
          </section>
          <section className='s3_section'>
            <section className='s3_logo-name'>
              <div className='s3_logo-size'> 
                <img className='s3_img' src={Css} alt='Logo CSS'/>
              </div>
              <p className='s3_p'>CSS</p>
            </section>
            <div className='s3_skill-css'/>
          </section>
          <section className='s3_section'>
            <section className='s3_logo-name'>
              <div className='s3_logo-size'> 
                <img className='s3_img' src={Js} alt='Logo JavaScript'/>
              </div>
              <p className='s3_p'>JAVASCRIPT</p>
            </section>
            <div className='s3_skill-js'/>
          </section>
          <section className='s3_section'>
            <section className='s3_logo-name'>
              <div className='s3_logo-size'> 
                <img className='s3_img' src={ReactJs} alt='Logo ReactJs'/>
              </div>
              <p className='s3_p'>REACT</p>
            </section>
            <div className='s3_skill-react'/>
          </section>
          <section className='s3_section'>
            <section className='s3_logo-name'>
              <div className='s3_logo-size'> 
                <img className='s3_img' src={Angular} alt='Logo Angular'/>
              </div>
              <p className='s3_p'>ANGULAR</p>
            </section>
            <div className='s3_skill-angular'/>
          </section>
          <section className='s3_section'>
            <section className='s3_logo-name'>
              <div className='s3_logo-size'> 
                <img className='s3_img' src={Sass} alt='Logo SASS'/>
              </div>
              <p className='s3_p'>SASS</p>
            </section>
            <div className='s3_skill-sass'/>
          </section>
          <section className='s3_section'>
            <section className='s3_logo-name'>
              <div className='s3_logo-size'> 
                <img className='s3_img' src={Bootstrap} alt='Logo Bootstrap'/>
              </div>
              <p className='s3_p'>BOOTSTRAP</p>
            </section>
            <div className='s3_skill-bootstrap'/>
          </section>
        </div>
        <div className='s3_right'> 
          <h1 className='s3_h1'>BACK END</h1>
          <section className='s3_section'>
            <section className='s3_logo-name'>
              <div className='s3_logo-size'> 
                <img className='s3_img' src={Sql} alt='Logo MySQL'/>
              </div>
              <p className='s3_p' >MySQL</p>
            </section>
            <div className='s3_skill-mysql'/>
          </section>
          <section className='s3_section'>
            <section className='s3_logo-name'>
              <div className='s3_logo-size'> 
                <img className='s3_img' src={MongoDB} alt='Logo MongoDB'/>
              </div>
              <p className='s3_p'>MONGODB</p>
            </section>
            <div className='s3_skill-mongodb'/>
          </section>
          <section className='s3_section'>
            <section className='s3_logo-name'>
              <div className='s3_logo-size'> 
                <img className='s3_img' src={Django} alt='Logo Django'/>
              </div>
              <p className='s3_p'>DJANGO</p>
            </section>
            <div className='s3_skill-django'/>
          </section>
          <section className='s3_section'>
            <section className='s3_logo-name'>
              <div className='s3_logo-size'> 
                <img className='s3_img' src={Spring} alt='Logo Spring Java'/>
              </div>
              <p className='s3_p'>SPRING JAVA</p>
            </section>
            <div className='s3_skill-springjava'/>
          </section>
        </div>   
      </div>
    </div>
  )
}

export default screenThree