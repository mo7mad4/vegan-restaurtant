import React, { Component } from "react";
import "./style.css";
import Container from "../../components/Container";
import Button from "../../components/Button";
import NavBar from "../../components/NavBar";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavBar />
        <Container>
          <div className="headerContent">
            <h1>
              Welcome To <br /> Golden View Dine{" "}
            </h1>
            <p>
              Explore the authentic vegan dishes with your friends and family
            </p>
            <Button>Read more</Button>
          </div>
          <div className="headerShadow"></div>
        </Container>
      </div>
    );
  }
}

export default Header;
