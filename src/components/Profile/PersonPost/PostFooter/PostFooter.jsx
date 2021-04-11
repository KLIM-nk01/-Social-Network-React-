import React from "react";
import LikeCount from "./LikeCount/LikeCount";
import PostFooterStyle from "./PostFooter.module.scss";
import SocialButton from "./SocialButton/SocialButton";


function PostFooter(props) {
  return (
    <>
      <div className={PostFooterStyle.postFooter}>
        <LikeCount conutLikes={props.conutLikes}/>
        <SocialButton countComments={props.countComments} countSharePost={props.countSharePost}/>
      </div>
    </>
  );
}

export default PostFooter;