import React from 'react'
import './boxProyect.css'
import BancoAustral from './../Imgs/Img-proyecto-bancoaustral.PNG';
import Peliculas from './../Imgs/Img-proyecto-peliculas.PNG';
import PersonalWeb from './../Imgs/Img-proyecto-personalwebsite.PNG';
import Rosario from './../Imgs/Img-proyecto-rosarionights.PNG';
function BoxProyect(props) {
    if (props.image === 'BancoAustral'){
        return(
            <div className='boxProyect_size'>
                <section className='boxProyect_section'>
                    <img className='boxProyect_img' src={BancoAustral} alt='Description'/>
                    <h1 className='boxProyect_h1'>{props.name}</h1>
                    <h2 className='boxProyect_h2'>Website</h2>
                </section>
                <section className='boxProyect_buttons'>
                    <button className='boxProyect_preview'>
                        Preview
                    </button>
                    <button className='boxProyect_github'>
                        GitHub
                    </button>
                </section>
            </div>
        )
    } else if (props.image === 'Peliculas'){
        return(
            <div className='boxProyect_size'>
                <section className='boxProyect_section'>
                    <img className='boxProyect_img' src={Peliculas} alt='Description'/>
                    <h1 className='boxProyect_h1'>{props.name}</h1>
                    <h2 className='boxProyect_h2'>Website</h2>
                </section>
                <section className='boxProyect_buttons'>
                    <button className='boxProyect_preview'>
                        Preview
                    </button>
                    <button className='boxProyect_github'>
                        GitHub
                    </button>
                </section>
            </div>
        )
    } else if (props.image === 'PersonalWeb'){
        return(
            <div className='boxProyect_size'>
                <section className='boxProyect_section'>
                    <img className='boxProyect_img' src={PersonalWeb} alt='Description'/>
                    <h1 className='boxProyect_h1'>{props.name}</h1>
                    <h2 className='boxProyect_h2'>Website</h2>
                </section>
                <section className='boxProyect_buttons'>
                    <button className='boxProyect_preview'>
                        Preview
                    </button>
                    <button className='boxProyect_github'>
                        GitHub
                    </button>
                </section>
            </div>
        )
    } else if (props.image === 'Rosario'){
        return(
            <div className='boxProyect_size'>
                <section className='boxProyect_section'>
                    <img className='boxProyect_img' src={Rosario} alt='Description'/>
                    <h1 className='boxProyect_h1'>{props.name}</h1>
                    <h2 className='boxProyect_h2'>Website</h2>
                </section>
                <section className='boxProyect_buttons'>
                    <button className='boxProyect_preview'>
                        Preview
                    </button>
                    <button className='boxProyect_github'>
                        GitHub
                    </button>
                </section>
            </div>
        )
    }
}

export default BoxProyect