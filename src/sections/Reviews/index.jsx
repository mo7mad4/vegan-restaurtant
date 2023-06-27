import React, { Component } from "react";
import GridContant from "../../components/GridContant";
import ReviewCard from "./ReviewCard";
import "./style.css";
import avatarImage from "../../images/avatars/avatar1.png";
import avatarImageAvater2 from "../../images/avatars/avatar2.png";

class Review extends Component {
  render() {
    return (
      <div className="reviews">
        <GridContant
          title="Reviews"
          subTitle="words from our food lovers"
          isCentered
        />
        <div className="reviewsContainer">
          <ReviewCard
            aimg={avatarImage}
            name="Alex andrina"
            star={5}
            descrpation="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"
          />
          <ReviewCard
            aimg={avatarImage}
            name="Alex andrina"
            star={5}
            descrpation="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"
          />
          <ReviewCard
            aimg={avatarImageAvater2}
            name="Alex andrina"
            star={5}
            descrpation="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"
          />
        </div>
      </div>
    );
  }
}
export default Review;
