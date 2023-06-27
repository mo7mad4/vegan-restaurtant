import React from 'react'
import Container from '../Container'
import GridContant from '../GridContant'
import Button from '../Button'
import './style.css'

const Grid = ({ title, shortDesc, desc, img }) => {
    return (

        <div className="grid">
            <Container>
                <div className="gridSectionContent">
                    <div>
                        <GridContant
                            title={title}
                            subTitle={shortDesc}
                        />
                        <p className="GridSectionDesc">{desc}</p>
                        <Button>Read More</Button>
                    </div>
                    <div className='gridSectionImage'>
                        <img src={img} alt="imgGrid" />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Grid;