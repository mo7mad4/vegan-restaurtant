import React, { Component } from 'react'
import Container from '../../components/Container';
import GridContant from '../../components/GridContant';
import KitchenCard from './KitchenCard';
import KitchenData from '../../mock/KitchenData'
import './style.css'
class Kitchen extends Component {
  render() {
    return (
        <div className="kitchen">
        <GridContant
            title="Straight From Kitchen"
            subTitle="Our Menu"
            isCentered
        />
        <Container>
            <div className="kitchenContent">

                {KitchenData.map((DATA) =>
                    <KitchenCard
                    img={DATA.image}
                    title={DATA.title}
                    subTitle={DATA.subTitle}
                    price={DATA.price}
                />
                )}
               
            </div> 
        </Container>
    </div>
    )
  }
}

export default Kitchen