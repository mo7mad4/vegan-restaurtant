import React, { Component } from "react";
import GridContant from "../../components/GridContant";
import ReviewCard from "./ReviewCard";
import "./style.css";
import ReviewsSection from "../../mock/ReviewsSection";
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
          {ReviewsSection.map((ReviewsSectionData) => (
            <ReviewCard
              aimg={ReviewsSectionData.aimg}
              name={ReviewsSectionData.name}
              star={ReviewsSectionData.star}
              descrpation={ReviewsSectionData.descrpation}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Review;
