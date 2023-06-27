import React from 'react'
import './style.css'

const ReviewCard = ({ aimg, name, star, descrpation }) => {
    return (
        <div className="card">
            <div className="reviewCardHeader">
                <img src={aimg} alt={aimg} className="avatar" />
                <div>
                    <h4>{name}</h4>
                    <p>{"⭐".repeat(star)}</p>
                </div>
            </div>
            <p className="desc">{descrpation}</p>

        </div>
    )
}

export default ReviewCard;
