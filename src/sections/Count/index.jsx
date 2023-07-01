import React, { Component } from "react";
import CardComponentWithSpecial from "../../components/CardComponentWithSpecial";
import Container from "../../components/Container";
import CountNumber from "./CountNumber";
import countData from "../../mock/countData";
import "./style.css";

class Count extends Component {
  render() {
    return (
      <div className="count">
        <Container>
          <CardComponentWithSpecial>
            {countData.map((countDATA) => (
              <CountNumber
                img={countDATA.img}
                number={countDATA.number}
                title={countDATA.title}
              />
            ))}
          </CardComponentWithSpecial>
        </Container>
      </div>
    );
  }
}
export default Count;
