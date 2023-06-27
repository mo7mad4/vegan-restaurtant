import React, { Component } from 'react'
import CardComponentWithSpecial from '../../components/CardComponentWithSpecial'
import GridContant from '../../components/GridContant'
import ThreeCardForSpecial from './ThreeCardForSpecial'
import orangeJuice from '../../images/special/orange-juice.png';
import chef from '../../images/special/chef.png';
import restaurant from '../../images/special/restaurant.png';
import './style.css'

class Special extends Component {
  render() {
    return (
        <div className="special">
            <GridContant
                title="special"
                subTitle="What makes us special"
                isCentered
            />
            <CardComponentWithSpecial>
                <ThreeCardForSpecial
                    img={orangeJuice}
                    title="Fresh food"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras."
                />
                <ThreeCardForSpecial
                    img={chef}
                    title="skilled Chef"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras."
                />
                <ThreeCardForSpecial
                    img={restaurant}
                    title="Exotic dishes"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras."
                />
            </CardComponentWithSpecial>

        </div>

    )
  }
}
export default Special