import React from 'react'
import './style.css'

class ThreeCardForSpecial extends React.Component {
  render(){
    const {img, title, content} = this.props
    return (
      <div className="specialCard">
          <img src={img} alt={img} />
          <h3>{title}</h3>
          <p>{ content }</p>
    </div>
  )
  
}
}

export default ThreeCardForSpecial;