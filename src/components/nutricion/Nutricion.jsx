import React from 'react'

import "./Nutricion.css"

import nutricion from "../../media/Prescription.webp"

function Nutricion() {
  return (
    <div className='nutricion-container'>
        <h1>
            Nutrición consciente
        </h1>
        
        <div className='nutricion-container-text'>
           <p>La nutrición humana es el proceso biológico, e involuntario en el que el cuerpo humano asimila los alimentos y los líquidos necesarios para el funcionamiento, el crecimiento y el mantenimiento de sus funciones vitales. La nutrición es la ciencia que estudia  la relación que existe entre los  alimentos y la salud, especialmente en la determinación de una dieta.</p>
            <br></br>
            <p>Los profesionales dietistas – nutricionistas, son los encargados de realizar  una valoración del estado nutricional de cada paciente, para así poder adecuar su alimentación a sus necesidades. Asimismo es el encargado del diseño y planificación de menús adaptados al paciente según sus características fisiológicas, para prevenir o tratar patologías ya diagnosticadas según sus preferencias, estilo de vida, edad, sexo etc…</p>
            <br></br>
            <p>La nutrición engloba multitud de servicios, en Pablo Salas Fernández Nutrición ofrecemos a nuestros clientes todos ellos, destacando tratamientos de sobrepeso – obesidad, educación nutricional, diabetes, intolerancias y alergias alimenticias, ganancia de peso, hipercolesterolemias, anemias…</p> 
            
        </div>
        
        <img src={nutricion} alt='nutricion'></img>
    </div>
  )
}

export default Nutricion