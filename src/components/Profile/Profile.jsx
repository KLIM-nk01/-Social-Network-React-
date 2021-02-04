import React from "react";
import ProfileStyle from "./Profile.module.scss";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import MyPostShare from "./PostShare/PostShare";
import Notification from "./Notification/Notification";
import PersonInf from "./PersonInf/PersonInf";
import PersonPost from "./PersonPost/PersonPost";
import PostContent from "./PersonPost/PostContent/PostContent";

function Profile() {
  return (
    <>
      <div className={ProfileStyle.profile_wrapper}>
        <div>
          {/* <ProfilePhoto/> */}
          <PersonInf />
        </div>
        <div>
          <MyPostShare />
          
          <PersonPost textContent="Hi, How are you?" />
          <PersonPost textContent="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy." />
          <PersonPost textContent="Hi, How are you?" />
          <PersonPost textContent="Hi, How are you?" />
          <PersonPost textContent="Hi, How are you?" />
          <PersonPost textContent="Hi, How are you?" />
          <PersonPost textContent="Hi, How are you?" />
        </div>
        <div>
          <Notification />
        </div>
      </div>
    </>
  );
}

export default Profile;
