import React from "react";
import Burger from "../../../Burger/Burger";
import Person from "./Person/Person";
import PostHeaderStyle from "./PostHeader.module.scss";


function PostHeader() {
  return (
    <>
      <div className={PostHeaderStyle.postHeader}>
          <Person/>
          <Burger/>
      </div>
    </>
  );
}

export default PostHeader;
