import React from "react";
import Burger from "../../../Burger/Burger";
import Person from "./Person/Person";
import PostHeaderStyle from "./PostHeader.module.scss";


function PostHeader(props) {
  return (
    <>
      <div className={PostHeaderStyle.postHeader}>
          <Person imgSrc={props.imgSrc} nameSurname={props.nameSurname}/>
          <Burger/>
      </div>
    </>
  );
}

export default PostHeader;
