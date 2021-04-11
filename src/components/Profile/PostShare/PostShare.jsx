import React from "react";
import PostShareStyle from "./PostShare.module.scss";
import Button from "../../Button/Button";


function PostShare(props) {
    let newPostContent = React.createRef();

    let addPost = () => {
        // let text = newPostContent.current.value;
        props.dispatch({ type: 'ADD-POST'})
        let action = { type: 'UPDATE-NEW-POST-TEXT', newText: ''};
        props.dispatch(action);
    }

    let onPostChange = () => {
        let text = newPostContent.current.value;
        let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);

    }

    return (
        <>
            <div className={PostShareStyle.Post_Share}>
                <img
                    src={'https://prikolist.club/wp-content/uploads/2019/08/kartinki_muzhskie_na_telefon_3_07073155.jpg'}
                    alt={'fdf'}/>
                <div className={PostShareStyle.Share}>

                    <textarea ref={newPostContent} placeholder={'Say Something'}
                              className={PostShareStyle.Share_wrapper}
                              value={props.newTextPostContent}
                              onChange={onPostChange}
                    />
                    <Button onClick={addPost} nameButton={'Share'}/>
                </div>
            </div>
        </>
    );
}

export default PostShare;
