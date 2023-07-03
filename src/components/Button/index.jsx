import React from 'react'
import './style.css'

class Button extends React.Component{
  render(){
    const { children, style, className, buttonSecondary, buttonfullHeight, buttonlarge } = this.props;

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
}

export default Button