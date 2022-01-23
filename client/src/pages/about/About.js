
import React from "react";
import NavBar from "../../components/navigation/NavBar.js";

import "./About.css";
import "../../util/utilities.js";

// X people have visited this page to learn more about NFTs! 

const About = () => {
  return (
    <>
    <div className="AboutPage">
        <NavBar/>
        <div className="u-flex">
            <div className="About-subContainer u-textCenter">
              <h4 className="About-title">Imagine</h4>
              <div id="About-text">
                  <div>
                    <p>… a world defined by different currencies</p>
                    <p>… a fully digital art environment</p>
                    <p>… no “true” ownership of intangible goods</p> 
                  </div>
              </div>
              <h4 className="About-title">Would you survive?</h4>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
