import React from "react";
import ProfileStyle from "./Profile.module.scss";
import MyPostShare from "./PostShare/PostShare";
import Notification from "./Notification/Notification";
import PersonInf from "./PersonInf/PersonInf";
import PersonPost from "./PersonPost/PersonPost";
import PostContent from "./PersonPost/PostContent/PostContent";

function Profile(props) {
    //

    let postElement = props.postData.map((el) =>
        <PersonPost imgSrc={el.imgSrc}
                    nameSurname={el.nameSurname}
                    postTextContent={el.postTextContent}
                    conutLikes={el.countLikes}
                    countComments={el.countComments}
                    countSharePost={el.countSharePost}
        />
    );

    return (
        <>
            <div className={ProfileStyle.profile_wrapper}>
                <div>
                    {/* <ProfilePhoto/> */}
                    <PersonInf/>
                </div>
                <div>
                    <MyPostShare/>
                    {postElement}

                </div>
                <div>
                    <Notification/>
                </div>
            </div>
        </>
    );
}

export default Profile;
