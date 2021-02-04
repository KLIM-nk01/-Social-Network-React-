import React from "react";
import PersonStyle from "./Person.module.scss";
import Photo from "../../../../../assets/Programmirer.jpg";

function Person() {
  return (
    <>
      <div className={PersonStyle.person}>
        <img src={Photo} alt="Profile Photo" />
        <div>
          <p>Tom Hardee</p>
          <span>Time</span>
        </div>
      </div>
    </>
  );
}

export default Person;
