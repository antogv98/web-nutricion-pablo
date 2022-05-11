import React from 'react'
import "./Slogan.css"
import sloganImg from "../../media/consulta1.jpeg"

const Slogan = () => {
  return (
    <div className='slogan-container'>
        <div className='slogan-title'><h1>Vive saludable con Pablo Salas Fernández Nutrición</h1></div>
        <div className='slogan-img'><img src={sloganImg} alt="sloganImg" /></div>
    </div>
  )
}

export default Slogan