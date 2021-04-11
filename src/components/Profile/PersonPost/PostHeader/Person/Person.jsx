import React from "react";
import PersonStyle from "./Person.module.scss";
import Photo from "../../../../../assets/Programmirer.jpg";

function Person(props) {
  return (
    <>
      <div className={PersonStyle.person}>
        <img src={props.imgSrc} alt="Profile Photo" />
        <div>
          <p>{props.nameSurname}</p>
          <span>Time</span>
        </div>
      </div>
    </>
  );
}

export default Person;
