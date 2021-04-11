import React from "react";
import NameStyle from "./Name.module.scss";


function Name() {
  return (
    <>
      <div className={NameStyle.name}>
          <span>IT Programmer</span>
      </div>
    </>
  );
}

export default Name;
