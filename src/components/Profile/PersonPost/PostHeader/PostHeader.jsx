import React from "react";
import Burger from "../../../Burger/Burger";
import Person from "./Person/Person";
import PostHeaderStyle from "./PostHeader.module.scss";


function PostHeader(props) {
    let onClick = () => {
        props.dispatch({type: 'REMOVE-POST'});
    }
  return (
    <>
      <div className={PostHeaderStyle.postHeader}>
          <Person imgSrc={'https://prikolist.club/wp-content/uploads/2019/08/kartinki_muzhskie_na_telefon_3_07073155.jpg'} nameSurname={props.nameSurname}/>
          <Burger onClick={onClick}/>
      </div>
    </>
  );
}

export default PostHeader;
