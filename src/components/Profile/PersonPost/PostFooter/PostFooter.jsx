import React from "react";
import LikeCount from "./LikeCount/LikeCount";
import PostFooterStyle from "./PostFooter.module.scss";
import SocialButton from "./SocialButton/SocialButton";


function PostFooter() {
  return (
    <>
      <div className={PostFooterStyle.postFooter}>
        <LikeCount/>
        <SocialButton/>
      </div>
    </>
  );
}

export default PostFooter;