import React from "react";
import PersonPostStyle from "./PersonPost.module.scss";
import PostContent from "./PostContent/PostContent";
import PostFooter from "./PostFooter/PostFooter";
import PostHeader from "./PostHeader/PostHeader";

function PersonPost(props) {

  return (
    <>
      <div className={PersonPostStyle.personPost}>
        <PostHeader removePost={props.removePost} imgSrc={props.imgSrc} nameSurname={props.nameSurname}/>
        <PostContent postTextContent={props.postTextContent} />
        <PostFooter conutLikes={props.conutLikes} countComments={props.countComments} countSharePost={props.countSharePost}/>
      </div>
    </>
  );
}

export default PersonPost;
