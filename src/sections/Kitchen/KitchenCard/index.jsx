import React from 'react'
import './style.css'

const KitchenCard = ({ img, title, subTitle, price }) => {
    return (
        <div className="kitchenCard">
            <img src={img} alt={img} />
            <div className="kitchenCardContant">
                <p>{title}</p>
                <p>{subTitle}</p>
            </div>
            <div className="line"></div>
            <p>{price}</p>
        </div>
    )
}
export default KitchenCard;
