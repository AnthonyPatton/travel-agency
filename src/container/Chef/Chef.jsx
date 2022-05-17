import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Wanderlust at it's finest" />
      <h1 className="headtext__cormorant">One day I just packed up and left</h1>
      <div className="app__chef-content">
        <div className="app__chef-content-quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            I've traveled near and far throughout my years and I've been lucky
            enough to backpack through Europe, tan in Thailand, Safari in
            Africa, and to watch the sunset from a Favela in South America.
          </p>
        </div>
        <p className="p__opensans">
          I've made friends from all over and I am glad to say that I've also
          made some friends at Seahorse Traveling. They made my adventures
          seamless and continue to be there whenever I decide to wander off.
          Salutations.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Lou</p>
        <p className="p__opensans">Former Client</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
