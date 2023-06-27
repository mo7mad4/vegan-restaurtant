import React, { Component } from 'react'
import Grid from '../../components/Grid'
import ImagSectionCooking from '../../images/cooking-ingredients.png'
class CookingIngredients extends Component {
  render() {
    return (
        <Grid
        title="Cooking ingredients"
        shortDesc="What goes in"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra.
         Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio.
         Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit.Nibh auctor purus nunc tellus pellentesque nibh mattis. 
         Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit."
        img={ImagSectionCooking}

    />
    )
  }
}

export default CookingIngredients
