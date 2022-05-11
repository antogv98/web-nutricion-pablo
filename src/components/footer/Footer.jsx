import React from 'react'
import "./Footer.css"
import pdf from '../../media/CurriculumAntonio.pdf';

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1>Pablo Salas Fernández Nutrición Humana y Dietética</h1>
            <p>pablosalas@outlook.es</p>
        </div>
        <div className='footer-contact'>
            <h3>Contactemos</h3>
            <p>Demos el paso que marcará el cambio</p>
        </div>

        <div className='footer-download'>
            <a href={pdf} target="_blank" rel="noopener noreferrer" download>Descarga mi CV</a>
        </div>
        
        <div className='footer-sns'>
            
            
                <a href='https://www.linkedin.com/in/antonio-guti%C3%A9rrez-villegas-89578b161/' target="_blank" rel="noreferrer">
                    <i className='fab fa-linkedin linkedin'></i>
                </a>
                <a href='https://api.whatsapp.com/send?phone=34610658841' target="_blank" rel="noreferrer">
                    <i className='fab fa-whatsapp whatsapp'></i>
                </a>
            
           
            
        </div>
        <div className='design-by'>
                Desing By: Antonio Gutiérrez Villegas
            </div>
    </footer>
  )
}

export default Footer