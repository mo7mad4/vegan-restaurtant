import React from 'react'
import './style.css'

const Button = ({ children, style, className, buttonSecondary, buttonfullHeight, buttonlarge }) => {
  return (
    <button
      style={style || {}}
      className={`button 
            ${buttonSecondary ? "buttonSecondary" : ""} 
            ${buttonfullHeight ? "height-100" : ""}
            ${buttonlarge ? "buttonLarge" : ""}
            ${className ? className : ""} 
      `}
    >
      {children}
    </button>
  )
}

export default Button