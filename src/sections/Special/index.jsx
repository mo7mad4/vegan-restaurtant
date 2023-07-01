import React, { Component } from "react";
import CardComponentWithSpecial from "../../components/CardComponentWithSpecial";
import GridContant from "../../components/GridContant";
import ThreeCardForSpecial from "./ThreeCardForSpecial";
import specialData from "../../mock/SpecialData";

import "./style.css";

class Special extends Component {
  render() {
    return (
      <div className="special">
        <GridContant
          title="special"
          subTitle="What makes us special"
          isCentered
        />
        <CardComponentWithSpecial>
          {specialData.map((data) => (
            <ThreeCardForSpecial
              img={data.img}
              title={data.title}
              content={data.content}
            />
          ))}
        </CardComponentWithSpecial>
      </div>
    );
  }
}
export default Special;
