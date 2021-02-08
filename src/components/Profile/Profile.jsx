import React from "react";
import ProfileStyle from "./Profile.module.scss";
import PostShare from "./PostShare/PostShare";
import Notification from "./Notification/Notification";
import PersonInf from "./PersonInf/PersonInf";
import PersonPost from "./PersonPost/PersonPost";
import PostContent from "./PersonPost/PostContent/PostContent";

function Profile(props) {
    //

    let postElement = props.state.postData.map((el) =>

        <PersonPost imgSrc={'https://prikolist.club/wp-content/uploads/2019/08/kartinki_muzhskie_na_telefon_3_07073155.jpg'}
                    nameSurname={el.nameSurname}
                    postTextContent={el.postTextContent}
                    conutLikes={el.countLikes}
                    countComments={el.countComments}
                    countSharePost={el.countSharePost}
                    removePost={props.removePost}

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
                    <PostShare updateNewPostText={props.updateNewPostText} newTextPostContent={props.state.newTextPostContent} addPost={props.addPost}/>
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
