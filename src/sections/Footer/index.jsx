import React, { Component } from "react";
import Container from "../../components/Container";
import CardComponentWithSpecial from "../../components/CardComponentWithSpecial";
import Logo from "../../components/Logo";
import insta from "../../images/icons/instgram.png";
import twitter from "../../images/icons/twitter.png";
import youtube from "../../images/icons/youtube.png";
import email from "../../images/icons/email.png";
import gps from "../../images/icons/gps.png";
import phone from "../../images/icons/phone.png";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
          <CardComponentWithSpecial>
            <div className="footerHead">
              <div className="footerHead1">
                <Logo />
                <p>Golden View Dine</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sollicitudin
              </p>
              <div className="socialIcon">
                <img src={insta} alt={insta} />
                <img src={twitter} alt={twitter} />
                <img src={youtube} alt={youtube} />
              </div>
            </div>
            <div className="footerTail">
              <p className="footerTilte">Other Links</p>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms & conditions</li>
                <li>Blogs</li>
                <li>our team</li>
                <li>Our kitchen</li>
              </ul>
            </div>
            <div className="footerContact">
              <p className="footerTilte">Contact Us</p>
              <p>
                <img src={email} alt="email" /> Gogreendineservice@gmail.com
              </p>
              <p>
                <img src={gps} alt="gps" /> AZ complex bylane3 Mandari Rd Mumbai
                1100867
              </p>
              <p>
                <img src={phone} alt="email" /> +1800 287 256
              </p>
            </div>
          </CardComponentWithSpecial>
        </Container>
      </footer>
    );
  }
}
export default Footer;
