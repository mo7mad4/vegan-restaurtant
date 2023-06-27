import React,{Component} from 'react'
import CardComponentWithSpecial from '../../components/CardComponentWithSpecial'
import Container from '../../components/Container'
import CountNumber from './CountNumber'
import dishImage from '../../images/Numbers/dish.png'
import chefImage from '../../images/Numbers/chef.png'
import teamImage from '../../images/Numbers/team.png'
import './style.css'


class Count extends Component {
  render() {
    return (
        <div className="count">
        <Container>
            <CardComponentWithSpecial>
                <CountNumber
                    img={dishImage}
                    number="250+"
                    title="Delicacy"
                />
                <CountNumber
                    img={chefImage}
                    number="10+"
                    title="renowed chefs"
                />
                <CountNumber
                    img={teamImage}
                    number="30+"
                    title="Members"
                />

            </CardComponentWithSpecial>
        </Container>
    </div>
    )
  }
}
export default Count