import React from 'react'
import './style.css'

class CountNumber extends React.Component  {
  render(){
    const {img,number,title} = this.props
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
}

export default CountNumber
