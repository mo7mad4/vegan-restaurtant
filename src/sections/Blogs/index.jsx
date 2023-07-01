import React,{Component} from 'react'
import CardComponentWithSpecial from '../../components/CardComponentWithSpecial';
import GridContant from '../../components/GridContant';
import BlogCard from './BlogCard';
import './style.css'
import BlogImage1 from '../../images/blogs/blog1.png'
import BlogImage2 from '../../images/blogs/blog2.png'
import BlogImage3 from '../../images/blogs/blog3.png'
class Blogs extends Component {
  render() {
    return (
        <div className="blogs">
            <GridContant
                title="Blogs"
                subTitle="words from our food lovers"
                isCentered
            />
            <CardComponentWithSpecial>
                <BlogCard
                    img={BlogImage1}
                    title="Cooking Dining Experience"
                    subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
                />
                <BlogCard
                    title="Cooking Dining Experience"
                    subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
                    img={BlogImage2}
                    LastImage
                />
                <BlogCard
                    img={BlogImage3}
                    title="Cooking Dining Experience"
                    subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
                />
            </CardComponentWithSpecial>
        </div>
    )
  }
}
export default Blogs;