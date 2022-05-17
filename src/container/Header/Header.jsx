import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Let's go on an adventure" />
      <h1 className="app__header-h1">It’s time to see the world</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        {" "}
        We offer an extremely competitive array of Worldwide Air Flights,
        Hotels, Car Rentals, City Views, and Tailor made holiday packages.
      </p>
      <button type="button" className="custom__button">
        <a href="#menu">See Packages</a>
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.tourists} alt="header img" />
    </div>
  </div>
);

export default Header;
