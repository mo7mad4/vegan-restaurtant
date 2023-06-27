import React from 'react'
import './style.css'

const CountNumber = ({img,number,title}) => {
  return (
      <div className="countNumberCard">
          <img src={img} alt={img} className="cardImg"/>
          <div>
              <h2>{number}</h2>
              <p>{title}</p>
          </div>
       
    </div>
  )
}

export default CountNumber
