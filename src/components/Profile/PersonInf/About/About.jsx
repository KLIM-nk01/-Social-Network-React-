import React from "react";
import AboutStyle from "./About.module.scss";

function About() {
  return (
    <>
      <div className={AboutStyle.about}>
        <div>
          
          <a href="#">Work Place</a>
        </div>
        <div>
          <a href="#">Home Place</a>
        </div>
        <div>
          <a href="#">Place of study</a>
        </div>
        <div>
          <a href="#">Hobby</a>
        </div>
      </div>
    </>
  );
}

export default About;
