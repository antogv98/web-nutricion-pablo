import React from 'react'
import "./Metodologia.css"



function Metodologia() {
  return (
    <div className='metodologia-container'>
        <div className='metodologia-title'>
            <h1>Metodología de trabajo</h1>
        </div>
        <div className='metodologia-desc'>

        
            <div className='metodologia-desc-text'>
                <h1>Consultas</h1>
                <p>En la <b>primera consulta</b> se realiza un pesaje y medición del porcentaje de músculo, grasa corporal total y grasa visceral con una báscula de bioimpedancia. Se realiza una entrevista personal sobre enfermedades, alergias, intolerancias, gustos y aversiones alimentarías. Se realizará un recuerdo 24 horas de las comidas del día anterior o un día normal. De acuerdo a los datos recopilados, en los dos días siguientes se elaborará un menú totalmente personalizado.</p>
                <br /><p>
                En las <b>consultas de seguimiento</b> se evaluará la adhesión a la nueva dieta, se observará la evolución del paciente, se darán consejos y recomendaciones nutricionales y se confeccionara un nuevo menú acorde a los datos obtenidos.</p>
            </div>

            <div className='metodologia-desc-text'>
                <h1>Consultas online</h1>
               <p>En las consultas online el procedimiento es el mismo, a excepción del pesaje en la báscula de bioimpedancia, en esta modalidad, el cliente aportará los siguientes datos: Altura, peso (intentaremos pesarnos siempre con el mismo peso) y circunferencia de cintura; de acuerdo a estos datos se estimará el porcentaje de grasa mediante fórmulas. 
                 </p> 
            </div>
            
            
            
        </div>
    </div>
  )
}

export default Metodologia