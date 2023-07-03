import React from 'react'
import './style.css'

class BlogCard extends React.Component {
    render(){
        const { img, title, subTitle,LastImage } = this.props;
        return (
            <div className="blogsCard">
            <img src={img} alt={img} style={ {order:LastImage ? 2:-1}} />
            <div className="blogCardContant">
                <h4 className='title'>{title}</h4>
                <p>{subTitle}</p>
                <button>Read More</button>
            </div>
        </div>
    )
}
}

export default BlogCard;