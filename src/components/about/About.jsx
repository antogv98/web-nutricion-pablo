import React from 'react'
import "./About.css"

import about from "../../media/about.jpg"

function About() {
  return (
    <div className='about-container'>
        <div className='about-title'>
            <h1>Sobre mi</h1>
        </div>
        <div className='about-desc'>

        <img src={about} alt="about" />
            <div className='about-desc-text'>
                <h1>Número de colegiado AND-01252</h1>
               <p>Soy graduado en Nutrición Humana y Dietética por la universidad de Granada, apasionado por la salud, la nutrición y la felicidad de mis pacientes. Mi principal objetivo es ayudar a las personas a entender la nutrición y darle los medios necesarios para tratar alergias e intolerancias alimentarias, ayudarles a perder o ganar peso y mejorar su salud mediante planes de alimentación personalizados y asesoramiento profesional.</p> 
            </div>
            
            
            
        </div>
    </div>
  )
}

export default About