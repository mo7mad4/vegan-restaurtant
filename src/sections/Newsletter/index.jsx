import React, { Component } from "react";
import Container from "../../components/Container";
import email from "../../images/icons/email2.png";
import "./style.css";
import Button from "../../components/Button";
import CardComponentWithSpecial from "../../components/CardComponentWithSpecial";

class Newsletter extends Component {
  render() {
    return (
      <Container>
        <div className="newsletter">
          <CardComponentWithSpecial>
            <p>
              <img src={email} alt="email" /> Subscribe to our Newsletter
            </p>
            <input type="text" placeholder="Your Email id" />
            <Button>Subscribe</Button>
          </CardComponentWithSpecial>
        </div>
      </Container>
    );
  }
}
export default Newsletter;
