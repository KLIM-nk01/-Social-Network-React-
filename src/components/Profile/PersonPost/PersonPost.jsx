import React from "react";
import PersonPostStyle from "./PersonPost.module.scss";
import PostContent from "./PostContent/PostContent";
import PostFooter from "./PostFooter/PostFooter";
import PostHeader from "./PostHeader/PostHeader";

function PersonPost(props) {
  return (
    <>
      <div className={PersonPostStyle.personPost}>
        <PostHeader />
        <PostContent textContent={props.textContent} />
        <PostFooter />
      </div>
    </>
  );
}

export default PersonPost;
