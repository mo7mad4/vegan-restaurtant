import React, { Component } from 'react'
import Grid from '../../components/Grid'
import aboutImage from '../../images/about.png'


class AboutUs extends Component {
  render() {
    return (
      <Grid 
            title="About Us"
            shortDesc="Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque."
            img={aboutImage}
        />
    )
  }
}

export default AboutUs