import React, { Component } from 'react'
import SpaceBg from '../../components/SpaceBg'
import AboutUs from '../../sections/About'
import Blogs from '../../sections/Blogs'
import CookingIngredients from '../../sections/CookingIngredients'
import Copy from '../../sections/Copy'
import Count from '../../sections/Count'
import Discount from '../../sections/Discount'
import Footer from '../../sections/Footer'
import Header from '../../sections/Header'
import Kitchen from '../../sections/Kitchen'
import Newsletter from '../../sections/Newsletter'
import Review from '../../sections/Reviews'
import Special from '../../sections/Special'

class Home extends Component {
  render() {
    return (
        <div>
        <Header />
        <SpaceBg>
          <AboutUs />
          <Special />
          <Kitchen />
          <Discount />
          <CookingIngredients />
          <Count />
          <Review />
          <Blogs />
          <Footer />
          <Newsletter />
          <Copy />
        </SpaceBg>
      </div>
    )
  }
}
export default Home