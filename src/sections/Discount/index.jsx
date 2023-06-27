import React, { Component } from "react";
import Container from "../../components/Container";
import discountImage from "../../images/discount.png";
import GridContant from "../../components/GridContant";
import Button from "../../components/Button";
import "./style.css";

class Discount extends Component {
  render() {
    return (
      <div className="discount">
        <Container>
          <img src={discountImage} alt="discountImage" className="left" />
          <div className="discountContant">
            <GridContant
              title="Come join us for a lunch this weekend and enjoy"
              subTitle="FLAT 10% OFF"
              isCentered
            />
          </div>
          <Button style={{ display: "block", margin: "auto" }}>
            Book Table
          </Button>
          <img src={discountImage} alt="discountImage" className="right" />
        </Container>
      </div>
    );
  }
}
export default Discount;
