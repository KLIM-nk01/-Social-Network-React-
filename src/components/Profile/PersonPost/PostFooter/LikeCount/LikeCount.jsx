import React from "react";
import LikeCountStyle from "./LikeCount.module.scss";


function LikeCount() {
  return (
    <>
      <div className={LikeCountStyle.likeCount}>
         <button type='button'>
         <img src="https://img.icons8.com/officexs/20/000000/filled-like.png"/>
         <span>You and 207 people like this</span>
         </button>
      </div>
    </>
  );
}

export default LikeCount;
