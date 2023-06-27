import React from 'react'
import './style.css'

const CardComponentWithSpecial = ({children}) => {
  return (
      <div className='gridWithThreeColumns'>
          {children}
      </div>
  )
}

export default CardComponentWithSpecial;