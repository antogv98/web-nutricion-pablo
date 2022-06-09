import React from 'react'
import "./Tarifas.css"

import tarifa1 from "../../media/tarifa1.webp"
import tarifa2 from "../../media/tarifa2.webp"
import tarifa3 from "../../media/tarifa3.webp"

function Tarifas() {
  return (
    <div className='tarifas-container'>
        <div className='tarifas-opciones'> 
        <div className='tarifa'>
            <img src={tarifa1} alt="tarifa1" />
            <div className='tarifa-desc'>
                <h2>Primera consulta</h2>
                <div className='salto'>
                    <h3>45 min</h3>
                    <h3>25€</h3>
                </div>
                
           
                <a href='https://api.whatsapp.com/send?phone=34605349578' target="_blank" rel="noreferrer" className='tarifas-reserva'>Reserva ahora</a>  
            </div>
            
        </div>
        <div className='tarifa'>
            <img src={tarifa2} alt="tarifa2" />
            <div className='tarifa-desc'>
                <h2>Consulta de seguimiento</h2>
                <div className='salto'>
                    <h3>20 min</h3>
                    <h3>15€</h3>
                </div>
                
          
                <a href='https://api.whatsapp.com/send?phone=34605349578' target="_blank" rel="noreferrer" className='tarifas-reserva'>Reserva ahora</a>  
            </div>

        </div>
         <div className='tarifa'>
            <img src={tarifa3} alt="tarifa3" />
            <div className='tarifa-desc'>
                <h2>Consultas para parejas</h2>
                <div className='salto'>
                    <h3>Primera consulta 40€</h3>
                    <h3>Consulta de seguimiento 25€</h3>
                </div>
                
                <a href='https://api.whatsapp.com/send?phone=34605349578' target="_blank" rel="noreferrer" className='tarifas-reserva'>Reserva ahora</a>  
            </div>
            
        </div> 
        </div>
    
        
    </div>
  )
}

export default Tarifas