import React from "react";
import Logo from "../Logo";
import search from "../../images/icons/search.png";
import Button from "../Button";
import "./style.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div>
          <Logo />
          <ul className="navbarUl">
            <li className="navbarLi">
              <a href="/#">Home</a>
            </li>
            <li className="navbarLi">
              <a href="/#">About Us</a>
            </li>
            <li className="navbarLi">
              <a href="/#">Special</a>
            </li>
            <li className="navbarLi">
              <a href="/#">Menu</a>
            </li>
            <li className="navbarLi">
              <a href="/#">Blogs</a>
            </li>
            <li className="navbarLi">
              <img src={search} alt="search" />
            </li>
          </ul>
        </div>
        <Button className="only-large-screens" buttonSecondary buttonfullHeight>
          Book Now
        </Button>
      </nav>
    );
  }
}

export default NavBar;
