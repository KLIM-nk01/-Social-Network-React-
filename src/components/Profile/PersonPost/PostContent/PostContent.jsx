import React from "react";
import PostContentStyle from "./PostContent.module.scss";


function PostContent(props) {
  return (
    <>
      <div className={PostContentStyle.postContent}>
          <span>{props.postTextContent}</span>
         
      </div>
    </>
  );
}

export default PostContent;
