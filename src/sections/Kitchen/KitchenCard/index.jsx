import React from 'react'
import './style.css'

class KitchenCard extends React.Component{
    render(){
        const { img, title, subTitle, price } = this.props
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
}
export default KitchenCard;
