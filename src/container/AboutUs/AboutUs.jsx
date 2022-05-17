import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bgAbout flex__center section__padding"
    id="about"
  >
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div> */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">
          About <br></br> Us
        </h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          We have partners and connections all around the globe that give us
          destinations and great businesses to network worth. This is how we are
          able to service our clients with the best deals and packages on the
          market.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">
          Our <br></br> History
        </h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Seahorse Travel has casually served our communities in the Seattle,
          San Diego, and Florida locations for over a decade. From vacations,
          weddings, and honeymoons we have been there every step of the way in
          creating these great experiences.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
