import React from "react";
import "./screenThree.css";
import Html from "./../../../../components/Icons/icons8-html.svg";
import Css from "./../../../../components/Icons/icons8-css.svg";
import Js from "./../../../../components/Icons/icons8-js.svg";
import ReactJs from "./../../../../components/Icons/icons8-react-white.svg";
import Bootstrap from "./../../../../components/Icons/icons8-html.svg";
import Sql from "./../../../../components/Icons/icons8-mysql.svg";
import Django from "./../../../../components/Icons/icons8-django.svg";

function screenThree() {
  return (
    <div className="s3_size" id="tecnologias">
      <div className="s3_content">
        <div className="s3_left">
          <h1 className="s3_h1" data-aos="fade-in" data-aos-duration="500">
            FRONT END
          </h1>
          <section className="s3_section">
            <section className="s3_logo-name" id="html">
              <div className="s3_skill-html" />
              <div className="s3_logo-size">
                <img className="s3_img" src={Html} alt="Logo HTML" />
              </div>
              <p className="s3_p">HTML</p>
            </section>
          </section>
          <section className="s3_section">
            <section className="s3_logo-name" id="css">
              <div className="s3_skill-css" />
              <div className="s3_logo-size">
                <img className="s3_img" src={Css} alt="Logo CSS" />
              </div>
              <p className="s3_p">CSS</p>
            </section>
          </section>
          <section className="s3_section">
            <section className="s3_logo-name" id="js">
              <div className="s3_skill-js" />
              <div className="s3_logo-size">
                <img className="s3_img" src={Js} alt="Logo JavaScript" />
              </div>
              <p className="s3_p">JAVASCRIPT</p>
            </section>
          </section>
          <section className="s3_section">
            <section className="s3_logo-name" id="react">
              <div className="s3_skill-react" />
              <div className="s3_logo-size">
                <img className="s3_img" src={ReactJs} alt="Logo ReactJs" />
              </div>
              <p className="s3_p">REACT</p>
            </section>
          </section>
          {/* <section className='s3_section'>
            <section className='s3_logo-name' id='angular'>
              <div className='s3_skill-angular'/>
              <div className='s3_logo-size'> 
                <img className='s3_img' src={Angular} alt='Logo Angular'/>
              </div>
              <p className='s3_p'>ANGULAR</p>
            </section>
          </section> */}
          {/* <section className='s3_section'>
            <section className='s3_logo-name' id='sass'>
              <div className='s3_skill-sass'/>
              <div className='s3_logo-size'> 
                <img className='s3_img' src={Sass} alt='Logo SASS'/>
              </div>
              <p className='s3_p'>SASS</p>
            </section>
          </section> */}
          <section className="s3_section">
            <section className="s3_logo-name" id="bootstrap">
              <div className="s3_skill-bootstrap" />
              <div className="s3_logo-size">
                <img className="s3_img" src={Bootstrap} alt="Logo Bootstrap" />
              </div>
              <p className="s3_p">BOOTSTRAP</p>
            </section>
          </section>
        </div>
        <div className="s3_right">
          <h1 className="s3_h1" data-aos="fade-in" data-aos-duration="500">
            BACK END
          </h1>
          <section className="s3_section">
            <section className="s3_logo-name" id="django">
              <div className="s3_skill-django" />
              <div className="s3_logo-size">
                <img className="s3_img" src={Django} alt="Logo Django" />
              </div>
              <p className="s3_p">PYTHON</p>
            </section>
          </section>
          {/* <section className='s3_section'>
            <section className='s3_logo-name' id="mongodb">
              <div className='s3_skill-mongodb'/>
              <div className='s3_logo-size'> 
                <img className='s3_img' src={MongoDB} alt='Logo MongoDB'/>
              </div>
              <p className='s3_p'>MONGODB</p>
            </section>
          </section> */}
          <section className="s3_section">
            <section className="s3_logo-name" id="django">
              <div className="s3_skill-django" />
              <div className="s3_logo-size">
                <img className="s3_img" src={Django} alt="Logo Django" />
              </div>
              <p className="s3_p">DJANGO</p>
            </section>
          </section>
          <section className="s3_section">
            <section className="s3_logo-name" id="mysql">
              <div className="s3_skill-mysql" />
              <div className="s3_logo-size">
                <img className="s3_img" src={Sql} alt="Logo MySQL" />
              </div>
              <p className="s3_p">NODE JS</p>
            </section>
          </section>
          <section className="s3_section">
            <section className="s3_logo-name" id="mysql">
              <div className="s3_skill-mysql" />
              <div className="s3_logo-size">
                <img className="s3_img" src={Sql} alt="Logo MySQL" />
              </div>
              <p className="s3_p">NEST JS</p>
            </section>
          </section>
          <section className="s3_section">
            <section className="s3_logo-name" id="mysql">
              <div className="s3_skill-mysql" />
              <div className="s3_logo-size">
                <img className="s3_img" src={Sql} alt="Logo MySQL" />
              </div>
              <p className="s3_p">MySQL</p>
            </section>
          </section>
          {/* <section className='s3_section'>
            <section className='s3_logo-name' id='java'>
              <div className='s3_skill-springjava'/>
              <div className='s3_logo-size'> 
                <img className='s3_img' src={Spring} alt='Logo Spring Java'/>
              </div>
              <p className='s3_p'>SPRING JAVA</p>
            </section>
          </section> */}
        </div>
      </div>
    </div>
  );
}

export default screenThree;
