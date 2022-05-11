import React from 'react'
import "./Cover.css"
import coverImg from "../../media/LOGO-PABLO-horizontal.png"

const Cover = () => {
  return (
    <div className='cover-container'>
        <img src={coverImg} alt="coverImg" />
    </div>
  )
}

export default Cover