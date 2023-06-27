import React from 'react'
import './style.css'

const GridContant = ({ title, subTitle, isCentered }) => {
    return (
        <div>
            <h2 className="title" style={{ textAlign: isCentered ? "center" : "start" }}>{title}</h2>
            <p className="subTitle" style={{ textAlign: isCentered ? "center" : "start" }}>
                {subTitle}
            </p>
        </div>
    )
}

export default GridContant;