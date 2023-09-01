import React from 'react'
import './card.css'

const Card = ({img,name,details}) => {
  return (
    <div className='d-flex bg-primary m-2 justify-content-center align-content-center '>
        <img src={img} style={{width : '100px',height : '100px'}}  className='img-thumbnail' alt="" />
        <h6>{name}</h6>
        <h3>{details}</h3>
    </div>
  )
}

export default Card