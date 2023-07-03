import React from 'react'
import './style.css'

class GridContant extends React.Component{
    render(){
        const { title, subTitle, isCentered } = this.props
        
        return (
            <div>
            <h2 className="title" style={{ textAlign: isCentered ? "center" : "start" }}>{title}</h2>
            <p className="subTitle" style={{ textAlign: isCentered ? "center" : "start" }}>
                {subTitle}
            </p>
        </div>
    )
}
}

export default GridContant;