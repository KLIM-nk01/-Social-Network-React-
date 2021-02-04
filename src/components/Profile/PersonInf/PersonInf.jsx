import React from "react";
import About from "./About/About";
import Name from "./Name/Name";
import PersonInfStyle from "./PersonInf.module.scss";
import Status from "./Status/Status";


function PersonInf() {
  return (
    <>
      <div className={PersonInfStyle.personInf}>
          <Name/>
          <Status/>
          <About/>
      </div>
    </>
  );
}

export default PersonInf;
