import React, { Component } from 'react'
import Grid from '../../components/Grid'
import AboutAu from '../../mock/AboutUs'
class AboutUs extends Component {
  render() {
    return (
      AboutAu.map(about => 
            <Grid 
              title={about.title}
              shortDesc={about.shortDesc}
              desc={about.desc}
              img={about.img}
        />
        )
     
    )
  }
}

export default AboutUs