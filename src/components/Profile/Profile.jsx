import React from "react";
import ProfileStyle from "./Profile.module.scss";
import MyPostShare from "./PostShare/PostShare";
import Notification from "./Notification/Notification";
import PersonInf from "./PersonInf/PersonInf";
import PersonPost from "./PersonPost/PersonPost";
import PostContent from "./PersonPost/PostContent/PostContent";

function Profile() {
    let postData = [
        {
            idUrl: '1',
            imgSrc: 'https://cs-love.net/avatars/images/cs-love-avatar-1.jpg',
            nameSurname: 'Big Daddy',
            postTextContent: 'People in Great Britain like animals. There are even special hospitals, which help wild animals. There are a lot of television films about wildlife.',
            postImgContent: '',
            countLikes: 25,
            countComments: 56,
            countSharePost: 66,
        },
        {
            idUrl: '2',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8CnE68XQBRKNs4u2QK1UqyTq1nXh-DkmrxA&usqp=CAU',
            nameSurname: 'Big Mom',
            postTextContent: 'The British often think their animals are like people. For example in Britain animals can have jobs like people. British Rail has cats and pays them for their work. Their job is to catch mice. There is usually one cat per station. They get food and free medical help. The cats don’t catch a lot of mice but they are very popular with the British Rail staff and travellers. even special hospitals, which help wild animals. There are a lot of television films about wildlife.',
            postImgContent: '',
            countLikes: 101,
            countComments: 45,
            countSharePost: 84,
        },
        {
            idUrl: '3',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEEPu4T3S0axc4F4wshrMsnIs2w0tJqHqhg&usqp=CAU',
            nameSurname: 'Happy Hours',
            postTextContent: 'The British often think their animals are like people. They get food and free medical help. The cats don’t catch a lot of mice but they are very popular with the British Rail staff and travellers. even special hospitals, which help wild animals. There are a lot of television films about wildlife.',
            postImgContent: '',
            countLikes: 56,
            countComments: 36,
            countSharePost: 73,
        },
        {
            idUrl: '4',
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPF5MNN5EW8kJUQGj9QlwyGJhBTESjzows0g&usqp=CAU',
            nameSurname: 'Big Man',
            postTextContent: 'The British often think their animals are like people. For example in Britain animals can have jobs like people. British Rail has cats and pays them for their work. Their job is to catch mice. There is usually one cat per station. They get food and free medical help. The cats don’t catch a lot of mice but they are very popular with the British Rail staff and travellers. even special hospitals, which help wild animals. There are a lot of television films about wildlife.',
            postImgContent: '',
            countLikes: 66,
            countComments: 7,
            countSharePost: 9,
        },

    ];
    let postElement = postData.map((el) =>
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
