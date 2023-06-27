import React from 'react'
import './style.css'

const ThreeCardForSpecial = ({img, title, content}) => {
  return (
      <div className="specialCard">
          <img src={img} alt={img} />
          <h3>{title}</h3>
          <p>{ content }</p>
    </div>
  )

}

export default ThreeCardForSpecial;